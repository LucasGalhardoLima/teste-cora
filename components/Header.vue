<script>
import { mapActions } from 'vuex'
export default {
  name: 'Header',
  data: () => ({
    option: 'all',
    search: '',
  }),
  watch: {
    async option(after, before) {
      await this.listHistoryByStatus(this.option)
      if (this.search)
        await this.searchListHistory({
          search: this.search,
          option: this.option,
        })
    },
    async search(after, before) {
      await this.searchListHistory({ search: this.search, option: this.option })
    },
  },
  methods: {
    ...mapActions(['listHistoryByStatus', 'searchListHistory']),
  },
}
</script>

<template>
  <div class="flex gap-10 items-center flex-wrap">
    <button
      :class="{
        'rounded-full': true,
        'px-4': true,
        'py-1': true,
        'text-base': true,
        'focus:outline-none': true,
        'focus:bg-pink-500': true,
        'text-pink-500': option !== 'all',
        'hover:bg-gray-100': option !== 'all',
        'bg-pink-500 text-white': option === 'all',
      }"
      @click="option = 'all'"
    >
      Tudo
    </button>
    <button
      :class="{
        'rounded-full': true,
        'px-4': true,
        'py-1': true,
        'text-base': true,
        'focus:outline-none': true,
        'focus:bg-pink-500': true,
        'text-pink-500': option !== 'CREDIT',
        'hover:bg-gray-100': option !== 'CREDIT',
        'bg-pink-500 text-white': option === 'CREDIT',
      }"
      @click="option = 'CREDIT'"
    >
      Entrada
    </button>
    <button
      :class="{
        'rounded-full': true,
        'px-4': true,
        'py-1': true,
        'text-base': true,
        'focus:outline-none': true,
        'focus:bg-pink-500': true,
        'text-pink-500': option !== 'DEBIT',
        'hover:bg-gray-100': option !== 'DEBIT',
        'bg-pink-500 text-white': option === 'DEBIT',
      }"
      @click="option = 'DEBIT'"
    >
      Saída
    </button>
    <button
      :class="{
        'rounded-full': true,
        'px-4': true,
        'py-1': true,
        'text-base': true,
        'focus:outline-none': true,
        'focus:bg-pink-500': true,
        'text-pink-500': option !== 'future',
        'hover:bg-gray-100': option !== 'future',
        'bg-pink-500 text-white': option === 'future',
      }"
      @click="option = 'future'"
    >
      Futuro
    </button>
    <form class="relative flex-grow">
      <svg
        width="20"
        height="20"
        fill="currentColor"
        class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        v-model="search"
        class="
          focus:border-pink-100
          focus:ring-1 focus:ring-pink-500
          focus:outline-none
          w-full
          text-sm text-black
          placeholder-gray-500
          border border-gray-100
          bg-gray-100
          rounded-md
          py-5
          pl-12
          rounded-2xl
        "
        type="text"
        aria-label="Pesquisar"
        placeholder="Pesquisar"
      />
    </form>
  </div>
</template>
