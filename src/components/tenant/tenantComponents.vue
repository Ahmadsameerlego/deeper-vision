<template>
  <div>
    <!-- table layout  -->
    <tenantTableLayout />
    <tableComponentVue />
  </div>
</template>

<script>
import tenantTableLayout from './tenantTableLayout.vue';
import tableComponentVue from './tableComponent.vue'
export default {
    name: "DeeperVisionSystemTenantComponents",
    components: {
        tenantTableLayout,
        tableComponentVue
    }

};
</script>

<style lang="scss" scoped></style>
