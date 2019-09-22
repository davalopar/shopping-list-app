<template>
  <div class="container">
    <InputItem
      v-model="newItem"
      placeholder="New item"
      @keydown.enter="addItem"
    />
    <div v-if="items.length">
      <ShoppingListItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        @remove="removeItem"
      />
    </div>
    <p v-else>
      Add a new item in the input above!
    </p>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import InputItem from './InputItem.vue'
import ShoppingListItem from './ShoppingListItem.vue'

const createItemMutation = gql`
  mutation CreateItem($name: String!) {
    createItem(name: $name) {
      id
      name
    }
  }
`

const deleteItemMutation = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`

const itemsQuery = gql`
  query items {
    items {
      id
      name
    }
  }
`

export default {
  components: {
    InputItem,
    ShoppingListItem
  },
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
    async addItem() {
      const trimmedText = this.newItem.trim()
      this.newItem = ''
      if (trimmedText) {
        await this.$apollo.mutate({
          mutation: createItemMutation,
          variables: { name: trimmedText },
          // refetchQueries: (mutationResult) => [{ query: itemsQuery }],
          optimisticResponse: {
            // updates the store before getting results from server / mutation
            __typename: 'Mutation',
            createItem: {
              __typename: 'Item',
              id: '',
              name: trimmedText
            }
          },
          update: (store, { data: { createItem } }) => {
            // updates the store when the mutation succeeds on the graphql server
            // without this or refetchQueries you won't see any update in the UI.
            // if you just have refetchQueries on, it has to 2 round trips
            // - 1. mutation
            // - 2. rerunning the query passed in
            const query = {
              query: itemsQuery
            }
            // Read the query from cache
            const data = store.readQuery(query)
            // Mutate cache result
            data.items.push(createItem)
            // Write back to the cache
            store.writeQuery({
              ...query,
              data
            })
          }
        })
      }
    },
    async removeItem(id) {
      await this.$apollo.mutate({
        mutation: deleteItemMutation,
        variables: { id },
        optimisticResponse: {
          __typename: 'Mutation',
          deleteItem: {
            __typename: 'Item',
            id
          }
        },
        update: (store, { data: { deleteItem } }) => {
          const query = {
            query: itemsQuery
          }
          const data = store.readQuery({
            query: itemsQuery
          })
          data.items = data.items.filter((item) => item.id !== id)
          store.writeQuery({
            ...query,
            data
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  line-height: 1.4;
}
</style>
