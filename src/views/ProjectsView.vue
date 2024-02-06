<template>
  <section id="projects">
    <!-- head  -->
    <projectHeaderVue />

    <section class="flex mt-3 shown-content">
      <!-- menu  -->
      <projectMenuVue />

      <!-- content  -->
      <section id="project-content" class="ml-4">
        <!-- filter  -->
        <tenantTableLayout />
        <!-- table  -->
        <tableComponent />
      </section>
    </section>
  </section>
</template>

<script>
import projectHeaderVue from "../components/projects/projectHeader.vue";
import projectMenuVue from "../components/projects/projectMenu.vue";
import tableComponent from "../components/tenant/tableComponent.vue";
import tenantTableLayout from "../components/tenant/tenantTableLayout.vue";
export default {
  name: "DeeperVisionSystemProjectsView",
  components: {
    projectHeaderVue,
    projectMenuVue,
    tableComponent,
    tenantTableLayout,
  },
};
</script>

<style lang="scss" scoped></style>
