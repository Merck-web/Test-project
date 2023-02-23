<template>
  <div>

    <Header/>

    <Catalog/>

    <HeadSlider/>

    <Categories />

    <Sales />
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

export default {
  components: {Sales, Categories, HeadSlider, Catalog, Header}
}
</script>
