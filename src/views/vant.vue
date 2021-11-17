<template lang="">
  <div class="vant">
    <div><van-button size="small" @click="num++">点击num++</van-button></div>
    <div><van-button size="small" @click="getIndex">请求接口</van-button></div>
    <input type="text" v-model="name" class="input" />
    <div>{{ name }}</div>
    <div>{{ resData }}</div>
    <div>{{ num }}</div>
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
    let resData = reactive({})
    const getIndex = async () => {
      let res = await indexAdvs()
      console.log(resData)
      Object.assign(resData, res)
      // resData = { ...res }
      console.log(resData)
    }
    return {
      num,
      getIndex,
      resData,
      ...toRefs(person)
    }
  }
}
</script>
<style lang="less" scoped>
.vant {
  color: @orangeColor;
  font-size: 14px;
}
.input {
  color: @themeColor;
  width: 100px;
  height: 20px;
}
</style>
