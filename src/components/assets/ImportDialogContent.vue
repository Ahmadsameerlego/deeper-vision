<template>
  <n-card
    style="width: 730px"
    :bordered="true"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <!-- header  -->
    <section class="relative pb-4 modal-header border-bottom">
      <h5 class="font-bold text-center" v-if="isXerFile">Xer Import File</h5>
      <h5 class="font-bold text-center" v-if="!isXerFile">Upload File excel</h5>

      <div class="flex justify-end close-modal">
        <button @click="closeModal"><i class="fa-solid fa-x"></i></button>
      </div>
    </section>

    <!-- body  -->
    <section class="py-9 modal-body border-bottom px-7">
      <h4 class="font-bold">Fill in these inputs</h4>

      <form>
        <!-- xer file  -->
        <div class="grid grid-cols-1 gap-4 mt-4" v-if="isXerFile">
          <inputLayout
            inputName="File"
            inputType="text"
            validationText="This is a message"
            :placeholder="placeholderText"
            fileType=".xer"
            @setFileName="setName"
          />
        </div>

        <!-- excel file  -->
        <div class="grid grid-cols-1 gap-4 mt-4" v-if="!isXerFile">
          <inputLayout
            inputName="File excel"
            inputType="text"
            validationText="This is a message"
            :placeholder="placeholderText"
            fileType=".csv"
            @setFileName="setName"
          />
        </div>
      </form>
    </section>

    <!-- footer  -->
    <section class="pb-0 mt-3 modal-footer px-7" v-if="isXerFile">
      <div class="flex justify-end">
        <button
          class="flex items-center px-5 py-2 second-btn"
          @click="closeModal"
        >
          <span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </span>
          <span class="mx-3"> Cancel </span>
        </button>

        <button class="px-5 py-2 mx-3 main-btn" @click="isXerFile = false">
          <span class="mx-3"> Next </span>
          <span>
            <i class="fa-solid fa-arrow-right-long"></i>
          </span>
        </button>
      </div>
    </section>
    <section
      class="flex items-center justify-between pb-0 mt-3 modal-footer px-7"
      v-if="!isXerFile"
    >
      <div class="">
        <a href="/src/assets/css/index.css" download class="flex items-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M12.6667 8C12.4899 8 12.3203 8.07024 12.1953 8.19526C12.0702 8.32029 12 8.48985 12 8.66667V11.3333C12 11.5101 11.9298 11.6797 11.8047 11.8047C11.6797 11.9298 11.5101 12 11.3333 12H2C1.82319 12 1.65362 11.9298 1.5286 11.8047C1.40357 11.6797 1.33333 11.5101 1.33333 11.3333V8.66667C1.33333 8.48985 1.2631 8.32029 1.13807 8.19526C1.01305 8.07024 0.843478 8 0.666667 8C0.489856 8 0.320286 8.07024 0.195262 8.19526C0.0702379 8.32029 0 8.48985 0 8.66667V11.3333C0 11.8638 0.210714 12.3725 0.585786 12.7475C0.960859 13.1226 1.46957 13.3333 2 13.3333H11.3333C11.8638 13.3333 12.3725 13.1226 12.7475 12.7475C13.1226 12.3725 13.3333 11.8638 13.3333 11.3333V8.66667C13.3333 8.48985 13.2631 8.32029 13.1381 8.19526C13.013 8.07024 12.8435 8 12.6667 8ZM6.19333 9.14C6.25674 9.20069 6.3315 9.24827 6.41333 9.28C6.49313 9.31527 6.57942 9.33349 6.66667 9.33349C6.75391 9.33349 6.8402 9.31527 6.92 9.28C7.00183 9.24827 7.0766 9.20069 7.14 9.14L9.80667 6.47333C9.9322 6.3478 10.0027 6.17753 10.0027 6C10.0027 5.82247 9.9322 5.6522 9.80667 5.52667C9.68113 5.40113 9.51087 5.33061 9.33333 5.33061C9.1558 5.33061 8.98554 5.40113 8.86 5.52667L7.33333 7.06V0.666667C7.33333 0.489856 7.26309 0.320286 7.13807 0.195262C7.01305 0.0702379 6.84348 0 6.66667 0C6.48986 0 6.32029 0.0702379 6.19526 0.195262C6.07024 0.320286 6 0.489856 6 0.666667V7.06L4.47333 5.52667C4.41117 5.46451 4.33738 5.4152 4.25617 5.38156C4.17495 5.34792 4.08791 5.33061 4 5.33061C3.91209 5.33061 3.82505 5.34792 3.74383 5.38156C3.66262 5.4152 3.58883 5.46451 3.52667 5.52667C3.46451 5.58883 3.4152 5.66262 3.38156 5.74383C3.34792 5.82505 3.33061 5.91209 3.33061 6C3.33061 6.08791 3.34792 6.17495 3.38156 6.25617C3.4152 6.33738 3.46451 6.41117 3.52667 6.47333L6.19333 9.14Z"
                fill="#3A8352"
              />
            </svg>
          </span>

          <span class="mx-3 font-semibold main-color"> Download sample </span>
        </a>
      </div>
      <div class="flex">
        <button
          class="flex items-center px-5 py-2 second-btn"
          @click="isXerFile = true"
        >
          <span>
            <i class="fa-solid fa-arrow-left-long"></i>
          </span>
          <span class="mx-3"> Back </span>
        </button>

        <button class="px-5 py-2 mx-3 main-btn">
          <span class="mx-3"> Finish </span>
          <span>
            <i class="fa-solid fa-arrow-right-long"></i>
          </span>
        </button>
      </div>
    </section>
  </n-card>
</template>

<script>
import inputLayout from "./inputFileLayout.vue";
import { ref } from "vue";

export default {
  name: "DeeperVisionSystemDialogContent",
  setup(props, context) {
    const placeholderText = ref("No File Choosen");
    const isXerFile = ref(true);
    const closeModal = () => {
      context.emit("close");
    };
    const setName = (data) => {
      placeholderText.value = data;
    };
    return {
      closeModal,
      placeholderText,
      setName,
      isXerFile,
    };
  },
  components: {
    inputLayout,
  },
};
</script>

<style></style>
