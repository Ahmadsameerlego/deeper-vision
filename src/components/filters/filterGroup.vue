<template>
  <div class="pt-3 pb-3 bg-white rounded-lg px-7">
    <!-- top  -->
    <div class="flex justify-between mb-4">
      <div class="flex">
        <h5 class="fw-bold filter-title">Quick filters</h5>
        <div class="ml-12">
          <span class="mr-3 show-item">Showing all of 3 tasks</span>
          <i class="fa-regular fa-circle-question question-icon"></i>
        </div>
      </div>

      <div>
        <n-button class="h-10 px-5 pt-4 pb-4 rounded-lg"> Clear All</n-button>
      </div>
    </div>

    <h5 class="font-semibold">All Columns</h5>

    <div class="flex mt-3 columns">
      <!-- single column  -->
      <div class="">
        <h5 class="mb-3 font-semibold">Group</h5>
        <div class="single-column">
          <!-- column item  -->
          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Top Group </span>
            <span class="">3 </span>
          </div>

          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Planning </span>
            <span class="">3 </span>
          </div>
        </div>
      </div>

      <!-- single column  -->
      <div class="ml-3">
        <h5 class="mb-3 font-semibold">Group</h5>
        <div class="single-column">
          <!-- column item  -->
          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Top Group </span>
            <span class="">3 </span>
          </div>

          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Planning </span>
            <span class="">3 </span>
          </div>
        </div>
      </div>

      <!-- single column  -->
      <div class="ml-3">
        <h5 class="mb-3 font-semibold">Group</h5>
        <div class="single-column">
          <!-- column item  -->
          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Top Group </span>
            <span class="">3 </span>
          </div>

          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Planning </span>
            <span class="">3 </span>
          </div>
        </div>
      </div>

      <!-- single column  -->
      <div class="ml-3">
        <h5 class="mb-3 font-semibold">Group</h5>
        <div class="single-column">
          <!-- column item  -->
          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Top Group </span>
            <span class="">3 </span>
          </div>

          <div class="flex items-center justify-between px-3 mb-3 column-item">
            <span class="">Planning </span>
            <span class="">3 </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NButton } from "naive-ui";
export default {
  name: "DeeperVisionSystemFilterGroup",
  components: {
    NButton,
  },
};
</script>

<style lang="scss" scoped>
.filter-title {
  color: #606c80;
  font-weight: 700;
  font-size: 13px;
}
.question-icon {
  color: #717171;
  font-size: 17px;
}
.show-item {
  color: #45464b;
  font-weight: normal;
  font-size: 13px;
}
.columns {
  .single-column {
    max-height: 250px;
    overflow-y: auto;
  }
  .column-item {
    height: 34px;
    width: 160px;
    border-radius: 5px;
    border: 1px solid var(--Gray-50, #ebeef2);
    cursor: pointer;
    background: #f7f8fa;
    transition: 0.3s all;
    &:hover {
      background-color: #e5f0e8;
    }
    span {
      color: #606c80;
      font-weight: 700;
    }
  }
}
</style>
