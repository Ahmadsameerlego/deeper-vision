<template>
  <n-menu :options="menuOptions" @update:value="handleUpdateValue" />
</template>

<script>
import { defineComponent, h } from "vue";
import { RouterLink } from "vue-router";

import { NMenu } from "naive-ui";

const menuOptions = [
  // home
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
        [
          h("img", {
            src: "/src/assets/imgs/home.svg",
            class: "h-5 w-5 mr-2",
          }),
          h(
            "span",
            {
              class: "nav-item",
            },
            "Home"
          ),
        ]
      ),
    key: "go-back-home",
  },
  // management
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
        [
          h("img", {
            src: "/src/assets/imgs/business-time.svg",
            class: "h-5 w-5 mr-2",
          }),
          h(
            "span",
            {
              class: "nav-item ",
            },
            "Managent"
          ),
        ]
      ),
    key: "Dance Dance Dance",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
            [
              h("img", {
                src: "/src/assets/imgs/user-gear 1.svg",
                class: "h-5 w-5 mr-2",
              }),
              h(
                "span",
                {
                  class: "dropdown-item",
                },
                "Roles"
              ),
            ]
          ),
        key: "people",
      },
      {
        label: () =>
          h(
            RouterLink,
            { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
            [
              h("img", {
                src: "/src/assets/imgs/Vector.svg",
                class: "h-5 w-5 mr-2",
              }),
              h(
                "span",
                {
                  class: "dropdown-item",
                },
                "Users"
              ),
            ]
          ),
        key: "people",
      },
    ],
  },
  // Tenant
  {
    label: () =>
      h("div", { class: "flex" }, [
        h("img", {
          src: "/src/assets/imgs/dashboard_customize.svg",
          class: "h-5 w-5 mr-2",
        }),
        h(
          "span",
          {
            class: "nav-item",
          },
          "Tenant"
        ),
      ]),
    key: "Tenant",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: { name: "tenant", params: { lang: "en-US" } },
              class: "flex",
            },
            [
              h("img", {
                src: "/src/assets/imgs/rent.svg",
                class: "h-5 w-5 mr-2",
              }),
              h(
                "span",
                {
                  class: "dropdown-item",
                },
                "Tenant"
              ),
            ]
          ),
        key: "Tenant",
      },
      {
        label: () =>
          h(
            RouterLink,
            { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
            [
              h("img", {
                src: "/src/assets/imgs/dice-d6.svg",
                class: "h-5 w-5 mr-2",
              }),
              h(
                "span",
                {
                  class: "dropdown-item",
                },
                "Packages"
              ),
            ]
          ),
        key: "Packages",
      },
      {
        label: () =>
          h(
            RouterLink,
            { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
            [
              h("img", {
                src: "/src/assets/imgs/sack-dollar.svg",
                class: "h-5 w-5 mr-2",
              }),
              h(
                "span",
                {
                  class: "dropdown-item",
                },
                "Supscribtions"
              ),
            ]
          ),
        key: "Supscribtions",
      },
    ],
  },
  //Projects
  {
    label: () =>
      h(
        RouterLink,
        { to: { name: "home", params: { lang: "en-US" } }, class: "flex" },
        [
          h("img", {
            src: "/src/assets/imgs/apps-add.svg",
            class: "h-5 w-5 mr-2",
          }),
          h(
            "span",
            {
              class: "nav-item",
            },
            "Projects"
          ),
        ]
      ),
    key: "Projects",
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
    };
  },
  components: {
    NMenu,
  },
});
</script>

<style lang="scss">
.n-menu .n-menu-item-content .n-menu-item-content__arrow {
  color: #3a8352;
  font-size: 20px;
}
.nav-item {
  font-size: 14px;
  color: #1f2633 !important;
  font-weight: 600;
  line-height: 20px;
}
.dropdown-item {
  color: #6b7a99 !important;
  font-weight: 700;
  font-size: 14px !important;
}
</style>
