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
    console.log(this.getListHistory)
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
      <History
        v-for="(item, pos) in getListHistory.results"
        :key="pos"
        :item-pos="pos"
        :item="item"
      />
    </div>
  </div>
</template>
