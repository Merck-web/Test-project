<template>
  <div>

    <Header/>

    <Catalog/>

    <HeadSlider/>

    <Categories />

    <Sales />

    <Banners />

    <Articles />
  </div>
</template>

<style lang="scss">
p {
  font-size: 24px;
  margin-right: 10px;
}

.test {
  font-family: 'Inter', sans-serif;
}

.test2 {
  font-family: 'Prata', serif;
}
</style>


<script>
import Header from "components/Header";
import Catalog from "components/Catalog";
import HeadSlider from "components/HeadSlider";
import Categories from "components/Categories";
import Sales from "components/Sales";
import Banners from "components/Banners";
import Articles from "components/Articles";

export default {
  components: {Articles, Banners, Sales, Categories, HeadSlider, Catalog, Header}
}
</script>
