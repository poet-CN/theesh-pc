/*
* author: mamingyang@baofeng.com
* date: 2018/10/22
* usage: 全局footer
*/

<template>
  <el-footer class="bgcWhi miw1200" height="180px">
    <div class="wrap-box clearfix">
      <div class="mt65 lh30">
        <div class="text-wrapper">
          <p class="fz12 tc">
            <span>
              <router-link :to="{name: 'Introduce'}">公司简介</router-link>
            </span>
            <span>邮箱：business@theesh.com</span>
          </p>
          <p class="fz12 tc">京ICP备15062124号 Copyright© 2016-2021</p>
        </div>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {};
  },
  methods: {},
  created() {

  },
};
</script>

<style lang="scss" scoped>
  .text-wrapper span:not(:last-child) {
    margin-right: 10px;
  }
</style>
