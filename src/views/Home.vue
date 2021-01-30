<template>
  <div>
    <h1>Home</h1>
    <el-button @click="queryApi" type="primary">ajax</el-button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        姓名：{{ item.name }}，年龄：{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
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
