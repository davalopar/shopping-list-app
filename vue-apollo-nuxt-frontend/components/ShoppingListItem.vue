<template>
  <div class="item">
    {{ item.name }}
    <button @click="$emit('remove', item.id)">
      🗑
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
}

button {
  background: white;
  border: none;
  padding: 0;
}
</style>
