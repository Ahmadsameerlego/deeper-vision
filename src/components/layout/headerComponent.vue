<template>
  <div class="flex items-center justify-between px-10" id="head">
    <!-- logo  -->
    <div class="Logo">
      <h1 class="text-2xl font-bold">Logo Here</h1>
    </div>
    <!-- info  -->
    <div class="flex admin-info">
      <div class="mr-5 admin-image">
        <img
          src="../../assets/imgs/profile.jpg"
          class="object-cover w-12 h-12 rounded-full"
          alt="admin image"
        />
        <svg id="cut-circ" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="23"
            stroke="green"
            fill="transparent"
            stroke-width="2"
          />
        </svg>
      </div>

      <div class="relative mr-2">
        <div class="admin-name">
          <span class="font-semibold"> codebase tech </span>
        </div>
        <div class="admin-role">
          <span class="text-xs font-semibold text-slate-400">Admin</span>
        </div>

        <!-- profile dropdown  -->
        <div class="px-4 py-3 bg-white rounded-md profile-dropdown">
          <!-- top  -->
          <div class="flex items-center justify-between">
            <div class="profile-image">
              <img src="/src/assets/imgs/profile.jpg" alt="profile image" />
            </div>

            <div>
              <div>
                <span class="text-base font-bold username"
                  >User Name Here
                </span>
              </div>
              <div>
                <span class="text-base font-bold text-slate-400 role"
                  >Admin
                </span>
              </div>
            </div>
            <div class="drop-role">Super</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeeperVisionSystemHeaderComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.profile-dropdown {
  position: absolute;
  width: 215px;
  right: 0;
  top: 55px;
  right: -22px;
  .username {
    font-size: 12px;
    font-weight: 700;
    color: #1f2633;
  }
  .role {
    color: #b8bfcc;
    font-size: 11px;
    font-weight: 600;
  }
  .profile-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #3a8352;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .drop-role {
    width: 38px;
    height: 18px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    background-color: #e5f0e8;
    align-items: center;
    color: #3a8352;
    font-size: 11px;
    font-weight: 600;
  }
}
.admin-info {
  position: relative;
  .admin-image {
    border-radius: 50%;
  }
}

#cut-circ {
  stroke-dasharray: 113;
  stroke-dashoffset: 0;
  position: absolute;
  left: 58px;
  top: -3px;
  transform: translate(-89px, -26px) rotate(-101deg);
  z-index: 0;
}
</style>
