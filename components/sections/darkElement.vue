
<template>
    <div class="mx-[40px] trigger-action -mt-[1000px]">
        <p class="text-[50px] text-white">
            dasdadasds
        </p>
        <!-- <div class="flex justify-between">
            <div class="w-[600px]">
                <p class="text-small">Za każdym produktem stoi idea, <br>idea zmiany, idea innowacji, <br>idea nieustannego
                    rozwoju
                </p>
            </div>
            <div class="mt-[80px] w-[700px] flex place-content-start">
                <div class="mt-[2px] mr-[25px]">
                    <Icon name="ph:arrow-right-bold" size="50" class="text-[#49507B] arrowIcon" />
                </div>
                <p class="text-big">Każdy projekt to odpowiedź na potrzeby użytkowników, to gotowość do poszukiwania nowych
                    rozwiązań i przekraczania dotychczasowych granic, by dostarczać wartość, która rzeczywiście robi różnice
                </p>
            </div>
            <div>
            </div> -->
        </div>
        <!-- <div
            class="background absolute inset-0 bg-[#49507B] flex items-center justify-center text-white text-center text-big">
            Nowy tekst po zniknięciu ikony
        </div> -->
    <!-- </div> -->
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".trigger-action",
            start: "center center",
            // end: "+=1500",
            scrub: true,
            // pin: true,
        }
    });

    tl.to(".arrowIcon", {
        ease: "power1.inOut"
    }, "=+0.1")

        .to(".arrowIcon", {
            rotate: 90,
            duration: 1,
            ease: "power1.inOut"
        }, "=+1")

        .to(".arrowIcon", {
            duration: 10,
            scale: 500,
            x: 35,
        }, "=+0.1")
        .to(".arrowIcon", {
            duration: 3,
            opacity: 0
        }, "=+0.1")
        .set(".arrowIcon", { scale: 1, }) // Ukrycie ikony
    // .set(".arrowIcon", { opacity: 0 }) // Ukrycie ikony

})
</script>
<style lang="scss" scoped>
.text-small {
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 400;
}

.text-big {
    // text-transform: uppercase;
    white-space: normal;
    font-size: 38px;
    font-weight: 400;
}

.background {
    background: #49507B;
    display: none;
}
</style>