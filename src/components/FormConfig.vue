<template>
  <div>
    <el-form label-position="top" label-suffix="：">
      <el-form-item label="标签宽度">
        <el-input-number
          controls-position="right"
          v-model="props.formData.config.labelWidth"
          :min="0"
          :max="200"
          :step="10"
        ></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
const props = defineProps({
  formData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="scss" scoped>

</style>