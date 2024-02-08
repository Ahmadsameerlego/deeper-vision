<template>
  <!-- breadcrumb  -->
  <section class="w-full px-5 py-2 bg-white rounded-md">
    <div class="flex items-center bread-crumb">
      <div>
        <span class="text-lg font-bold">Dashboard</span>
        <!-- seperator  -->
        <span class="mx-1 seperator">|</span>
      </div>

      <div>
        <span class="text-base font-bold main-color"> Profile </span>
      </div>
    </div>
  </section>

  <h5 class="px-8 mt-4 mb-4 text-base font-bold">Personal Information</h5>

  <!-- form content  -->
  <section class="w-full px-8 py-5 bg-white rounded-md">
    <inputLayout
      inputName="Name En"
      inputType="text"
      placeholder="Enter Name En"
      class="mb-4"
    />
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      <inputLayout
        inputName="Email"
        inputType="text"
        placeholder="Enter Email"
        class="mb-4"
      />

      <div class="flex items-center justify-between">
            <n-input-group>
            <n-input :style="{ width: '33%' }" />
            <inputLayout
                inputName="Phone"
                inputType="number"
                placeholder="Enter Phone"
                class="w-3/4 mb-4"
            />            
            </n-input-group>

        

        <div class="flex mt-3">
          <span class="text-lg font-semibold main-color"> Admin </span>
        </div>
      </div>

      <inputLayout
        inputName="Password"
        inputType="password"
        validationText="This is a message"
        placeholder="Enter Password"
        class="mb-4"
      />

      <inputLayout
        inputName="Rewrite Password"
        inputType="password"
        validationText="This is a message"
        placeholder="Enter Password Confirmation"
      />
    </div>
  </section>
</template>

<script setup>
import inputLayout from "../profile/profileInput.vue";
component: {
  inputLayout;
}
</script>

<style lang="scss" scoped></style>
