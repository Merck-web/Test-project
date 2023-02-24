<template>
  <div class="countdown-timer">
    <div class="hour">
      <p class="count">{{ this.hours }}</p>
      <p class="label">Часов</p>
    </div>
    <span class="separator">:</span>
    <div class="min">
      <p class="count">{{ this.minutes }}</p>
      <p class="label">Минут</p>
    </div>
    <span class="separator">:</span>
    <div class="sec">
      <p class="count">{{ this.seconds }}</p>
      <p class="label">Секунд</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    countdownTime: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      countdown: this.countdownTime,
      hours: "00",
      minutes: "00",
      seconds: "00",

    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      let time = this.countdownTime.split(":");
      let hours = parseInt(time[0]);
      let minutes = parseInt(time[1]);
      let seconds = parseInt(time[2]);

      let totalSeconds = hours * 3600 + minutes * 60 + seconds;

      let interval = setInterval(() => {
        totalSeconds--;
        if (totalSeconds <= 0) {
          clearInterval(interval);
          // this.countdown = "00:00:00";
          this.hours = "00";
          this.minutes = "00";
          this.seconds = "00";
        } else {
          let hours = Math.floor(totalSeconds / 3600);
          let minutes = Math.floor((totalSeconds % 3600) / 60);
          let seconds = Math.floor(totalSeconds % 60);
          // this.countdown = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;

          this.hours = this.pad(hours);
          this.minutes = this.pad(minutes);
          this.seconds = this.pad(seconds);
        }
      }, 1000);
    },
    pad(value) {
      return value < 10 ? `0${value}` : value;
    }
  }
};
</script>

<style lang="scss" scoped>
.countdown-timer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #F5F5F5;


  .hour,
  .min,
  .sec {
    width: 50px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D0D0D0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    .count {
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      text-align: center;
      color: #303030;
      margin: 0;
    }

    .label {
      font-weight: 300;
      font-size: 11px;
      line-height: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
    }
  }
  .separator{
    margin: 0 9px;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
  }
}
</style>
