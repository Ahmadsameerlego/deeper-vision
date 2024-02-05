<template>
  <div class="pt-3 pb-3 bg-white rounded-lg px-7">
    <h5 class="mb-8 font-semibold filter-title">View Columns</h5>

    <form>
      <!-- select All  -->
      <div>
        <n-checkbox v-model:checked="selectAll"> All Column </n-checkbox>
        <span class="ml-5 font-normal"> 1 Selected</span>
      </div>

      <div class="mt-4 ml-4 hide-items">
        <!-- single item  -->
        <div class="flex flex-col mb-3 hide-item">
          <div class="mb-3 font-normal text-md hide-title">Item column</div>
          <n-checkbox v-model:checked="value" class="mb-2">
            All Column
          </n-checkbox>
        </div>

        <!-- single item  -->
        <div class="flex flex-col mb-3 hide-item">
          <div class="mb-3 font-normal text-md hide-title">Item column</div>
          <n-checkbox v-model:checked="value" class="mb-2">
            All Column
          </n-checkbox>
        </div>

        <!-- single item  -->
        <div class="flex flex-col mb-3 hide-item">
          <div class="mb-3 font-normal text-md hide-title">Item column</div>
          <n-checkbox v-model:checked="value" class="mb-2">
            All Column
          </n-checkbox>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { NCheckbox } from "naive-ui";
export default {
  name: "DeeperVisionSystemFilterHide",
  components: {
    NCheckbox,
  },
};
</script>

<style lang="scss" scoped>
.filter-title {
  color: #606c80;
  font-weight: 700;
  font-size: 13px;
}
.hide-item {
  .hide-title {
    color: #98a2b2;
  }
}
</style>

<style>
.n-checkbox .n-checkbox__label {
  color: #606c80;
  font-weight: 600;
}
</style>
