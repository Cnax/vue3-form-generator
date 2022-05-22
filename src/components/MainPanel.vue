<template>
  <div class="container">
    <el-form
      :size="props.formData.config.size"
      :label-position="props.formData.config.labelPosition"
      :label-width="props.formData.config.labelWidth + 'px'"
      :label-suffix="'：'"
    >
      <draggable
        :list="props.formData.list"
        :group="{ name: 'people', pull: 'clone', put: true }"
        item-key="name"
        class="content"
        @change="log"
      >
        <template #item="{element, index}">
          <el-form-item
            :key="element.options.key"
            :label="element.options.label || element.name"
            :class="[`col-${element.options.col}`, 'form-item']"
            @click.stop="handleSelectItem(index)"
          >
            <widget-item v-bind="element"></widget-item>
          </el-form-item>
        </template>
      </draggable>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import draggable from 'vuedraggable'
import {ElForm} from 'element-plus'
import WidgetItem from './WidgetItem.vue'
const props = defineProps({
  formData: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(['selectWidget'])
const log = evt => {
  console.log('evt', evt)
}
const handleSelectItem = index => {
  console.log('handleSelectItem', index)
  console.log('props.formData :>> ', props.formData);
  emit('selectWidget', index)
}

</script>

<style lang="scss" scoped>
.container {
  padding: 10px;
  box-sizing: border-box;
}
.content {
  min-height: 500px;
  .form-item {
    float: left;
    height: 32px;
    overflow: hidden;
  }
}
.col-24 {
  width: 100%;
}
.col-12 {
  width: 50%;
}
.col-8 {
  width: calc(100% / 3);
}
.col-6 {
  width: 25%;
}
</style>