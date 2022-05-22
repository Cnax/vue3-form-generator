<template>
  <div class="container">
    <components-panel class="left"></components-panel>
    <main-panel class="main" :formData="formData" @selectWidget="selectWidget"></main-panel>
    <controller-panel
      :formData="formData" 
      :selectedWidgetIndex="selectedWidgetIndex"
      class="right"
    ></controller-panel>
  </div>
</template>

<script setup>
import MainPanel from './MainPanel.vue';
import ComponentsPanel from './ComponentsPanel.vue';
import ControllerPanel from './ControllerPanel.vue';
import { reactive, ref } from 'vue';
import configFormData from './configFormData'
const formData = reactive(JSON.parse(JSON.stringify(configFormData)))
let selectedWidgetIndex = ref(0)
const selectWidget = index => {
  // Object.assign(selectedWidget, index)
  selectedWidgetIndex.value = index
}
</script>

<style lang="scss" scoped>
$--left-width: 280px;
$--right-width: 300px;
.container {
  height: 100%;
  position: relative;
  .left, .right, .main {
    float: left;
    height: 100%;
    background-color: #fafafa;
  }
  .right {
    float: right;
  }
  .left {
    width: $--left-width;
  }
  .right {
    width: $--right-width;
  }
  .main {
    position: absolute;
    top: 0;
    right: $--right-width + 10px;
    left: $--left-width + 10px;
  }
}
</style>