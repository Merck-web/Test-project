<template>
  <section class="banners">
    <div class="main_container">
      <div class="banner_box">
        <div class="green">
          <div class="text">
            <p class="desc">
              Скидки<br>
              на&nbsp;все украшения<br>
              с&nbsp;бриллиантами
            </p>
            <div class="do">
              <span>До</span>
              <span>-50%</span>
            </div>
          </div>
          <div class="diamont"/>
          <div class="img"/>
        </div>
        <div class="grey">
          <div class="text">
            <p class="desc">
              Скидки<br>
              на кольца<br>
              и браслеты
            </p>
            <div class="do">
              <span>До</span>
              <span>-40%</span>
            </div>
          </div>
          <div class="diamont"/>
          <div class="img"/>
        </div>
        <div class="gold">
          <div class="text">
            <p class="desc">
              снижение цен<br>
              на обручальные<br>
              кольца
            </p>
            <div class="do">
              <span>До</span>
              <span>-60%</span>
            </div>
          </div>
          <div class="diamont"/>
          <div class="img"/>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.banners {
  margin-bottom: 100px;

  .banner_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .green,
    .grey,
    .gold {
      width: 420px;
      height: 290px;
      background: #F8F8F8;
      position: relative;
      overflow: hidden;
      margin-bottom: 20px;

      @media (max-width: 470px) {
        transform: scale(.8);
      }

      .text {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        height: 100%;
        max-width: 222px;
        width: 100%;
      }

      .desc {
        width: 100%;
        font-weight: 600;
        font-size: 20px;
        text-transform: uppercase;
        position: relative;
        z-index: 2;
        margin-bottom: 20px;
        margin-left: 26px;
      }

      .do {
        width: 194px;
        height: 52px;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: 36px;
        color: #FFFFFF;

        span + span {
          margin-left: 15px;
        }
      }

      .diamont {
        position: absolute;
        background-image: url("../../public/banners/smal_diamont.png");
        top: 25px;
        left: -70px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0.8;
        width: 455.5px;
        height: 351.84px;
      }

      .img {
        position: absolute;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }

    .green,
    .grey {
      margin-right: 20px;
    }
    .grey{
      @media (max-width: 1300px) {
        margin-right: 0;
      }
    }

    .green{
      @media (max-width: 900px) {
        margin-right: 0;
      }
    }

    .green {
      .do {
        background: #43807F;
      }
      .img{
        top: 0;
        right: 18px;
        width: 124px;
        height: 312px;
        background-image: url("../../public/banners/gren_cep.png");
      }
    }

    .grey {
      .do {
        background: #E24B33;
      }
      .img{
        top: 10px;
        right: 0;
        width: 200px;
        height: 280px;
        background-image: url("../../public/banners/grey_ring.png");
      }
    }

    .gold {
      .do {
        background: #E1A661;
      }
      .img{
        top: 40px;
        right: 0;
        width: 220px;
        height: 220px;
        background-image: url("../../public/banners/gold_ring.png");
      }
    }
  }
}
</style>
