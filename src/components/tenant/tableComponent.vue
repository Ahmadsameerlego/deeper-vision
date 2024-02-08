<template>
  <div class="pt-3 pb-3 mt-4 bg-white rounded-lg table-container px-7">
    <table
      class="w-full mt-8 bg-white border border-collapse rounded-md table-auto w-100"
    >
      <!-- thead  -->
      <thead>
        <tr class="">
          <th class="px-3 border check-cell">
            <n-checkbox v-model:checked="selectAll" class="" />
          </th>
          <th class="flex items-center border border-b-0 border-l-0">
            <span class="mx-3">Activity Name</span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="border">
            <span class="mx-3">SUBSCRIPTION COUNT</span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="border">
            <span class="mx-3"> MAIN PRICE </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="border">
            <span class="mx-3">DISCOUNT</span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="border">
            <span class="mx-3"> DATE </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="border">
            <span class="mx-3"> Image </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>

          <th class="flex items-center border border-r-0 boder-l-0">
            <span class="mx-3"> TextArea </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
        </tr>
      </thead>
      <!-- tbody  -->
      <tbody>
        <tr>
          <td class="border check-cell">
            <n-checkbox v-model:checked="select" />
          </td>

          <td
            class="relative border border-l-0"
            :class="{ 'pl-0': item.type == 'dropdown' }"
            v-for="(item, index) in items"
            :key="index"
            @click="checkCellType(item.editable, index, item.type)"
          >
            <span
              v-if="isCellClicked[index]"
              :class="{ 'dropdown-cell': item.type == 'dropdown' }"
            >
              {{ item.name }}
            </span>

            <!-- image input  -->
            <div v-if="item.type == 'image'">
              <input
                type="file"
                class="upload-images"
                @change.stop="handleFileChange"
                multiple
              />
              <img
                src="/src/assets/imgs/upload.svg"
                alt=""
                v-if="imagePreviews.length == 0"
              />

              <!-- uploaded images  -->
              <div class="flex uploaded-images" v-if="imagePreviews.length > 0">
                <div class="relative mx-2">
                  <input
                    type="file"
                    class="upload-images"
                    @change.stop="handleFileChange"
                    multiple
                  />
                  <img src="/src/assets/imgs/upload.svg" alt="" />
                </div>
                <div
                  class="image-preview"
                  v-for="(image, index) in imagePreviews.slice(0, 5)"
                  :key="index"
                >
                  <img :src="image" alt="Preview" />
                  <button class="remove-image" @click.stop="removeImage(index)">
                    x
                  </button>
                </div>
              </div>
            </div>

            <div v-if="item.type == 'textarea'">
              <span @click="showTextAreaModal = true">
                {{ item.name }}
              </span>
            </div>

            <section v-if="!isCellClicked[index]">
              <!-- input text  -->
              <n-input
                v-model:value="item.name"
                type="text"
                v-if="item.type == 'text'"
                @blur="isCellClicked[index] = true"
                autofocus
              />
              <!-- input number  -->
              <n-input
                v-model:value="item.name"
                type="number"
                v-if="item.type == 'number'"
                @blur="isCellClicked[index] = true"
                autofocus
              />
              <!-- date picker  -->
              <div class="" v-if="item.type == 'date'">
                <n-date-picker
                  v-model:value="item.name"
                  type="date"
                  @focus="true"
                  @update:value="isCellClicked[index] = true"
                />
              </div>

              <!-- dropdown  -->
              <div v-if="item.type == 'dropdown'">
                <n-select
                  v-model:value="item.name"
                  :options="options"
                  @update:value="isCellClicked[index] = true"
                  class="w-full dropdown-cell"
                >
                  {{ item.name }}
                </n-select>
              </div>

              <!-- carousel  -->
              <n-modal v-if="item.type == 'image'" v-model:show="showModal">
                <n-card
                  style="width: 730px"
                  :bordered="true"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
                >
                  <!-- header  -->
                  <section
                    class="relative flex justify-between px-5 pb-4 modal-header"
                  >
                    <h5 class="flex items-center text-base font-bold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M26.6667 0H5.33333C3.91885 0 2.56229 0.561903 1.5621 1.5621C0.561903 2.56229 0 3.91885 0 5.33333V26.6667C0 28.0812 0.561903 29.4377 1.5621 30.4379C2.56229 31.4381 3.91885 32 5.33333 32H26.6667C28.0812 32 29.4377 31.4381 30.4379 30.4379C31.4381 29.4377 32 28.0812 32 26.6667V5.33333C32 3.91885 31.4381 2.56229 30.4379 1.5621C29.4377 0.561903 28.0812 0 26.6667 0ZM8.88889 7.11111C9.41631 7.11111 9.93188 7.26751 10.3704 7.56053C10.8089 7.85354 11.1507 8.27002 11.3526 8.75729C11.5544 9.24456 11.6072 9.78074 11.5043 10.298C11.4014 10.8153 11.1474 11.2905 10.7745 11.6634C10.4016 12.0363 9.92641 12.2903 9.40913 12.3932C8.89185 12.4961 8.35567 12.4433 7.8684 12.2415C7.38113 12.0396 6.96465 11.6978 6.67164 11.2593C6.37862 10.8208 6.22222 10.3052 6.22222 9.77778C6.22222 9.07053 6.50317 8.39226 7.00327 7.89216C7.50337 7.39206 8.18165 7.11111 8.88889 7.11111ZM28.4444 26.3644C28.4837 26.8758 28.3186 27.3819 27.9854 27.7718C27.6522 28.1617 27.1779 28.4036 26.6667 28.4444H5.33333L18.7911 16.32C19.0171 16.1139 19.3119 15.9996 19.6178 15.9996C19.9236 15.9996 20.2185 16.1139 20.4444 16.32L28.4444 24.2844V26.3644Z"
                          fill="#3A8352"
                        />
                      </svg>

                      <span class="mx-3 text-base font-bold">
                        {{ activeImageName }}
                      </span>
                    </h5>

                    <div class="flex justify-end close-modal">
                      <button @click="showModal = false">
                        <i class="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </section>

                  <section class="py-10 table-modal-body">
                    <n-carousel show-arrow>
                      <img
                        v-for="(image, index) in imagePreviews"
                        :key="index"
                        class="carousel-img"
                        :src="image"
                      />
                    </n-carousel>
                  </section>
                </n-card>
              </n-modal>

              <!-- text area  -->
              <n-modal
                v-if="item.type == 'textarea'"
                v-model:show="showTextAreaModal"
              >
                <n-card
                  style="width: 730px"
                  :bordered="true"
                  size="huge"
                  role="dialog"
                  aria-modal="true"
                >
                  <!-- header  -->
                  <section class="relative pb-4 modal-header border-bottom">
                    <h5 class="font-bold text-center">Edit Notes</h5>

                    <div class="flex justify-end close-modal">
                      <button @click="showTextAreaModal = false">
                        <i class="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </section>

                  <section class="py-9 modal-body border-bottom px-7">
                    <h4 class="font-bold">Fill in these inputs</h4>

                    <form>
                      <div class="grid grid-cols-1 gap-4 mt-4">
                        <!-- <inputLayout
                          inputName="Add your notes here"
                          placeholder="Add description"
                          inputType="textarea"
                          validationText="noText"
                          isValidTextExist="false"
                        /> -->
                      </div>
                    </form>
                  </section>

                  <!-- footer  -->
                  <section class="pb-0 mt-3 modal-footer px-7">
                    <div class="flex justify-end">
                      <button
                        class="flex items-center px-5 py-2 second-btn"
                        @click="showTextAreaModal = false"
                      >
                        <span>
                          <i class="fa-solid fa-arrow-left-long"></i>
                        </span>
                        <span class="mx-3"> Cancel </span>
                      </button>

                      <button class="px-5 py-2 mx-3 main-btn">
                        <span class="mx-3"> Save </span>
                        <span>
                          <i class="fa-solid fa-arrow-right-long"></i>
                        </span>
                      </button>
                    </div>
                  </section>
                </n-card>
              </n-modal>
            </section>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { NCheckbox, NInput, NDatePicker, NSelect } from "naive-ui";
// import inputLayout from "../assets/inputlayout.vue";

export default {
  name: "DeeperVisionSystemTableComponent",
  setup() {
    const selectAll = ref(false);
    const showModal = ref(false);
    const showTextAreaModal = ref(false);
    const isCellClicked = ref([true, true, true, true, true]);

    const imagePreviews = ref([]);
    const activeImageName = ref("");

    const items = ref([
      {
        name: "Activity Name",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        editable: true,
        type: "text",
      },
      {
        name: 1183135260000,
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        checked: false,
        editable: true,
        type: "date",
      },
      {
        name: 1183135260000,
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        checked: false,
        type: "date",
        editable: true,
      },
      {
        name: 4,
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
        type: "number",
        editable: true,
      },
      {
        name: "In Progress",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
        editable: true,
        type: "dropdown",
      },
      {
        name: "/src/assets/imgs/en.svg",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
        editable: true,
        type: "image",
      },
      {
        name: "Lorem Ipsum is simply dummy and typesetting industry ",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
        editable: true,
        type: "textarea",
      },
    ]);

    // ========== methods ============
    const checkAllRows = () => {
      for (let i = 0; i < this.items.length; i++) {
        items.value[i].checked = this.selectAll;
      }
    };

    const checkRows = () => {
      if (index + 2 < items.value.length) {
        items.value[index + 1].checked = items.value[index].checked;
        items.value[index + 2].checked = items.value[index].checked;
      }
    };

    // check type

    const checkCellType = (cell, index, type) => {
      if (cell == true) {
        console.log("done");
        isCellClicked.value[index] = false;
        if (type == "image" && imagePreviews.value.length > 0) {
          showModal.value = true;
        }
      }
    };

    // upload images
    const handleFileChange = (event) => {
      const files = event.target.files;
      if (!files) return;

      // Clear previous previews
      // imagePreviews.value = [];

      // Loop through selected files
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();

        // Read file as a data URL and push to imagePreviews
        reader.onload = (e) => {
          imagePreviews.value.push(e.target.result);
        };

        // Read the file
        reader.readAsDataURL(files[i]);
      }
      activeImageName.value = files[0].name;
    };

    // remove image
    const removeImage = (index) => {
      imagePreviews.value.splice(index, 1);
    };

    // ===== mounted ============
    onMounted(() => {
      isCellClicked.value = isCellClicked.value.map(() => true);
    });

    return {
      selectAll,
      items,
      checkAllRows,
      checkRows,
      checkCellType,
      isCellClicked,
      options: [
        {
          label: "Not Standard",
          key: "Not Standard",
        },
        {
          label: "In Progress",
          key: "In Progress",
        },
        {
          label: "Completed",
          key: "Completed",
        },
      ],
      showModal,
      imagePreviews,
      handleFileChange,
      removeImage,
      activeImageName,
      showTextAreaModal,
    };
  },
  components: {
    NCheckbox,
    NInput,
    NDatePicker,
    NSelect,
    // inputLayout,
  },
};
</script>

<style lang="scss">
table .n-checkbox .n-checkbox-box {
  width: 20px !important;
  height: 20px !important;
}
</style>
<style lang="scss" scoped>
.dropdown-cell {
  background-color: #3b82f6;
  display: block;
  widows: 100%;
  height: 100%;
  color: #fff !important;
  text-align: center;
  padding-top: 5px;
}
.calender {
  position: absolute;
  width: 200px;
  height: 200px;
}
table {
  td,
  th {
    position: relative;
    height: 35px;
    text-align: start;
    padding-left: 10px;
    &.pl-0 {
      padding-left: 0 !important;
    }
  }
  .fa-chevron-down {
    color: #9291a5;
    font-size: 10px;
    position: absolute;
    right: 8px;
  }
  .fa-calendar {
    color: #3a8352;
  }

  .table-head-icon {
    width: 18px;
    height: 18px;
  }
}
table th {
  border-top: none;
  color: #9291a5;
  font-weight: 500;
  font-size: 11px;
}
.check-cell {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    opacity: 0;
    background-color: #3a8352;
    transition: 0.2s all;
  }
  &:has(.n-checkbox--checked) {
    &::before {
      opacity: 1;
    }
  }
}

.image-preview {
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  position: relative;
}

.image-preview img {
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.remove-image {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ce1126;
  color: #fff;
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 7px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.upload-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>
