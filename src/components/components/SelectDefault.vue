<template>
  <div>
    <q-select
      borderless
      dense
      v-model="value"
      :options="props.modelOptions"
      class="select_city q-mr-xs"
      options-selected-class="active-city_option"
      hide-dropdown-icon
      menu-anchor="bottom left"
      :popup-content-class="props.classSelect"
      :popup-content-style="{
        background: '#FFFFFF',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
        borderRadius: '0px',
        }"
      @popup-show="popupShow"
      @popup-hide="popupHide"
    >

      <template v-slot:option="{ itemProps, opt, selected }">
        <q-item v-bind="itemProps">
          <q-item-section>
            <q-item-label class="labelsCity" v-html="opt"/>
          </q-item-section>
          <q-item-section v-if="selected" side>
            <div>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.29998 7.9L0.56665 4.16667L1.28332 3.45L4.29998 6.46667L10.7 0.0666656L11.4167 0.783333L4.29998 7.9Z"
                  fill="black"/>
              </svg>
            </div>
          </q-item-section>
        </q-item>
      </template>

      <template v-if="props.afterSlot" v-slot:after>
          <slot name="after"></slot>
      </template>

      <template v-if="props.beforeSlot" v-slot:before>
        <slot name="before"></slot>
      </template>

    </q-select>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
const props = defineProps({
  modelDefault: { type: String, default: '' },
  modelOptions: { type: Array, default: [] },
  optionsSlot: { type: Boolean, default: false },
  afterSlot: { type: Boolean, default: false },
  beforeSlot: { type: Boolean, default: false },
  classSelect: { type: String, default: 'city_popup' }
})
const emit = defineEmits(['updateValue', 'popup-show', 'popup-hide'])

function popupShow(){
  emit('popup-show')
}

function popupHide(){
  emit('popup-hide')
}

const value = computed({
  get() {
    return props.modelDefault
  },
  set(newValue) {
    emit('updateValue', newValue)
  }
})

</script>

<style lang="scss">
.header {
  .select_city {
    max-width: 175px;
  }

  .q-field__native {
    font-weight: 400;
    font-size: 14px;
  }

  .q-field__after {
    position: relative;
    top: 1px;
    margin-left: 8px;
    padding: 0;
    cursor: pointer;
  }

  .q-field__before {
    position: relative;
    top: -1px;
    margin-right: 10px;
    padding: 0;
    cursor: pointer;
  }

}

.labelsCity {
  font-weight: 400;
  font-size: 14px;
}

.active-city_option {
  background: #FAFAFA;
  color: #303030;
}

.city_popup {
  max-width: 197px;
  width: 100%;
  margin-left: -40px !important;
}
</style>
