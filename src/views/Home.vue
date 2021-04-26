<template>
  <div>
    <h1>Home</h1>
    <h2>{{name}}</h2>
    <h3>{{person}}</h3>
    <el-button @click="change(1)">点击变身</el-button>
    <el-button @click="queryApi" type="primary">ajax</el-button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        姓名：{{ item.name }}，年龄：{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup(props) {
    let person = ref<String>('小明'); 

    const change = (value: Number) => {
      if(value == 1) {
        person.value = '小花'
      }
    }
    return {
      person,
      change
    }
  },
  data() {
    return {
      list: [],
      name: ''
    };
  },
  created() {
    this.tsTest();
  },
  methods: {
    tsTest() {
      let myName: String = "小明";
      myName = '123';
      this.name = myName;
    },
    queryApi() {
      let data = {};
      this.$ajax
        .api({
          url: '/api',
          method: 'get',
          data,
        })
        .then((res) => {
          console.log(res);
          this.list = res.data.data;
        });
    },
  },
};
</script>

<style></style>
