<template>
    <div>
        <NavsOpenMenu1 :modalActive="isOpen" @closeMenu="toggleMenu" />
        <div class="p-9 flex w-full justify-between items-center fixed z-50">
            <p @click="goToHome" class="text-xl tracking-wider  elementToAnimate"
                :class="isBlackHeader === true ? 'blackText' : 'whiteText'">CYPRIAN WACŁAW</p>
            <div class="flex items-center gap-10">
                <div class="w-[100px] elementToAnimate" :class="isBlackHeader === true ? 'border-black' : 'border-white'">
                    <ButtonsAnimation v-if="isOpen === true" @clickButton="toggleMenu" text="CLOSE"
                        :textColor="textColor" />
                    <ButtonsAnimation v-else @clickButton="toggleMenu" text="MENU" :textColor="textColor" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"

const isOpen = ref(false);
const textColor = ref('black');

const { isBlackHeader, isBgBlack } = storeToRefs(useState())



const goToHome = () => {
    useRouter().push('/');
};

const toggleMenu = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        setTimeout(() => {
            isBlackHeader.value = false
            // isBgBlack.value = false
        }, 40)
    } else {
        // isBgBlack.value = false
        setTimeout(() => {
            isBlackHeader.value = true
        }, 1000);
    }
}

watch(isBlackHeader, (newValue) => {
    console.log(newValue)

    if (newValue === true) {
        textColor.value = 'black'
    } else {
        textColor.value = 'white'
    }
})
</script>

<style scoped>
.elementToAnimate {
    transition: all 0.3s, border-color 0.3s;
}

.blackText {
    color: black;
}

.whiteText {
    color: white !important;
}

.border-black {
    border: 1px solid black;
    border-radius: 100px;
}

.border-white {
    border: 1px solid white;
    border-radius: 100px;
}
</style>
