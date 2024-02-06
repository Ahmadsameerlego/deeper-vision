<template>
  <section id="project-menu" class="flex flex-col bg-white rounded-lg">
    <button class="pl-5 menu-button text-start">Online Update</button>
    <button class="pl-5 menu-button text-start">WBS Chart</button>
    <button class="pl-5 menu-button text-start">Project Dashboard</button>
    <button class="pl-5 menu-button text-start">Shop Drawing Log</button>
    <button class="pl-5 menu-button text-start">Procurement Log</button>
    <button class="pl-5 menu-button text-start">WIR Log</button>
    <button class="pl-5 menu-button text-start">Issue Log</button>
    <button class="pl-5 menu-button text-start">Action Plan</button>
    <button class="pl-5 menu-button text-start">Snag List</button>
  </section>
</template>

<script>
import button from "../assets/buttonComponent.vue";
export default {
  name: "DeeperVisionSystemProjectMenu",
  components: {
    button,
  },
};
</script>

<style lang="scss">
.menu-button {
  width: 165px;
  height: 38px;
  color: #000 !important;
  font-size: 13px;
  font-weight: 700;
  &:hover {
    background-color: #e5f0e8 !important;
    border: none !important;
  }
}
</style>
