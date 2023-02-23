<template>
  <section class="catalog">
    <div class="wrapper">
      <div class="main_container">
        <div class="content">
          <div class="routes">
            <ul>
              <li
                v-for="item in routes"
                :key="item.name"
                class="default_hover cursor-pointer"
              >
                {{ item.name }}
              </li>
            </ul>
          </div>
          <div class="search">
            <q-input
              borderless
              v-model="search"
              label="Поиск по сайту"
            >
              <template v-slot:before>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.2 6.5C11.2 9.09574 9.09574 11.2 6.5 11.2C3.90426 11.2 1.8 9.09574 1.8 6.5C1.8 3.90426 3.90426 1.8 6.5 1.8C9.09574 1.8 11.2 3.90426 11.2 6.5ZM10.062 11.938C9.03902 12.6094 7.81512 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.1561 12.3806 9.66755 11.3609 10.8153L15.2728 14.7272L14 16L10 12L10.062 11.938Z"
                        fill="#303030"/>
                </svg>
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue'

const routes = ref([
  {
    name: 'Каталог',
    route: 'Каталог'
  },
  {
    name: 'Акции',
    route: 'Акции'
  },
  {
    name: 'Бренды',
    route: 'Бренды'
  },
  {
    name: 'Магазины',
    route: 'Магазины'
  },
  {
    name: 'О нас',
    route: 'О нас'
  },
  {
    name: 'Доставка и оплата',
    route: 'Доставка и оплата'
  },
  {
    name: 'Статьи',
    route: 'Статьи'
  },
])
const search = ref('')
</script>

<style lang="scss">
.catalog {
  .wrapper {
    width: 100%;
    background: #F8F8F8;
    display: flex;
    align-items: center;
  }

  .content{
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 770px) {
      flex-direction: column;
    }
  }

  .routes {
    max-width: 1000px;
    width: 100%;
    height: 100%;
    display: flex;
    padding: 7.3px 0;
    position: relative;

    &::after {
      @media (max-width: 770px) {
        content: none;
      }
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 1px;
      background: #F0F0F0;
    }
  }

  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    li {
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase;
    }

    li {
      margin-left: 50px;
      @media (max-width: 1240px) {
        margin-top: 5px;
        margin-bottm: 5px;
      }
    }

    li:not(:last-child) {
      margin-right: 10px;
    }
  }

  .search {
    margin-left: 25px;
    max-width: 300px;
    width: 100%;
    @media (max-width: 770px) {
      margin-left: 50px;
    }

    input {
      width: 100%;
      font-weight: 400;
      font-size: 14px;
      color: #000;
    }

    .q-field__label {
      color: #A2A2A2;
    }
  }
}
</style>
