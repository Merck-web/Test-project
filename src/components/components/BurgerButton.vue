<template>
  <button @click="toggleButton" :class="`menu flex items-center justify-center ${openNav ? 'active' : ''}`">
    <svg viewBox="0 0 64 48">
      <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
      <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
      <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
    </svg>
  </button>
</template>

<script setup>
const props = defineProps({
  openNav: {type: Boolean, default: false}
})

const emit = defineEmits(['toggleButton'])

function toggleButton() {
  emit('toggleButton')
}


</script>

<style lang="scss" scoped>
.menu {
  --color: #303030;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  outline: none;
  position: relative;
  border: none;
  background: none;
  cursor: pointer;
  -webkit-appearence: none;
  -webkit-tap-highlight-color: transparent;
  transform: scale(0.7);
  z-index: 10;
  svg {
    width: 64px;
    height: 48px;
    top: -6px;
    left: -14px;
    stroke: var(--color);
    stroke-width: 4px;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
    display: block;
    position: absolute;
    path {
      transition: stroke-dasharray var(--duration, .85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, .85s) var(--easing, ease) var(--delay, 0s);
      stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
      stroke-dashoffset: var(--offset, 126px);
      transform: translateZ(0);
      &:nth-child(2) {
        --duration: .7s;
        --easing: ease-in;
        --offset: 100px;
        --array-2: 74px;
      }
      &:nth-child(3) {
        --offset: 133px;
        --array-2: 107px;
      }
    }
  }
  &.active {
    svg {
      path {
        --offset: 57px;
        &:nth-child(1),
        &:nth-child(3) {
          --delay: .15s;
          --easing: cubic-bezier(.2, .4, .2, 1.1);
        }
        &:nth-child(2) {
          --duration: .4s;
          --offset: 2px;
          --array-1: 1px;
        }
        &:nth-child(3) {
          --offset: 58px;
        }
      }
    }
  }
}
</style>
