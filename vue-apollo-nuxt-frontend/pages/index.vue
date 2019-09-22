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
      <div class="page">
        <div class="heading">Shopping List 🛒</div>
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

<style scoped>
.page {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  background: white;
  height: 700px;
  box-shadow: 5em;
  border-radius: 5px;
  padding: 20px;
}

.heading {
  font-size: 25px;
  font-weight: 300;
}
</style>
