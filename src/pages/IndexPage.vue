<template>
  <div>

    <Header/>

    <Catalog/>

    <HeadSlider/>

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

export default {
  components: {HeadSlider, Catalog, Header}
}
</script>
