<template>
  <section class="categories">
    <div class="main_container">
      <h1>Популярные категории</h1>
      <div class="categories_list">
        <div
          v-for="category in categories"
          :key="category.name"
          class="card"
        >
          <div class="img" :style="{'background-image': `url(${category.img})`}" />
          <div class="category_name">{{category.name}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
const categories = ref([
  {
    name: 'Кольца',
    img: 'categories/rings.png'
  },
  {
    name: 'Серьги',
    img: 'categories/sergies.png'
  },
  {
    name: 'Помолвочные кольца',
    img: 'categories/married_rings.png'
  },
  {
    name: 'Браслеты',
    img: 'categories/braslets.png'
  },
  {
    name: 'Колье и подвески',
    img: 'categories/cep.png'
  },
  {
    name: 'Часы',
    img: 'categories/smarts.png'
  },
])
</script>

<style lang="scss" scoped>
.categories{
  margin-bottom: 120px;
  h1{
    font-family: 'Prata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  }
  &_list{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .card{
      width: 200px;
      height: 259px;
      background: #F8F8F8;
      margin: 8px;
      padding: 60px 35px 25px;
      cursor: pointer;
      .img{
        width: 128px;
        margin: 0 auto;
        height: 140px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
      .category_name{
        text-align: center;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
      }
    }
  }
}
</style>
