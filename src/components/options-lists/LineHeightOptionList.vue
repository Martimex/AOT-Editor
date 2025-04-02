<script setup lang="ts">
    import { defineEmits } from 'vue';
    import type { lineHeightOptionsObj } from '@/types/allTypes';

    const emits = defineEmits(['confirmSetLineHeight']);

    /* LIST OF SUPPORTED LINE HEIGHT VARIANTS */
    const LINEHEIGHT_OPTIONS: lineHeightOptionsObj[] = [
        { displayName: '80%', value: 0.8 },
        { displayName: '100%', value: 1.0 },
        { displayName: '125%', value: 1.25 },
        { displayName: '150%', value: 1.50 },
        { displayName: '175%', value: 1.75 },
        { displayName: '200%', value: 2.0 } 
    ];

    const updateLineHeight = (theLineHeight: lineHeightOptionsObj) => { 
        const { displayName, value  } = theLineHeight;
        emits('confirmSetLineHeight', { displayName, value }); 
    }

</script>

<template>
    <li v-for="option in LINEHEIGHT_OPTIONS" @click="updateLineHeight(option)"
        class="py-1 px-2 truncate w-full bg-[#eeeb] text-sm font-medium text-[#222] text-center transition-colors border-[#222d] border-solid
            hover:cursor-pointer hover:bg-[#eeec] hover:font-bold hover:border-x-2
        "
    > 
        {{ option.displayName }} 
    </li>
</template>

<style scoped>

</style>