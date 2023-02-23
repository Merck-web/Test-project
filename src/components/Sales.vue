<template>
  <section class="sales">
    <div class="main_container">
      <h1>Распродажа</h1>
      <div class="toggles">
        <div class="tabs">
          <button
            v-for="btn in categoryOptions"
            :key="btn.value"
            class="tab_btn"
            :class="currentCategory === btn.value ? 'active' : ''"
            @click="toggleBtn(btn.value)"
          >
            {{ btn.label }}
          </button>
        </div>
        <div class="btn_slider">
          <button
            class="btn_prev default_hover"
            :class="disablePrev ? 'disable' : ''"
            :disabled="disablePrev"
            @click="prev"
          />
          <button
            class="btn_next default_hover"
            :class="disableNext ? 'disable' : ''"
            :disabled="disableNext"
            @click="next"
          />
        </div>
      </div>
      <div class="box_cards">
        <div>
          <swiper
            :loop="false"
            :space-between="20"
            :speed="2000"
            :breakpoints="{
              '1023': {
                slidesPerView: 4
              },
              '0': {
                slidesPerView: 1
              }
            }"
            slides-per-view="auto"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="slide in items"
              :key="slide.id"
            >
              <CardItem
                :data="slide"
              />
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper/core';
import CardItem from "components/components/CardItem";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);


const currentCategory = ref('Кольца');
const categoryOptions = ref([
  {label: 'Кольца', value: 'Кольца'},
  {label: 'Серьги', value: 'Серьги'},
  {label: 'Браслеты', value: 'Браслеты'},
  {label: 'Часы', value: 'Часы'},
]);
const swiperRef = ref(null);

const items = ref([
  {
    id: 1,
    images: ['itemsSales/item1.png', 'itemsSales/item1.png','itemsSales/item1.png'],
    price: '41000',
    oldPrice: '65000',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 2,
    images: ['itemsSales/item2.png', 'itemsSales/item3.png','itemsSales/item1.png'],
    price: '21000',
    oldPrice: '65000',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 3,
    images: ['itemsSales/item2.png', 'itemsSales/item1.png','itemsSales/item3.png'],
    price: '41000',
    oldPrice: '',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 4,
    images: ['itemsSales/item4.png', 'itemsSales/item2.png','itemsSales/item1.png'],
    price: '41000',
    oldPrice: '',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 5,
    images: ['itemsSales/item3.png', 'itemsSales/item4.png','itemsSales/item2.png'],
    price: '41000',
    oldPrice: '',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 6,
    images: ['itemsSales/item4.png', 'itemsSales/item3.png','itemsSales/item1.png'],
    price: '60000',
    oldPrice: '65000',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 7,
    images: ['itemsSales/item4.png', 'itemsSales/item2.png','itemsSales/item1.png'],
    price: '41000',
    oldPrice: '',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 8,
    images: ['itemsSales/item3.png', 'itemsSales/item4.png','itemsSales/item2.png'],
    price: '41000',
    oldPrice: '',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  },
  {
    id: 9,
    images: ['itemsSales/item4.png', 'itemsSales/item3.png','itemsSales/item1.png'],
    price: '60000',
    oldPrice: '65000',
    description: 'Стильное кольцо из белого золота c бриллиантами'
  }
])

function toggleBtn(target) {
  currentCategory.value = target
}

function next() {
  console.log(swiperRef.value.isBeginning)
  swiperRef.value.slideNext();
}

function prev() {
  console.log(swiperRef.value.isBeginning)
  swiperRef.value.slidePrev();
}

function onSwiper(swiper) {
  swiperRef.value = swiper;
}

const disableNext = computed(() => {
  return swiperRef.value && swiperRef.value && swiperRef.value.isEnd
})
const disablePrev = computed(() => {
  return swiperRef.value && swiperRef.value && swiperRef.value.isBeginning
})
</script>

<style lang="scss">
@import '~swiper/swiper-bundle.css';

.sales {
  margin-bottom: 120px;

  h1 {
    font-family: 'Prata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 24px;
  }

  .toggles {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tabs {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    .tab_btn {
      padding: 13px 30px;
      font-weight: 400;
      font-size: 14px;
      color: #303030;
      background: #F0F0F0;
      border-radius: 21px;
      transition: all .3s linear;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 8px;
      }

      &:hover {
        background: #DDDDDD;
      }

      &.active {
        background: #303030;
        color: white;
      }
    }
  }

  .btn_slider {
    display: flex;
    align-items: center;

    .btn_prev,
    .btn_next {
      cursor: pointer;
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background-color: #fff;
      border: 1px solid #303030;
      background-image: url("../../public/slide_arrow.png");
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      z-index: 3;

      &.disable {
        opacity: .1;
      }
    }

    .btn_next {
      margin-left: 8px;
      transform: rotate(180deg);
    }
  }

  .box_cards{
    margin-top: 35px;
  }
}
</style>
