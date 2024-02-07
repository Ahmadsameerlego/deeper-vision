<template>
  <div class="input-layout">
    <!-- label  -->
    <label for="" class="mx-3">
      <span class="label-text">
        {{ inputName }}
        <i class="text-red-600 fa-solid fa-star-of-life"></i>
      </span>
    </label>

    <!-- main input  -->
    <div class="mt-3">
      <n-input v-model:value="value" :type="inputType" :placeholder="placeholder" />
    </div>

    <!-- validation text  -->
    <div class="flex items-center px-4 py-2 validation-text">
      <span>
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
      <span class="mx-3 text"> {{ validationText  }} </span>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DeeperVisionSystemInputLayout",
  props: {
    inputName: String,
    placeholder: String,
    inputType: {
      type: String,
      default: "text",
    },
    validationText: String,
  },
  setup(props) {
      const value = ref("");

      return {
        value
      }
  },
};
</script>

<style lang="scss">
.input-layout {
  .n-input,
  .n-input .n-input__input-el {
    height: 50px;
    border-radius: 8px;

    .n-input__placeholder {
      color: #09101d !important;
      font-size: 15px;
      font-weight: 500;
    }
  }

  .validation-text {
    border-radius: 8px;
    background: #ebeef2;
    .text {
      color: #394452;
      font-size: 12px;
      font-weight: 600;
    }
  }
}
</style>
<style lang="scss" scoped>
.input-layout {
  label {
    .label-text {
      position: relative;
      font-size: 13px;
      color: #09101d;
      font-weight: 600;
      .fa-star-of-life {
        font-size: 6px;
        position: absolute;
        top: 4px;
        right: -25%;
      }
    }
  }
}
</style>
