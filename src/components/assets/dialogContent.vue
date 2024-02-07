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
      <h5 class="font-bold text-center">Create Tenants</h5>

      <div class="flex justify-end close-modal">
        <button @click="closeModal"><i class="fa-solid fa-x"></i></button>
      </div>
    </section>

    <!-- body  -->
    <section class="py-9 modal-body border-bottom px-7">
      <h4 class="font-bold">Fill in these inputs</h4>

      <form>
        <div class="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
          <inputLayout
            inputName="Name"
            placeholder="Enter Name"
            inputType="text"
            validationText="This is a message"
          />

          <inputLayout
            inputName="phone"
            placeholder="Enter Phone"
            inputType="number"
            validationText="This is a message"
          />

          <inputLayout
            inputName="Email"
            placeholder="Enter Email"
            inputType="email"
            validationText="This is a message"
          />

          <inputLayout
            inputName="Password"
            placeholder="Enter Password"
            inputType="password"
            validationText="This is a message"
          />
        </div>
      </form>
    </section>

    <!-- footer  -->
    <section class="pb-0 mt-3 modal-footer px-7">
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

        <button class="px-5 py-2 mx-3 main-btn">
          <span class="mx-3"> Save </span>
          <span>
            <i class="fa-solid fa-arrow-right-long"></i>
          </span>
        </button>
      </div>
    </section>
  </n-card>
</template>

<script>
import inputLayout from "./inputLayout.vue";
export default {
  name: "DeeperVisionSystemDialogContent",
  setup(props, context) {
    const closeModal = () => {
      context.emit("close");
      console.log("done");
    };

    return {
      closeModal,
    };
  },
  components: {
    inputLayout,
  },
};
</script>

<style>
.n-card > .n-card__content,
.n-card > .n-card__footer {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
</style>
<style lang="scss" scoped>
.modal-header {
  .h5 {
    font-size: 15px;
  }
  .close-modal {
    position: absolute;
    right: 40px;
    top: 0px;
    font-size: 20px;
    font-size: 17px;
  }
}
.modal-body {
  h4 {
    font-size: 18px;
  }
}
</style>
