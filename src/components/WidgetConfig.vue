<template>
  <div>
    <p>基础属性</p>
    <el-form label-position="top" :label-suffix="'：'">
      <template v-for="item in optionsKeys" :key="item">
        <el-form-item v-if="item==='col'" label="占据空间">
          <el-select v-model="curOptions[item]" class="m-2" placeholder="Select" size="large">
            <el-option label="6列" :value="6"/>
            <el-option label="8列" :value="8"/>
            <el-option label="12列" :value="12"/>
            <el-option label="24列" :value="24"/>
          </el-select>
        </el-form-item>
        <el-form-item v-if="item==='label'" label="标签名称">
          <el-input v-model="curOptions[item]"></el-input>
        </el-form-item>
        <el-form-item v-if="item==='placeholder'" label="占位符">
          <el-input v-model="curOptions[item]"></el-input>
        </el-form-item>
        <el-form-item v-if="item==='maxlength'" label="最大长度">
          <el-input-number v-model="curOptions[item]"></el-input-number>
        </el-form-item>
        <el-form-item v-if="item==='disabled'" label="禁用状态">
          <el-switch v-model="curOptions[item]"></el-switch>
        </el-form-item>
        <el-form-item v-if="item==='readonly'" label="只读状态">
          <el-switch v-model="curOptions[item]"></el-switch>
        </el-form-item>
        <el-form-item v-if="item==='max'" label="最大值">
          <el-input-number v-model="curOptions[item]"></el-input-number>
        </el-form-item>
        <el-form-item v-if="item==='min'" label="最小值">
          <el-input-number v-model="curOptions[item]"></el-input-number>
        </el-form-item>
        <el-form-item v-if="item==='controls-position'" label="按钮位置">
          <el-select v-model="curOptions[item]" class="m-2" placeholder="Select" size="large">
            <el-option label="默认" :value="''"/>
            <el-option label="右侧" value="right"/>
          </el-select>
        </el-form-item>
        <el-form-item v-if="item==='active-text'" label="开启文案">
          <el-input v-model="curOptions[item]"></el-input>
        </el-form-item>
        <el-form-item v-if="item==='inactive-text'" label="关闭文案">
          <el-input v-model="curOptions[item]"></el-input>
        </el-form-item>
      </template>
    </el-form>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  selectedWidgetIndex: {
    type: Number
  },
  formData: Object
})
console.log('props.selectedWidget.', props.selectedWidgetIndex)
const curOptions = computed(() => props.formData.list[props.selectedWidgetIndex]?.options) || {}
const optionsKeys = computed(() => curOptions?.value ? Object.keys(curOptions.value) : [])
</script>

<style lang="scss" scoped>

</style>