<template>
  <div class="container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="组件设置" name="widget">
        <WidgetConfig v-model:selectedWidgetIndex="selectedWidgetIndex" v-model:formData="formData"></WidgetConfig>
      </el-tab-pane>
      <el-tab-pane label="表单设置" name="form">
        <FormConfig :formData="props.formData"></FormConfig>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watchEffect } from 'vue'
import FormConfig from './FormConfig.vue';
import WidgetConfig from './WidgetConfig.vue';
const props = defineProps({
  formData: {
    type: Object,
    default: () => ({})
  },
  selectedWidgetIndex: {
    type: Number
  },
})
const activeName = ref('widget')

</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
}
</style>