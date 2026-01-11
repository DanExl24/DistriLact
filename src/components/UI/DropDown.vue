<template>
    <div class="relative">
        <slot name="trigger"></slot>
        <div v-if="open" class="border border-black absolute top-8 w-full">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style>

</style>