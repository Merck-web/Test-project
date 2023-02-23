<template>
  <div class="card_wrapper">

    <div v-if="props.data.oldPrice" class="chip_sale">Sale</div>

    <div class="images_slider">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        navigation
        control-color="primary"
        class="rounded-borders"
      >
        <q-carousel-slide
          v-for="(img, index) in props.data.images"
          :key="index"
          :name="index + 1"
          class="column no-wrap flex-center"
        >
          <div class="image_sales" :style="{'background-image': `url(${img})`}"/>
        </q-carousel-slide>

        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <div class="my_control active" v-if="active" @click="onClick"/>
          <div class="my_control" v-else @click="onClick"/>
        </template>
      </q-carousel>
    </div>

    <div class="content flex items-center justify-between wrap">
      <p>
        <span class="price">{{addSpacesToNumber(props.data.price)}} ₽</span>
        <span class="oldPrice">{{props.data.oldPrice ? `${addSpacesToNumber(props.data.oldPrice)} ₽` : ''}}</span>
      </p>
      <div v-if="props.data.oldPrice" class="calcSales">{{calcSales}}</div>
    </div>

    <div class="description">
      {{props.data.description}}
    </div>

    <div class="icons_settings">
      <div
        @click="toggleAdd(props.data)"
        class="cursor-pointer" style="margin-bottom: 10px;"
      >
        <svg v-if="addOrNot" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.94668e-08 5.39995C-0.000248434 3.95029 0.582385 2.5614 1.61681 1.54578C2.65124 0.530159 4.05058 -0.026895 5.5 -4.93311e-05C7.21732 -0.00916934 8.85599 0.719125 10 1.99995C11.144 0.719125 12.7827 -0.00916934 14.5 -4.93311e-05C15.9494 -0.026895 17.3488 0.530159 18.3832 1.54578C19.4176 2.5614 20.0002 3.95029 20 5.39995C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.39995Z"
            fill="#E24B33"/>
        </svg>
        <svg v-else width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.94668e-08 5.40001C-0.000248434 3.95035 0.582385 2.56146 1.61681 1.54584C2.65124 0.53022 4.05058 -0.026834 5.5 1.1704e-05C7.21732 -0.0091083 8.85599 0.719186 10 2.00001C11.144 0.719186 12.7827 -0.0091083 14.5 1.1704e-05C15.9494 -0.026834 17.3488 0.53022 18.3832 1.54584C19.4176 2.56146 20.0002 3.95035 20 5.40001C20 10.756 13.621 14.8 10 18C6.387 14.773 7.94668e-08 10.76 7.94668e-08 5.40001Z"
            fill="#C9C9C9"/>
        </svg>

      </div>
      <div class="cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11.0044 1.5C11.0044 0.947715 10.5567 0.5 10.0044 0.5C9.45211 0.5 9.00439 0.947715 9.00439 1.5V3.54989C8.04476 3.64609 7.12848 3.87731 6.27405 4.20772L5.4446 3.05037C5.12289 2.60146 4.49817 2.49836 4.04927 2.82007C3.60036 3.14179 3.49726 3.76651 3.81898 4.21541L4.45792 5.10695C3.92702 5.43178 3.434 5.79271 2.98539 6.17708C1.24791 7.6658 0 9.66836 0 11.5C0 13.3316 1.24791 15.3342 2.98539 16.8229C4.76222 18.3453 7.23586 19.5 10 19.5C12.7639 19.5 15.2376 18.3462 17.0145 16.8241C18.7522 15.3355 20 13.333 20 11.5C20 9.66702 18.7522 7.66444 17.0145 6.17591C16.6848 5.89346 16.331 5.62368 15.9559 5.37161L16.6253 4.43759C16.947 3.98869 16.844 3.36398 16.3951 3.04225C15.9462 2.72053 15.3214 2.82362 14.9997 3.27252L14.1918 4.39975C13.2102 3.96793 12.1376 3.66528 11.0044 3.55075V1.5ZM10 7.5C7.79086 7.5 6 9.29086 6 11.5C6 13.7091 7.79086 15.5 10 15.5C12.2091 15.5 14 13.7091 14 11.5C14 9.29086 12.2091 7.5 10 7.5Z"
                fill="#C9C9C9"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useStore} from "vuex";

const $store = useStore();

const props = defineProps({
  data: {type: Object, default: {}}
})

const slide = ref(1)

function toggleAdd(item) {
  const allItems = $store.getters["items/getItems"];
  const index = allItems.find(target => target.id === item.id)?.id;
  if (!!allItems.find(target => target.id === item.id)?.id) {
    $store.dispatch('items/deleteCurrentItem', index)
  } else {
    $store.dispatch('items/setCurrentItem', item)
  }
}

function addSpacesToNumber(number) {
  if (number == null)
    number = '0';

  if (typeof number !== 'string') {
    number = number.toString();
  }

  number = number.split('.');
  number[0] = number[0].replace(/\s/g, '');
  number[0] = number[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  number = number.join('.');

  return number;
}


const addOrNot = computed(() => {
  const allItems = $store.getters["items/getItems"];
  return !!allItems.find(item => item?.id === props.data.id)?.id
})

const calcSales = computed(() => {
  if (!!props.data.oldPrice){
    return `-${Math.round(((props.data.oldPrice - props.data.price) / props.data.oldPrice) * 100)}%`
  }
})

</script>
<style lang="scss">
.card_wrapper {
  .q-carousel {
    width: 200px !important;
    height: 200px !important;
  }
  .q-carousel__slide{
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
.card_wrapper {
  width: 310px;
  height: 370px;
  background: #FFFFFF;
  padding: 16px 20px;
  border: 1px solid #F0F0F0;
  position: relative;

  .icons_settings {
    position: absolute;
    top: 19px;
    right: 22px;
    display: flex;
    flex-direction: column;
  }

  .chip_sale {
    position: absolute;
    top: 10px;
    left: 16px;
    z-index: 3;
    max-width: 50px;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #FFFFFF;
    background: #5B8A8F;
    border-radius: 15px;
    padding: 4px 12px;
  }

  .images_slider {
    width: 200px;
    height: 200px;
    margin: 10px auto 30px;
  }

  .image_sales {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }

  .my_control {
    width: 8px;
    height: 8px;
    border: 1px solid #303030;
    border-radius: 50%;
    background: #FFFFFF;
    padding: 0;
    margin: 0 4px;
    position: relative;
    z-index: 3;

    &.active {
      background: #303030;
    }
  }

  .price{
    font-weight: 600;
    font-size: 18px;
    color: #303030;
    margin-right: 8px;
  }
  .oldPrice{
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: line-through;
    color: #8F8F8F;
  }
  .calcSales{
    padding: 4px 8px;
    background: #E24B33;
    border-radius: 15px;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
  }
  .content{
    margin-bottom: 15px;
  }
  .description{
    font-weight: 400;
    font-size: 14px;
    color: #303030;
  }
}
</style>
