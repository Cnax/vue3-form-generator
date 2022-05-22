<script>
import { resolveComponent, h, defineComponent } from 'vue'
export default defineComponent({
  props: {
    type: String,
  },
  setup (props, { attrs }) {
    const comp = resolveComponent(`el-${props.type}`)
    return () => h(comp, { ...attrs.options })
  }
})
</script>

<style lang="scss" scoped>

</style>