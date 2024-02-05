<script setup>
import headerComponent from "./components/layout/headerComponent.vue";
import sidebar from "./components/layout/sidebarComponent.vue";
</script>

<template>
  <headerComponent id="header" />
  <sidebar id="sidebar" />
  <section id="content" class="pt-5 pl-5 pr-10">
    <router-view />
  </section>
</template>

<style scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #e5f0e8;
  height: 65px;
  z-index: 9;
}
#sidebar {
  position: fixed;
  left: 0;
  top: 12%;
  width: 208px;
  height: 100%;
  margin-top: 0px;
  background: #fff;
  border-top-right-radius: 7px;
}
#content {
  background-color: #f7f8fa;
  width: calc(100% - 208px);
  margin-left: 208px;
  margin-top: 65px;
  height: 100%;
  min-height: 100vh;
}
</style>
