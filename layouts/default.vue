
<template>
    <div :class="isBgBlack == false ? 'bg-white' : 'bg-black'">
        <NavsHeader />
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"

const { isBgBlack  } = storeToRefs(useState())
</script>

<style lang="postcss" scoped>

</style>
