<template>
  <div class="input-layout">
    <!-- label  -->
    <label for="" class="mx-3">
      <span class="label-text">
        <span class="px-1">
          {{ inputName }}
        </span>
        <i class="text-red-600 fa-solid fa-star-of-life"></i>
      </span>
    </label>

    <!-- main input  -->
    <div class="relative mt-3">
      <n-input
        v-model:value="value"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="!active"
      >
      </n-input>
      <!-- file input  -->
      <div class="file-upload">
        <span>Upload File</span>
        <input
          type="file"
          class="layout-file-input"
          @change="uploadfile"
          :accept="fileType"
        />
      </div>
    </div>

    <!-- validation text  -->
    <div
      class="flex items-center px-4 py-2 validation-text"
      v-if="isValidTextExist != 'false'"
    >
      <span>
        <i class="fa-solid fa-circle-exclamation"></i>
      </span>
      <span class="mx-3 text"> {{ validationText }} </span>
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
    fileType: String,
  },
  setup(props, context) {
    const value = ref("");

    const uploadfile = (e) => {
      context.emit("setFileName", e.target.files[0].name);
    };

    return {
      value,
      uploadfile,
    };
  },
};
</script>

<style lang="scss"></style>
<style lang="scss" scoped>
.input-layout {
  label {
    .label-text {
      position: relative;
      font-size: 13px;
      color: #09101d;
      font-weight: 500;
      .fa-star-of-life {
        font-size: 6px;
        position: absolute;
        top: 4px;
        right: -22%;
      }
    }
  }
}
.file-upload,
.layout-file-input {
  position: absolute;
  right: 0;
  top: 0;
  width: 110px;
  height: 100%;
}
.layout-file-input {
  opacity: 0;
}
.file-upload {
  border-radius: 6px;
  background: rgba(133, 140, 148, 0.47);
  color: #615e83;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
