<template>
  <div class="input-profile-layout">
    <!-- label  -->
    <label for="" class="mx-3">
      <span class="label-text">
        {{ inputName }}
        <i class="text-red-600 fa-solid fa-star-of-life"></i>
      </span>
    </label>

    <!-- main input  -->
    <div class="mt-3">
      <n-input
        v-model:value="value"
        :type="inputType"
        :placeholder="placeholder"
      />
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
    isValidTextExist: String,
  },
  setup(props) {
    const value = ref("");

    return {
      value,
    };
  },
};
</script>

<style lang="scss">
.input-profile-layout {
  .n-input,
  .n-input .n-input__input-el {
    height: 50px;
    border-radius: 8px;

    .n-input__placeholder {
      color: #030229 !important;
      opacity: 0.7;
      font-size: 14px;
      font-weight: 500;
    }
  }
}
</style>
<style lang="scss" scoped>
.input-profile-layout {
  label {
    .label-text {
      position: relative;
      font-size: 16px;
      color: #09101d;
      font-weight: 500;
      opacity: 0.9;
      .fa-star-of-life {
        font-size: 6px;
        position: absolute;
        top: 4px;
        right: -12%;
      }
    }
  }
}
</style>
