<template lang="">
  <div class="vant">
    <div><van-button size="small" @click="num++">点击num++</van-button></div>
    <div><van-button size="small" @click="getIndex">请求接口</van-button></div>
    <input type="text" v-model="name" class="input" />
    <div>{{ name }}</div>
    <!-- <div>{{ num }}</div> -->
  </div>
</template>
<script>
import { reactive, ref, toRefs, onMounted } from 'vue'
import { indexAdvs } from '@/api/user'
export default {
  setup() {
    let num = ref(1)
    let person = reactive({
      name: 'sam',
      age: 32
    })
    const getIndex = async () => {
      let res = await indexAdvs()
      console.log(res)
    }
    return {
      num,
      getIndex,
      ...toRefs(person)
    }
  }
}
</script>
<style lang="less" scoped>
.vant {
  color: @orangeColor;
}
.input {
  color: @themeColor;
  width: 100px;
  height: 20px;
}
</style>
