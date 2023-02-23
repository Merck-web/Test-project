<template>
  <section class="articles">
    <div class="main_container">
      <div class="header">
        <h1>Статьи</h1>
        <button class="default_hover cursor-pointer">Читать все
          <svg
            width="27"
            height="12"
            viewBox="0 0 27 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="margin-left: 12px"
          >
            <path
              d="M26.5303 6.53033C26.8232 6.23744 26.8232 5.76257 26.5303 5.46967L21.7574 0.696701C21.4645 0.403808 20.9896 0.403808 20.6967 0.696701C20.4038 0.989594 20.4038 1.46447 20.6967 1.75736L24.9393 6L20.6967 10.2426C20.4038 10.5355 20.4038 11.0104 20.6967 11.3033C20.9896 11.5962 21.4645 11.5962 21.7574 11.3033L26.5303 6.53033ZM-6.55671e-08 6.75L26 6.75L26 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
              fill="black"/>
          </svg>
        </button>
      </div>
      <div class="article_box">
        <template
          v-for="(item, index) in articles"
          :key="index">
          <CardArticle :data="item"/>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import CardArticle from "components/components/CardArticle";

const articles = ref([
  {
    img: 'articles/1.png',
    date: '21 сентября 2021',
    name: 'Обручальные кольца: тренды 2021'
  },
  {
    img: 'articles/2.png',
    date: '25 сентября 2021',
    name: 'Главные ювелирные тренды года'
  },
  {
    img: 'articles/3.png',
    date: '21 сентября 2021',
    name: 'Жемчуг: 7 малоизвестных фактов о культовом украшении'
  },
  {
    img: 'articles/4.png',
    date: '21 сентября 2021',
    name: 'Как отличить золото от подделки: 10 практических советов'
  },
])
</script>

<style lang="scss" scoped>
.articles {
  margin-bottom: 110px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h1 {
      font-family: 'Prata', sans-serif;
      font-weight: 400;
      font-size: 40px;
    }

    button {
      background-color: transparent;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
    }
  }

  .article_box {
    padding: 0 10px;
    grid-gap: clamp(1rem,2vw,24px);
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  }
}
</style>
