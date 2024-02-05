<template>
  <div>
    <table
      class="w-full mt-8 bg-white border-collapse rounded-md table-auto w-100"
    >
      <thead>
        <tr>
          <th class="border border-l-0 border-r-0">
            <input type="checkbox" v-model="selectAll" @change="checkAllRows" />
          </th>
          <th class="flex items-center border border-b-0 border-l-0">
            <img
              src="/src/assets/imgs/User.svg"
              alt=""
              class="object-cover table-head-icon"
            />
            <span class="mx-3">NAME</span>
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
          <th class="flex items-center border border-b-0 border-r-0 boder-l-0">
            <img
              src="/src/assets/imgs/Circle Check.svg"
              alt=""
              class="object-cover table-head-icon"
            />
            <span class="mx-3"> DATE </span>
            <i class="fa-solid fa-chevron-down"></i>
          </th>

          <th class="border border-b-0 border-l-0 border-r-0"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="border border-l-0 border-r-0">
            <input
              type="checkbox"
              v-model="item.checked"
              @change="checkRows(index)"
            />
          </td>
          <td class="border border-l-0">{{ item.name }}</td>
          <td class="border">{{ item.subscriptionCount }}</td>
          <td class="border">{{ item.mainPrice }}</td>
          <td class="border">{{ item.discount }}</td>

          <td class="border border-r-0">
            <span>
              <i class="fa-regular fa-calendar"></i>
            </span>
            <span class="mx-3">
              {{ item.date }}
            </span>
          </td>

          <td class="flex border border-b-0 border-l-0 border-r-0">
            <button class="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M11.8152 13.9615H4.27669C3.99107 13.9615 3.71715 13.848 3.51519 13.6461C3.31323 13.4441 3.19977 13.1702 3.19977 12.8846V3.19226H12.8921V12.8846C12.8921 13.1702 12.7786 13.4441 12.5767 13.6461C12.3747 13.848 12.1008 13.9615 11.8152 13.9615Z"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.43018 10.7303V6.42261"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66138 10.7303V6.42261"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.04565 3.19226H15.0457"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66078 1.03809H6.43001C6.14439 1.03809 5.87047 1.15155 5.66851 1.35351C5.46655 1.55547 5.35309 1.82939 5.35309 2.11501V3.19193H10.7377V2.11501C10.7377 1.82939 10.6242 1.55547 10.4223 1.35351C10.2203 1.15155 9.9464 1.03809 9.66078 1.03809Z"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button class="mx-2 btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M13.3604 1.64713C13.1648 1.45231 12.9325 1.29818 12.6769 1.19365C12.4213 1.08912 12.1476 1.03626 11.8715 1.03813C11.5954 1.04 11.3223 1.09656 11.0682 1.20454C10.8141 1.31252 10.5839 1.46978 10.3909 1.66724L2.06231 9.9958L1.04565 13.9619L5.01177 12.9447L13.3403 4.61612C13.5378 4.42321 13.6951 4.19305 13.8032 3.93897C13.9112 3.68488 13.9678 3.41191 13.9696 3.13582C13.9715 2.85974 13.9186 2.58602 13.8141 2.33049C13.7095 2.07497 13.5553 1.84271 13.3604 1.64713V1.64713Z"
                  stroke="#615E83"
                  stroke-width="1.3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DeeperVisionSystemTableComponent",
  setup() {
    const selectAll = ref(false);
    const items = ref([
      {
        name: "Level 1",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
      },
      {
        name: "Level 1",
        subscriptionCount: 4,
        mainPrice: 100,
        discount: "90%",
        date: "Dec 12, 2023",
        checked: false,
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

    return {
      selectAll,
      items,
      checkAllRows,
      checkRows,
    };
  },
};
</script>

<style lang="scss" scoped>
table {
  td,
  th {
    height: 53px;
    text-align: left;
    padding-left: 20px;
  }
  .fa-chevron-down {
    color: #0c0c0c;
    font-size: 14px;
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
  font-weight: 600;
}
</style>
