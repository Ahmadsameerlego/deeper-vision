<script setup>
import { ref } from "vue";
import headerComponent from "./components/layout/headerComponent.vue";
import sidebar from "./components/layout/sidebarComponent.vue";

// menu toggle
const isToggle = ref(true);
const toggleBars = () => {
  document.querySelector("#sidebar").classList.toggle("active");
  document.querySelector("#content").classList.toggle("active");
  document.querySelector(".menu-title").classList.toggle("active");
  document.querySelectorAll(".n-menu-item-content-header img").forEach((el) => {
    el.classList.toggle("active");
  });
  document
    .querySelectorAll(
      ".n-menu .n-menu-item-content .n-menu-item-content__arrow"
    )
    .forEach((el) => {
      el.classList.toggle("active");
    });
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.classList.toggle("active");
  });

  // isToggle.value = !isToggle.value;
};
</script>

<template>
  <headerComponent id="header" />
  <section id="sidebar">
    <div class="flex items-center justify-between ml-10 mr-3">
      <span class="menu-title">MENU</span>

      <!-- toggle bar  -->
      <button @click="toggleBars">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
        >
          <path
            d="M1.30766 12H13.048C13.6351 12 14.1154 11.55 14.1154 11C14.1154 10.45 13.6351 10 13.048 10H1.30766C0.720645 10 0.240356 10.45 0.240356 11C0.240356 11.55 0.720645 12 1.30766 12ZM1.30766 7H9.84613C10.4331 7 10.9134 6.55 10.9134 6C10.9134 5.45 10.4331 5 9.84613 5H1.30766C0.720645 5 0.240356 5.45 0.240356 6C0.240356 6.55 0.720645 7 1.30766 7ZM0.240356 1C0.240356 1.55 0.720645 2 1.30766 2H13.048C13.6351 2 14.1154 1.55 14.1154 1C14.1154 0.45 13.6351 0 13.048 0H1.30766C0.720645 0 0.240356 0.45 0.240356 1ZM18.7048 8.88L15.6309 6L18.7048 3.12C19.121 2.73 19.121 2.1 18.7048 1.71C18.2885 1.32 17.6161 1.32 17.1999 1.71L13.3682 5.3C12.952 5.69 12.952 6.32 13.3682 6.71L17.1999 10.3C17.6161 10.69 18.2885 10.69 18.7048 10.3C19.1104 9.91 19.121 9.27 18.7048 8.88Z"
            fill="#B8BFCC"
          />
        </svg>
      </button>
    </div>

    <sidebar />
  </section>

  <section id="content" class="pt-5 pl-5 pr-10">
    <router-view />
  </section>
</template>

<style scoped>

</style>
