<template>
  <ApolloQuery
    :query="
      (gql) => gql`
        query items {
          items {
            id
            name
          }
        }
      `
    "
  >
    <template v-slot="{ result: { loading, error, data } }">
      <div id="app">
        <h1>Shopping List 🛒</h1>
        <ShoppingList :items="data.items" />
      </div>
    </template>
  </ApolloQuery>
</template>

<script>
import ShoppingList from '../components/ShoppingList.vue'

export default {
  components: {
    ShoppingList
  }
}
</script>
