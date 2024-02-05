<template>
    <div class="flex items-center justify-between px-10">
        <!-- logo  -->
        <div class="Logo">
            <h1 class="text-2xl font-bold">Logo Here</h1>
        </div>
        <!-- info  -->
        <div class="flex admin-info">
            <div class="mr-5 admin-image">
                <img src="../../assets/imgs/profile.jpg" class="object-cover w-12 h-12 rounded-full" alt="admin image">
                <svg id="cut-circ" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="23" stroke="green" fill="transparent" stroke-width="2"  />
                </svg>

            </div>

            <div class="mr-2">
                <div class="admin-name">
                    <span class="font-semibold"> codebase tech </span>
                </div>
                <div class="admin-role">
                    <span class="text-xs font-semibold text-slate-400">Admin</span>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    name: 'DeeperVisionSystemHeaderComponent',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .admin-info{
        position: relative;
        .admin-image{
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