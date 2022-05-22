<template>
  <div>
    <draggable
      tag="ul"
      :list="components"
      v-bind="{
        group: {
          name: 'people', // 同分组可以互相拖拽
          pull: 'clone', // 拖拽变为复制
          put: false, // 是否允许拖入当前组
        },
        sort: false,
        ghostClass: 'ghostClass',
      }"
      :clone="draggableClone"
      item-key="name"
      class="comp-container"
      @change="log"
      :move="() => true"
    >
      <template #item="{ element }">
          <li class="comp">
            <i :class="[element.icon, `fg`]"></i>
            <span>{{ element.name }}</span>
          </li>
      </template>
    </draggable>
  </div>
</template>

<script setup>
let id = 0;
import componentsEnum from './componentsEnum.js'
import { reactive } from '@vue/reactivity'
import draggable from 'vuedraggable'
const components = reactive(JSON.parse(JSON.stringify(componentsEnum)))
const draggableClone = original => {
  const clonedData = JSON.parse(JSON.stringify(original))
  clonedData.options.key = ++id
  return clonedData
}
const log = evt => {
  console.log('evt...', evt)
}
</script>

<style lang="scss" scoped>
.comp-container {
  padding: 10px;
}
.comp {
  float: left;
  margin-right: 10px;
  margin: 0 10px 10px 0;
  padding-left: 5px;
  font-size: 12px;
  width: 125px;
  height: 32px;
  line-height: 32px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  span {
    margin-left: 8px;
  }
  &:nth-child(2n) {
    margin-right: 0;
  }
  &:hover {
    color: #409eff;
    border-color: #409eff;
    cursor: move;
  }
}
</style>