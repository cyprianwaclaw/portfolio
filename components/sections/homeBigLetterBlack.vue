
<template>
    <div class="mx-[80px]">
        <div class="flex justify-between">
            <div class="w-[600px]">
                <div class="bg-[#D9D9D9] h-[220px] w-[280px] rounded-[22px]" />
                <p class="text-small mt-[21px]">Za produktem stoi idea, <br>idea zmiany, idea innowacji, <br>idea ciągłego
                    rozwoju
                </p>
            </div>
            <div class="-mt-[30px]">
                <p class="text-big text-end">Każdy projekt to odpowiedź na potrzeby użytkowników
                </p>
            </div>
        </div>
        <div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"

</script>
<style lang="scss" scoped>
.text-small {
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 400;
}

.text-big {
    text-transform: uppercase;
    white-space: normal;
    font-size: 100px;
    font-weight: 600;
}

.background {
    background: #49507B;
    display: none;
}
</style>