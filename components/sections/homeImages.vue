<template>
    <div class="m-[200px] rotate-6">
        <div class="flex gap-[48px] -ml-[1000px] moving-text">
            <div v-for="(text, index) in textArray" :key="index">
                <p :class="text.class">{{ text.text }}</p>
            </div>
        </div>
        <div class="flex gap-[48px] -mr-[1000px] moving-text1 mt-[24px]">
            <div v-for="(text, index) in textArray1" :key="index">
                <p :class="text.class">{{ text.text }}</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let tl = ref() as any
const textArray = ref([
    { text: 'WEB DEVELOPER', class: 'color-text' },
    { text: 'NUXT', class: 'black-text' },
    { text: 'UI DESIGNER', class: 'color-text' },
    { text: 'WEB DEVELOPER', class: 'black-text' },
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'NUXT', class: 'black-text' },
])
const textArray1 = ref([
    { text: 'WORDPRESS', class: 'color-text' },
    { text: 'LARAVEL', class: 'black-text' },
    { text: 'UX DESIGNER', class: 'color-text' },
    { text: 'VUE', class: 'black-text' },
    { text: 'CYPRIAN WACŁAW', class: 'color-text' },
    { text: 'WEB DEVELOPER', class: 'black-text' },
    { text: 'LARAVEL', class: 'color-text' },
])


onMounted(() => {
    // Animacja dla stałego ruchu tekstu w poziomie
    // gsap.to(".moving-text", {
    //     x: "100%", // Przesunięcie w prawo
    //     duration: 20, // Czas trwania animacji (dla jednej pełnej pętli)
    //     // repeat: -1, // Powtarzanie w nieskończoność
    //     ease: "linear" // Stała prędkość
    // })
    // ScrollTrigger do przyspieszania ruchu podczas przewijania
    gsap.to(".moving-text", {
        scrollTrigger: {
            trigger: ".moving-text", // Element, na którym bazujemy animację
            start: "top bottom", // Zaczyna, gdy element wejdzie w widok
            end: "bottom top", // Kończy, gdy element wychodzi z widoku
            scrub: 2, // Synchronizacja prędkości z przewijaniem
            // pin: true,
        },
        x: "1000px", // Przyspieszenie ruchu podczas przewijania
        ease: "none", // Stała prędkość ruchu
    })

    gsap.to(".moving-text1", {
        scrollTrigger: {
            trigger: ".moving-text1", // Element, na którym bazujemy animację
            start: "top bottom", // Zaczyna, gdy element wejdzie w widok
            end: "bottom top", // Kończy, gdy element wychodzi z widoku
            scrub: 3, // Synchronizacja prędkości z przewijaniem
            //    pin: true,
        },
        x: "-1000px", // Przyspieszenie ruchu podczas przewijania
        ease: "none", // Stała prędkość ruchu
    })
})
</script>
<style lang="scss" scoped>
.black-text {
    font-size: 80px;
    font-weight: 600;
    color: black;
    white-space: nowrap;
    transition: all 0.2s;

}

.color-text {
    white-space: nowrap;
    font-size: 76px;
    font-weight: 500;
    color: rgb(255, 255, 255);
    letter-spacing: 3px;
    text-shadow:
        2px 2px 0px #3EE9E9,
        -2px 2px 0px #3EE9E9,
        2px -2px 0px #3EE9E9,
        -2px -2px 0px #3EE9E9,
        2px 0px 0px #3EE9E9,
        -2px 0px 0px #3EE9E9,
        0px 2px 0px #3EE9E9,
        0px -2px 0px #3EE9E9;
    transition: all 0.2s;

}

.color-text:hover {
    white-space: nowrap;
    font-size: 76px;
    // font-weight: 600;
    color: #3EE9E9;
    text-shadow:
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
        0px #3EE9E9,
}
</style>