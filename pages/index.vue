<script>
export default {
  name: 'Index',
  data: () => ({
    items: [1, 2, 3, 4],
  }),
}
</script>

<template>
  <div class="container">
    <div>
      <Header class="pb-10" />
      <History v-for="(item, pos) in items" :key="item" :item-pos="pos" />
    </div>
  </div>
</template>
