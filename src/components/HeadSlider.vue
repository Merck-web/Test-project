<template>
  <section class="head_slider">
    <div class="main_container">
      <div class="carousel">
        <q-carousel
          ref="carousel"
          animated
          v-model="slide"
          :arrows="false"
          navigation
          infinite
          style="height: 100%"
        >
          <q-carousel-slide :name="1">
            <template v-slot:default>
              <div class="slide">
                <div class="diamant"></div>
                <div class="content">
                  <div class="text">
                    <p>Суперскидка до 60%</p>
                    <h4>НА БРИЛЛИАНТЫ</h4>

                    <button class="cursor-pointer">Подробнее</button>
                  </div>
                  <div class="img-slide"/>
                </div>
              </div>
            </template>
          </q-carousel-slide>
          <q-carousel-slide :name="2">
            <template v-slot:default>
              <div class="slide">
                <div class="diamant"></div>
                <div class="content">
                  <div class="text">
                    <p>Суперскидка до 60%</p>
                    <h4>НА БРИЛЛИАНТЫ</h4>

                    <button class="cursor-pointer">Подробнее</button>
                  </div>
                  <div class="img-slide"/>
                </div>
              </div>
            </template>
          </q-carousel-slide>
          <q-carousel-slide :name="3">
            <template v-slot:default>
              <div class="slide">
                <div class="diamant"></div>
                <div class="content">
                  <div class="text">
                    <p>Суперскидка до 60%</p>
                    <h4>НА БРИЛЛИАНТЫ</h4>

                    <button class="cursor-pointer">Подробнее</button>
                  </div>
                  <div class="img-slide"/>
                </div>
              </div>
            </template>
          </q-carousel-slide>

          <template v-slot:navigation-icon="{ active, btnProps, onClick }">
            <div class="my_control active" v-if="active" @click="onClick"/>
            <div class="my_control" v-else @click="onClick"/>
          </template>

          <template v-slot:control>
            <q-carousel-control
              position="top-left"
              :offset="[24, 250]"
              class="q-gutter-xs"
            >
              <div
                class="btn_prev default_hover"
                @click="$refs.carousel.previous()"
              />
            </q-carousel-control>
            <q-carousel-control
              position="top-right"
              :offset="[24, 250]"
              class="q-gutter-xs"
            >

              <div
                class="btn_next default_hover"
                @click="$refs.carousel.next()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';

const slide = ref(1)
</script>

<style lang="scss">
.head_slider {
  .main_container {
    background: #F8F8F8;
    padding: 0;
  }

  .carousel {
    height: 560px;
  }

  .my_control {
    width: 8px;
    height: 8px;
    border: 1px solid #303030;
    border-radius: 50%;
    background: #FFFFFF;
    padding: 0;
    margin: 0 4px 24px;
    position: relative;
    z-index: 3;

    &.active {
      background: #303030;
    }
  }

  .q-carousel__control {

  }
  .btn_prev,
  .btn_next{
    cursor: pointer;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 1px solid #303030;
    background-image: url("../../public/slide_arrow.png");
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    z-index: 3;
  }
  .btn_next{
    transform: rotate(180deg);
  }

  .slide{
    height: 100%;
    width: 100%;
    position: relative;
    background: #F8F8F8;
    overflow: hidden;

    .diamant{
      position: absolute;
      background-image: url("../../public/diamant.png");
      width: 832.77px;
      height: 642.52px;
      top: 24px;
      left: -112px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .content{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      @media (max-width: 600px) {
        justify-content: center;
      }
    }
    .text{
      width: 100%;
      max-width: 500px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      z-index: 2;
      margin-left: 100px;
      @media (max-width: 600px) {
        margin-left: 0;
        align-items: center;
      }

      p{
        font-family: 'Prata', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 30px;
        @media (max-width: 1240px) {
          font-size: 18px;
        }
        @media (max-width: 1024px) {
          font-size: 16px;
        }
        @media (max-width: 750px) {
          font-size: 14px;
        }
        @media (max-width: 450px) {
          font-size: 12px;
        }
      }
      h4{
        font-family: 'Prata', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 50px;
        margin-bottom: 50px;
        white-space: nowrap;
        @media (max-width: 1240px) {
          font-size: 40px;
        }
        @media (max-width: 1024px) {
          font-size: 30px;
        }
        @media (max-width: 750px) {
          font-size: 20px;
        }
        @media (max-width: 450px) {
          font-size: 16px;
        }
      }
      button{
        padding: 15px 56px;
        background: #303030;
        color: white;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        transition: all .3s ease;
        &:hover{
          background: #505050;
        }
      }
    }
    .img-slide{
      width: 100%;
      max-width: 548px;
      background-image: url("../../public/gold_ring.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: 2;
      position: relative;
      @media (max-width: 1070px) {
        transform: scale(.8);
        background-size: contain;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
}
</style>
