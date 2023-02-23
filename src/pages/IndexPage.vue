<template>
  <div>

    <Header />

    <Catalog />


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
export default {
  components: {Catalog, Header}
}
</script>
