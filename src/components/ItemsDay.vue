<template>
  <section class="items_day">
    <div class="main_container">
      <div class="header flex items-center justify-between">
        <h1>Товар дня</h1>
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

      <div class="box">
        <swiper
          :loop="false"
          :space-between="20"
          :speed="2000"
          :slidesPerView="1"
          slides-per-view="auto"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="slide in items"
            :key="slide.id"
          >
            <ItemsDaySaleCard :data="slide" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
import {computed, ref} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper/core';
import ItemsDaySaleCard from "components/components/ItemsDaySaleCard";

const items = ref([
  {
    id: 11,
    images: ['itemsDays/itemsDay1.png', 'itemsDays/itemsDay1.png','itemsDays/itemsDay1.png'],
    price: '41000',
    oldPrice: '65000',
    description: 'Кольцо из золота с бриллиантами',
    rating: 4.4,
    articul: '1012076',
    time: '',
    colors: ['#D9D9D9', '#F1CB7E', '#EA8C48', '#A7E492'],
    sizes: [
      {
        size: '16,5',
        have: true
      },
      {
        size: '17,5',
        have: true
      },
      {
        size: '18,5',
        have: true
      },
      {
        size: '19,5',
        have: true
      },
      {
        size: '20',
        have: true
      },
      {
        size: '20.5',
        have: false
      },
      {
        size: '22',
        have: false
      },
    ],
    isHit: true,
    isNew: true,
    timer: '12:15:02'
  },
  {
    id: 21,
    images: ['itemsDays/itemsDay1.png', 'itemsDays/itemsDay1.png','itemsDays/itemsDay1.png'],
    price: '21000',
    oldPrice: '65000',
    description: 'Кольцо из золота с бриллиантами',
    rating: 4.5,
    articul: '1012076',
    time: '',
    colors: ['#35b99a', 'rgba(107,69,239,0.91)', '#81593d', '#55b236'],
    sizes: [
      {
        size: '16,5',
        have: true
      },
      {
        size: '17,5',
        have: true
      },
      {
        size: '18,5',
        have: true
      },
      {
        size: '19,5',
        have: true
      },
      {
        size: '20',
        have: true
      },
      {
        size: '20.5',
        have: false
      },
      {
        size: '22',
        have: false
      },
    ],
    isHit: true,
    isNew: false,
    timer: '06:00:02'
  },
  {
    id: 31,
    images: ['itemsDays/itemsDay1.png', 'itemsDays/itemsDay1.png','itemsDays/itemsDay1.png'],
    price: '41000',
    oldPrice: '42000',
    description: 'Кольцо из золота с бриллиантами',
    rating: 3.9,
    articul: '1012076',
    time: '',
    colors: ['#a99d1f', '#F1CB7E', '#EA8C48'],
    sizes: [
      {
        size: '16,5',
        have: true
      },
      {
        size: '17,5',
        have: true
      },
      {
        size: '18,5',
        have: true
      },
      {
        size: '19,5',
        have: true
      },
      {
        size: '20',
        have: true
      },
      {
        size: '20.5',
        have: false
      },
      {
        size: '22',
        have: false
      },
    ],
    isHit: true,
    isNew: true,
    timer: '00:10:05'
  },
])

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

const swiperRef = ref(null);

function onSwiper(swiper) {
  swiperRef.value = swiper;
}

function next() {
  swiperRef.value.slideNext();
}

function prev() {
  swiperRef.value.slidePrev();
}

const disableNext = computed(() => {
  return swiperRef.value && swiperRef.value && swiperRef.value.isEnd
})
const disablePrev = computed(() => {
  return swiperRef.value && swiperRef.value && swiperRef.value.isBeginning
})
</script>

<style lang="scss">
.items_day{
  margin-bottom: 120px;

  .swiper{
    @media (max-width: 1240px) {
      height: 1000px;
    }
  }

  h1 {
    font-family: 'Prata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 40px;
  }

  .btn_slider {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

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
}
</style>
