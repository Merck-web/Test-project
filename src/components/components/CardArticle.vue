<template>
  <div class="card_wrapper">
    <div class="image" :style="{'background-image': `url(${data.img})`}" />
    <p class="date" v-text="data.date"/>
    <p class="title" v-text="data.name"/>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {type: Object, default: {}}
})
</script>

<style lang="scss" scoped>
.card_wrapper {
  width: 310px;
  display: flex;
  flex-direction: column;

  .image {
    width: 310px;
    height: 380px;
    margin-bottom: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .date {
    font-weight: 400;
    font-size: 14px;
    color: #8F8F8F;
    margin-bottom: 12px;
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    color: #303030;
  }
}
</style>
