<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name: "Goodlist",
  components:{
      GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    /* padding: 2px; */
  }
</style>