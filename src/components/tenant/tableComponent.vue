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
          <th class="flex items-center border border-r-0 boder-l-0">
            <span class="mx-3"> DATE </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>
          <th class="flex items-center border border-r-0 boder-l-0">
            <span class="mx-3"> Image </span>
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
            @click="checkCellType(item.editable, index)"
          >
            <span
              v-if="isCellClicked[index]"
              :class="{ 'dropdown-cell': item.type == 'dropdown' }"
            >
              {{ item.name }}
              <!-- <img :src="item.name" alt="" /> -->
            </span>

            <section v-if="!isCellClicked[index]">
              <!-- input text  -->
              <n-input
                v-model:value="item.name"
                type="text"
                v-if="item.type == 'text'"
                @blur="isCellClicked[index] = true"
              />
              <!-- input number  -->
              <n-input
                v-model:value="item.name"
                type="number"
                v-if="item.type == 'number'"
                @blur="isCellClicked[index] = true"
              />
              <!-- date picker  -->
              <div class="" v-if="item.type == 'date'">
                <n-date-picker
                  v-model:value="item.name"
                  type="date"
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
export default {
  name: "DeeperVisionSystemTableComponent",
  setup() {
    const selectAll = ref(false);
    const isCellClicked = ref([true, true, true, true, true]);

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

    const checkCellType = (cell, index) => {
      if (cell == true) {
        console.log("done");
        isCellClicked.value[index] = false;
      }
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
    };
  },
  components: {
    NCheckbox,
    NInput,
    NDatePicker,
    NSelect,
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
</style>
