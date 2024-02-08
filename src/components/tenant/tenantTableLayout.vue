<template>
  <section id="table-layout">
    <!-- top section  -->
    <!-- <div class="flex pb-5 head-section">
      <div class="title">
        <h2 class="text-3xl font-bold">Tenants</h2>
      </div>

      <div class="flex px-4 pt-2 pb-2 bg-white rounded-lg ml-7 main-table">
        <img src="/src/assets/imgs/bars.svg" alt="" />
        <span class="ml-3 font-semibold text">Main Table</span>
      </div>
    </div> -->

    <!-- filters  -->
    <div class="flex items-center justify-between pt-5 filter-section">
      <div class="flex filters">
        <!-- search  -->
        <div class="relative mr-6 filter search">
          <n-input
            v-model:value="value"
            type="text"
            placeholder="search"
            class="pt-1 pb-1 pl-6 rounded-lg main-table"
          />
          <i class="fa-solid fa-magnifying-glass custom-icon"></i>
        </div>

        <!-- filter  -->
        <div class="relative mr-14 filter">
          <n-button
            class="h-12 px-12 pt-3 pb-3 bg-white rounded-lg main-table"
            @click="showGroupFilter = !showGroupFilter"
          >
            Filter
          </n-button>
          <i class="fa-solid fa-filter custom-icon"></i>
          <i class="fa-solid fa-chevron-down custom-drop-icon"></i>

          <!-- group filter component  -->
          <transition>
            <filterGroupVue class="group-filter" v-if="showGroupFilter" />
          </transition>
        </div>

        <!-- sort  -->
        <div class="relative mr-6 filter">
          <n-button class="h-12 pt-3 pb-3 bg-white rounded-lg px-9 main-table">
            Sort
          </n-button>
          <i class="mr-3 fa-solid fa-arrow-down-wide-short custom-icon"></i>
        </div>

        <!-- Hide  -->
        <div class="relative mr-6 filter">
          <n-button
            class="h-12 pt-3 pb-3 bg-white rounded-lg px-9 main-table"
            @click="showHideFilter = !showHideFilter"
          >
            Hide
          </n-button>
          <i class="fa-solid fa-eye-slash custom-icon"></i>
          <transition>
            <filterHideVue class="hide-filter" v-if="showHideFilter" />
          </transition>
        </div>

        <!-- group  -->
        <!-- <div class="relative filter">
          <n-button class="h-12 pt-3 pb-3 bg-white rounded-lg px-9 main-table">
            Group By
          </n-button>
          <svg
            class="custom-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <g clip-path="url(#clip0_1_550)">
              <path
                d="M4.12498 8.25C5.57248 8.25 6.74998 7.0725 6.74998 5.625C6.74998 4.1775 5.57248 3 4.12498 3C2.67748 3 1.49998 4.1775 1.49998 5.625C1.49998 7.0725 2.67748 8.25 4.12498 8.25ZM11.625 5.25C13.0725 5.25 14.25 4.0725 14.25 2.625C14.25 1.1775 13.0725 0 11.625 0C10.1775 0 8.99998 1.1775 8.99998 2.625C8.99998 4.0725 10.1775 5.25 11.625 5.25ZM13.5 9C11.0145 9 8.99998 11.0145 8.99998 13.5C8.99998 15.9855 11.0145 18 13.5 18C15.9855 18 18 15.9855 18 13.5C18 11.0145 15.9855 9 13.5 9ZM16.2622 13.284L14.235 15.2445C13.896 15.579 13.446 15.7477 12.9952 15.7477C12.5445 15.7477 12.093 15.579 11.748 15.2423L10.7325 14.2432C10.4362 13.953 10.4325 13.4782 10.722 13.1827C11.0115 12.8865 11.4862 12.882 11.7825 13.1722L12.798 14.1705C12.906 14.277 13.083 14.2747 13.1895 14.169L15.2242 12.201C15.522 11.9152 15.9975 11.9235 16.2847 12.2228C16.5712 12.5213 16.5615 12.996 16.263 13.2833L16.2622 13.284ZM7.87648 11.4045C7.63348 12.057 7.49998 12.7627 7.49998 13.5C7.49323 13.5 7.48648 13.5 7.47973 13.5H0.770232C0.557232 13.5 0.353232 13.4093 0.211482 13.2502C0.0697321 13.0912 0.00148213 12.8797 0.0247321 12.6675C0.256482 10.5772 2.01898 9 4.12498 9C5.77948 9 7.22173 9.9735 7.87648 11.4045ZM8.71948 9.8745C8.42998 9.46575 8.08798 9.0975 7.70323 8.781C8.26348 7.14675 9.80923 6 11.6047 6C12.9577 6 14.1682 6.651 14.9235 7.67025C14.4675 7.55925 13.9905 7.5 13.5007 7.5C11.5492 7.5 9.81523 8.4315 8.71948 9.8745Z"
                fill="#C7CED9"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_550">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div> -->

        <div class="ml-6 remove-selected">
          <!-- remove selected  -->
          <n-button class="rounded-md">
            <span><i class="fa-regular fa-trash-can"></i></span>
            <span class="ml-2">Delete Selected</span>
          </n-button>
        </div>
      </div>

      <div class="ml-6 add-new">
        <!-- Add new  -->
        <n-button
          class="rounded-md"
          click="handleConfirm"
          @click="showModal = true"
        >
          <span><i class="fa-solid fa-plus"></i></span>
          <span class="ml-2">Add New</span>
        </n-button>
      </div>

      <div class="ml-6 add-new">
        <!-- import button  -->
        <n-button
          class="rounded-md"
          click="handleConfirm"
          @click="showImportModal = true"
        >
          <span class="mr-2">import</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
            >
              <path
                d="M3 6C3.59674 6 4.16903 5.76295 4.59099 5.34099C5.01295 4.91903 5.25 4.34674 5.25 3.75V0.75H9.75C10.3467 0.75 10.919 0.987053 11.341 1.40901C11.7629 1.83097 12 2.40326 12 3V15C12 15.5967 11.7629 16.169 11.341 16.591C10.919 17.0129 10.3467 17.25 9.75 17.25H2.25C1.65326 17.25 1.08097 17.0129 0.65901 16.591C0.237053 16.169 0 15.5967 0 15V6H3ZM2.9625 10.7475L5.2125 12.2475C5.32571 12.3233 5.45744 12.3669 5.59354 12.3735C5.72965 12.3801 5.86498 12.3495 5.985 12.285C6.10336 12.2202 6.20206 12.1248 6.2707 12.0086C6.33934 11.8924 6.37537 11.7599 6.375 11.625V10.875H8.625C8.82391 10.875 9.01468 10.796 9.15533 10.6553C9.29598 10.5147 9.375 10.3239 9.375 10.125C9.375 9.92609 9.29598 9.73532 9.15533 9.59467C9.01468 9.45402 8.82391 9.375 8.625 9.375H6.375V8.625C6.37537 8.49008 6.33934 8.35756 6.2707 8.24141C6.20206 8.12525 6.10336 8.02976 5.985 7.965C5.86772 7.90478 5.73664 7.87654 5.60497 7.88312C5.4733 7.88971 5.34569 7.93088 5.235 8.0025L2.985 9.5025C2.88291 9.57111 2.79926 9.66377 2.74142 9.77233C2.68357 9.88088 2.65332 10.002 2.65332 10.125C2.65332 10.248 2.68357 10.3691 2.74142 10.4777C2.79926 10.5862 2.88291 10.6789 2.985 10.7475H2.9625ZM3.75 3.75V0.8325C3.37221 0.937266 3.02836 1.13893 2.7525 1.4175L0.6525 3.5325C0.386508 3.80248 0.193024 4.13527 0.0900002 4.5H3C3.19891 4.5 3.38968 4.42098 3.53033 4.28033C3.67098 4.13968 3.75 3.94891 3.75 3.75Z"
                fill="white"
              />
            </svg>
          </span>
        </n-button>
      </div>

      <!-- add new dialog  -->
      <n-modal v-model:show="showModal">
        <dialog-content @close="showModal = false" />
      </n-modal>

      <!-- import dialog  -->
      <n-modal v-model:show="showImportModal">
        <import-content @close="showImportModal = false" />
      </n-modal>
    </div>
  </section>
</template>

<script>
import { NInput, NButton, NModal } from "naive-ui";
import { ref } from "vue";
import filterHideVue from "../filters/filterHide.vue";
import filterGroupVue from "../filters/filterGroup.vue";
import dialogContent from "../assets/dialogContent.vue";
import importContent from "../assets/ImportDialogContent.vue";
export default {
  name: "DeeperVisionSystemTenantTableLayout",
  setup() {
    const showGroupFilter = ref(false);
    const showHideFilter = ref(false);

    const showModal = ref(false);
    const showImportModal = ref(false);

    // const dialog = useDialog();
    return {
      showGroupFilter,
      showHideFilter,
      showModal,
      showImportModal,
    };
  },
  components: {
    NInput,
    NButton,
    filterGroupVue,
    filterHideVue,
    NModal,
    dialogContent,
    importContent,
  },
};
</script>

<style lang="scss">
.n-button .n-button__content,
.n-input__placeholder {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 0;
  color: #606c80 !important;
  font-weight: 700;
  font-size: 13px;
}
.n-button__content {
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
.filter {
  width: 100px;
  transition: 0.3s all;
  .custom-icon {
    position: absolute;
    left: 10px;
    top: 34%;
    color: #c7ced9;
    font-size: 16px;
    font-weight: bold;
  }
  .custom-drop-icon {
    color: #3a8352;
    position: absolute;
    right: 0;
    top: 15px;
  }
}

.filter:has(.n-input__input-el:focus) {
  width: 200px;
}
.filter-section {
  .remove-selected,
  .add-new {
    button {
      background-color: #3a8352;
      border-radius: 10px !important;
      height: 40px;
      span {
        color: #fff;
      }
    }
  }
  .main-table {
    height: 40px !important;
    color: #606c80;
    &::placeholder {
      color: #606c80 !important;
    }
  }
}
.head-section {
  border-bottom: 1px solid #e9ebf0;
  .main-table {
    position: relative;
    border: 1px solid var(--Gray-50, #ebeef2);
    color: #606c80;
    &::placeholder {
      color: #606c80 !important;
    }
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #3a8352;
      left: 0;
      bottom: -22px;
    }
    .text {
      color: #606c80;
    }
  }
}
.group-filter {
  position: absolute;
  top: 55px;
  min-width: 700px;
  z-index: 999;
  box-shadow: 0px 0px 10px #3333332d;
}
.hide-filter {
  position: absolute;
  top: 55px;
  min-width: 370px;
  right: 0;
  z-index: 99;
  box-shadow: 0px 0px 10px #3333332d;
}
</style>
