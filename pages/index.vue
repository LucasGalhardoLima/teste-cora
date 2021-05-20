<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Index',
  data: () => ({
    items: [1, 2, 3, 4],
  }),
  computed: {
    ...mapGetters(['getListHistory']),
  },
  mounted() {
    this.listHistory()
  },
  methods: {
    ...mapActions(['listHistory']),
  },
}
</script>

<template>
  <div class="container">
    <div>
      <Header class="pb-10" />
      <div v-if="getListHistory.length > 0">
        <History
          v-for="(item, pos) in getListHistory"
          :key="pos"
          :item-pos="pos"
          :item="item"
        />
      </div>
      <p v-else class="text-center py-12 text-pink-500 text-2xl">
        Nenhum item encontrado :'(
      </p>
    </div>
  </div>
</template>
