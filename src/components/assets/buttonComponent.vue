<template>
    <NButton>
        <slot></slot>
    </NButton>
</template>

<script>
import { NButton } from 'naive-ui';
export default {
    name: 'DeeperVisionSystemButtonComponent',
    components: {
        NButton
    }
};
</script>

<style lang="scss" scoped>

</style>