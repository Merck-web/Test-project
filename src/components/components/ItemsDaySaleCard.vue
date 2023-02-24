<template>
  <div class="card_wrapper items_for_day">

    <div class="chips flex items-center justify-start">
      <div v-if="props.data.isNew" class="chips_new">New</div>
      <div v-if="props.data.isHit" class="chips_hit">Хит</div>
      <div v-if="props.data.oldPrice" class="chips_sale">Sale</div>
    </div>

    <div class="content">
      <div class="images">
        <q-carousel
          v-model="slide"
          ref="carousel"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
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

<!--          <template v-slot:navigation-icon="{ active, btnProps, onClick }">-->
<!--            <div class="my_control active" v-if="active" @click="onClick"/>-->
<!--            <div class="my_control" v-else @click="onClick"/>-->
<!--          </template>-->

          <template v-slot:control>
            <q-carousel-control
              position="top-left"
              :offset="[4, 250]"
              class="q-gutter-xs"
            >
              <button
                class="btn_prev default_hover"
                :disabled="disablePrev"
                @click="$refs.carousel.previous()"
              />
            </q-carousel-control>
            <q-carousel-control
              position="top-right"
              :offset="[4, 250]"
              class="q-gutter-xs"
            >

              <button
                class="btn_next default_hover"
                :disabled="disableNext"
                @click="$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>

        </q-carousel>
      </div>
      <div class="info">

        <div class="rating">
          <Rating :rating="props.data.rating" />
        </div>

        <h1 class="description">{{props.data.description}}</h1>

        <p class="articul">Артикул: {{props.data.articul}}</p>

        <div class="speacial flex items-end justify-start">
          <div class="flex items-center justify-start wrap" style="margin-bottom: 10px;">
            <p>
              <span class="price">{{addSpacesToNumber(props.data.price)}} ₽</span>
              <span class="oldPrice">{{props.data.oldPrice ? `${addSpacesToNumber(props.data.oldPrice)} ₽` : ''}}</span>
            </p>
            <div v-if="props.data.oldPrice" class="calcSales">{{calcSales}}</div>
          </div>
          <div class="taimer_box">
            <CountDown
              :countdownTime="props.data.timer"
            />
          </div>
        </div>

        <div class="colors">
          <p>цвет</p>
          <div class="box_colors">
            <template
              v-for="(color, index) in props.data.colors"
              :key="index"
            >
              <div
                class="color"
                :class="targetColor === index + 1 ? 'active' : ''"
                @click="changeColor(index + 1)"
              >
                <div class="target_color" :style="{'background': `${color}`}"/>
              </div>
            </template>
          </div>
        </div>

        <div class="sizes">
          <p class="flex items-center">
            Размер
            <TooltipDefault text="Также как существующая теория напрямую зависит от экономической целесообразности принимаемых решений." />
          </p>
          <div class="box_sizes">
            <template
              v-for="(size, index) in props.data.sizes"
              :key="index"
            >
              <button
                class="size default_hover"
                :class="targetSize === index + 1 ? 'active' : ''"
                :disabled="!size.have"
                @click="changeSize(index + 1)"
                v-text="size.size"
              />
            </template>
          </div>
        </div>

        <div class="buttons flex justify-between items-start">
          <div class="one_click">
            <button class="basket">в корзину</button>
            <button class="click">купить в 1 клик</button>
          </div>
          <div
            class="settings"
            @click="toggleAdd(props.data)"
          >
            <div>
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
              <span>{{addOrNot ? 'Сохранено' : 'Сохранить'}}</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5.1" y1="10" x2="5.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
                <line x1="10.1" y1="2" x2="10.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
                <line x1="15.1" y1="5" x2="15.1" y2="17" stroke="#C9C9C9" stroke-width="2.2"/>
              </svg>
              <span>Сравнить</span>
            </div>
            <div>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 4.58329C11.6667 2.97246 12.9725 1.66663 14.5833 1.66663C16.1942 1.66663 17.5 2.97246 17.5 4.58329C17.5 6.19411 16.1942 7.49996 14.5833 7.49996C13.769 7.49996 13.0327 7.16626 12.5036 6.62816L8.22756 9.21884C8.29649 9.46745 8.33333 9.7294 8.33333 9.99996C8.33333 10.243 8.3036 10.4791 8.24758 10.7049L12.6009 13.2773C13.1212 12.7949 13.8178 12.5 14.5833 12.5C16.1942 12.5 17.5 13.8058 17.5 15.4166C17.5 17.0274 16.1942 18.3333 14.5833 18.3333C12.9725 18.3333 11.6667 17.0274 11.6667 15.4166C11.6667 15.1736 11.6964 14.9375 11.7524 14.7118L7.39908 12.1394C6.87875 12.6217 6.18214 12.9166 5.41667 12.9166C3.80585 12.9166 2.5 11.6108 2.5 9.99996C2.5 8.38914 3.80585 7.08329 5.41667 7.08329C6.15373 7.08329 6.82695 7.3567 7.34042 7.80763L11.7222 5.15284C11.6858 4.96864 11.6667 4.7782 11.6667 4.58329ZM14.5833 3.33329C13.893 3.33329 13.3333 3.89294 13.3333 4.58329C13.3333 5.27364 13.893 5.83329 14.5833 5.83329C15.2737 5.83329 15.8333 5.27364 15.8333 4.58329C15.8333 3.89294 15.2737 3.33329 14.5833 3.33329ZM5.41667 8.74996C4.72632 8.74996 4.16667 9.30961 4.16667 9.99996C4.16667 10.6903 4.72632 11.25 5.41667 11.25C6.10701 11.25 6.66667 10.6903 6.66667 9.99996C6.66667 9.30961 6.10701 8.74996 5.41667 8.74996ZM14.5833 14.1666C13.893 14.1666 13.3333 14.7263 13.3333 15.4166C13.3333 16.107 13.893 16.6666 14.5833 16.6666C15.2737 16.6666 15.8333 16.107 15.8333 15.4166C15.8333 14.7263 15.2737 14.1666 14.5833 14.1666Z" fill="#C9C9C9"/>
              </svg>
              <span>Поделиться</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import Rating from "components/components/Rating";
import CountDown from "components/components/CountDown";
import TooltipDefault from "components/components/TooltipDefault";
import {useStore} from "vuex";
const $store = useStore();

const props = defineProps({
  data: {type: Object, default: {}}
})

const slide = ref(1);
const targetColor = ref(2);
const targetSize = ref(1);


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

function toggleAdd(item) {
  const allItems = $store.getters["items/getItems"];
  const index = allItems.find(target => target.id === item.id)?.id;
  if (!!allItems.find(target => target.id === item.id)?.id) {
    $store.dispatch('items/deleteCurrentItem', index)
  } else {
    $store.dispatch('items/setCurrentItem', item)
  }
}

function changeColor(index){
  targetColor.value = index;
}

function changeSize(index){
  targetSize.value = index;
}

const disableNext = computed(() => {
  return slide.value >= props.data.images.length
})
const disablePrev = computed(() => {
  return slide.value === 1
})
const calcSales = computed(() => {
  if (!!props.data.oldPrice){
    return `-${Math.round(((props.data.oldPrice - props.data.price) / props.data.oldPrice) * 100)}%`
  }
})
const addOrNot = computed(() => {
  const allItems = $store.getters["items/getItems"];
  return !!allItems.find(item => item?.id === props.data.id)?.id
})
</script>

<style lang="scss">
.items_for_day {
  .q-carousel {
    width: 100% !important;
    height: 100% !important;
  }
  .q-carousel__slide{
    padding: 0;
  }
}
</style>
<style lang="scss" scoped>
.card_wrapper {
  height: 550px;
  width: 100%;
  position: relative;
  @media (max-width: 1240px) {
    height: 100%;
  }

  .chips {
    position: absolute;
    top: 10px;
    left: 16px;
    z-index: 3;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    color: #FFFFFF;

    div:not(:last-child) {
      margin-right: 4px;
    }

    &_sale {
      background: #5B8A8F;
      border-radius: 15px;
      padding: 4px 12px;
    }

    &_new {
      background: #495159;
      border-radius: 15px;
      padding: 4px 12px;
    }

    &_hit {
      background: #E1A661;
      border-radius: 15px;
      padding: 4px 12px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: 1240px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 10px;
    }
  }

  .images{
    max-width: 550px;
    width: 100%;
    height: 100%;
    .images_slider {
      width: 100%;
      height: 100%;
      margin: 10px auto 30px;
    }

    .image_sales {
      width: 100%;
      height: 100%;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .info{
    max-width: 650px;
    width: 100%;
    height: 100%;
  }

  .rating{
    margin-bottom: 25px;
  }

  .description{
    font-family: 'Prata', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 20px;
  }

  .articul{
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #8F8F8F;
    margin-bottom: 2px;
  }

  .taimer_box{
    width: 100%;
    max-width: 224px;
    height: 64px;
    margin-left: 35px;
  }

  .speacial{
    padding-bottom: 20px;
    border-bottom: 1px solid #F0F0F0;
  }

  .colors{
    margin-top: 30px;
    p{
      font-weight: 600;
      font-size: 12px;
      line-height: 100%;
      text-transform: uppercase;
      margin: 0 0 16px;
    }
    .box_colors{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .color{
        width: 32px;
        height: 32px;
        border: 1px solid #DADADA;
        border-radius: 50%;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &.active{
          border-color: #303030;
        }

        .target_color{
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
      }
    }
  }
  .sizes{
    margin-top: 30px;
    margin-bottom: 40px;
    p{
      font-weight: 600;
      font-size: 12px;
      line-height: 100%;
      text-transform: uppercase;
      margin: 0 0 16px;
    }
    .box_sizes{
      display: flex;
      align-items: center;
      .size{
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-right: 8px;
        width: 50px;
        height: 32px;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        text-align: center;
        background: white;
        border: 1px solid #DADADA;
        text-transform: uppercase;

        &.active{
          color: white;
          background: #303030;
        }
      }
    }
  }

  .buttons{
    .one_click{
      display: flex;
      flex-direction: column;
      align-items: stretch;
      max-width: 400px;
      width: 100%;
      .basket{
        width: 100%;
        height: 56px;
        text-transform: uppercase;
        cursor: pointer;
        border: 1px solid #303030;
        background: #303030;
        color: white;
        margin-bottom: 10px;
        transition: all .5s linear;
        &:hover{
          background: #505050;
        }
      }
      .click{
        width: 100%;
        height: 56px;
        text-transform: uppercase;
        cursor: pointer;
        background: white;
        border: 1px solid #303030;
        transition: all .5s linear;
        margin-bottom: 10px;
        &:hover{
          color: white;
          background: #303030;
        }
      }
    }
    .settings{
      div{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        cursor: pointer;
        svg{
          margin-right: 10px;
        }
      }
    }
  }

  .btn_prev,
  .btn_next{
    cursor: pointer;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: white;
    background-image: url("../../../public/slide_default_arrow.png");
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 3;
  }
  .btn_prev{
    transform: rotate(180deg);
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

}
</style>
