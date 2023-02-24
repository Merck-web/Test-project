<template>
  <div class="">
    <div class="star_box">
      <div v-for="i in +resulRating" :key="i">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5 0L10.7982 5.33674L16.584 5.87336L12.2186 9.70826L13.4962 15.3766L8.5 12.41L3.50383 15.3766L4.78137 9.70826L0.416019 5.87336L6.20176 5.33674L8.5 0Z"
            fill="#E1A661"/>
        </svg>
      </div>
      <div v-for="i in 5 - +resulRating" :key="i+'123'">
        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.5 1.26413L10.339 5.53451L10.4564 5.80719L10.7521 5.83461L15.3817 6.26399L11.8886 9.33262L11.6656 9.52856L11.7309 9.81819L12.7531 14.3539L8.75528 11.9801L8.5 11.8285L8.24472 11.9801L4.24687 14.3539L5.26913 9.81819L5.33441 9.52856L5.11136 9.33262L1.61828 6.264L6.24794 5.83461L6.54356 5.80719L6.66099 5.53451L8.5 1.26413Z"
            stroke="#E1A661"/>
        </svg>
      </div>
      <p>{{String(this.rating).replace('.', ',')}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Stars',
  data() {
    return {};
  },
  props: {
    rating: {
      type: [
        Number, String
      ],
      default: 0,
    },
  },
  computed: {
    resulRating() {
      return Math.round(this.rating);
    }
  }
};
</script>

<style lang="scss" scoped>
.star_box {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    width: 17px;
    height: 17px;
    margin-right: 6px;
  }
  p{
    font-weight: 400;
    font-size: 14px;
  }
}
</style>
