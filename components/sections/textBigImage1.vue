<template>
    <div class="flex  opacity-change-class flex-col justify-start">
        <div class="flex mx-[200px]">
            <div class="mt-[13px] mr-[50px] iconChange flex justify-start">
                <Icon name="raphael:plus" size="62" class="iconClass" />
            </div>
            <div class="relative -mt-[8px] -ml-[45px]">
                <p class="text-sentence text absolute top-0">
                    to gotowość do poszukiwania nowych
                    rozwiązań i przekraczania dotychczasowych granic</p>
                <p class="text-sentence text1 absolute top-0">
                    to odwaga, by kwestionować utarte schematy i proponować świeże podejście
                </p>
                <p class="text-sentence text2 absolute top-0">
                    to pasja tworzenia rzeczy, które nie tylko działają, ale również inspirują
                </p>
            </div>
        </div>
        <!-- <div class="black-section  px-[200px] -mt-[120px] "> -->
        <!-- <div class="text-container">
                <p class="animated-text">
                    Projekty
                </p>
            </div> -->
        <!-- <div class="flex w-full justify-end bg-black ">
                <div class="first-img-wrapper">
                    <NuxtImg src="/images/img.webp" class="w-[800px] first-img" />
                </div>
            </div> -->
        <!-- <div class="flex w-full justify-start bg-black mt-[50px]">
                <div>
                    <NuxtImg src="/images/img.webp" class="w-[800px]" />
                </div>
            </div> -->
        <!-- <div class="flex gap-[40px] mt-[40px]">
                <div class="bg-[#D9D9D9] h-[420px] w-full rounded-[22px]" />
                <div class="bg-[#D9D9D9] h-[420px]  w-full rounded-[22px]" />
            </div> -->

        <!-- </div> -->
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { isBlackHeader, isBgBlack } = storeToRefs(useState())

gsap.registerPlugin(ScrollTrigger);



// onMounted(() => {
//     const tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: ".opacity-change-class",
//             start: "top 36%",
//             end: "bottom -70%",
//             scrub: true,
//             // markers: true,
//             pin: true,
//         },
//     });

//     tl.to(".opacity-change-class", {
//         opacity: 1,
//         duration: 300,
//     })
//         .to(".text", {
//             opacity: 1,
//             duration: 300,
//         }, "=")
//         .to(".text", {
//             opacity: 0,
//             duration: 300,
//         })
//         .to(".text1", {
//             opacity: 1,
//             duration: 300,
//         })
//         .to(".text1", {
//             opacity: 0,
//             duration: 300,
//         })
//         .to(".text2", {
//             opacity: 1,
//             duration: 300,
//         })
//         .to(".text2", {
//             opacity: 0,
//             duration: 300,
//         })
//         .to(".iconChange", {
//             width: '100%',
//             justifyContent: 'start',
//         })
//         .to(".iconChange", {
//             x: '50%',
//             duration: 500, // Czas trwania animacji
//             ease: "power2.out", // Gładka animacja
//         })
//         .to(".iconClass", {
//             scale: 100,
//             duration: 700,
//         })
//         .to(".black-section", {
//             opacity: 1,
//             duration: 0,
//             zIndex: 2,
//             onUpdate: () => {
//                 isBlackHeader.value === false ? isBlackHeader.value = true : isBlackHeader.value = false
//             }
//         }, "<60%")
//         .fromTo(
//             '.animated-text',
//             {
//                 y: 150,
//             },
//             {
//                 // delay: 100,
//                 y: 0,
//                 duration: 400,
//                 ease: "cubic-bezier(.64,.4,.4,.64)",
//                 // onComplete: (() => {
//                 //     test()
//                 // })
//             }, '>-0.1')


// })

onMounted(async () => {
    //  await nextTick(); 
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".opacity-change-class",
            start: "top 36%",
            end: "bottom -70%",
            scrub: true,
            pin: true,
        },
    });

    tl.to(".opacity-change-class", { opacity: 1, duration: 300 })
        .to(".text", { opacity: 1, duration: 300 }, "=")
        .to(".text", { opacity: 0, duration: 300 })
        .to(".text1", { opacity: 1, duration: 300 })
        .to(".text1", { opacity: 0, duration: 300 })
        .to(".text2", { opacity: 1, duration: 300 })
        .to(".text2", { opacity: 0, duration: 300 })
        .to(".iconChange", { width: '100%', justifyContent: 'start' })
        .to(".iconChange", { x: '50%', duration: 500, ease: "power2.out" })
        .to(".iconClass", { scale: 100, duration: 700 })
        .to(".black-section", {
            opacity: 1,
            duration: 0,
            // zIndex: 10,
            onUpdate: () => {
                isBlackHeader.value = !isBlackHeader.value;
                isBgBlack.value = !isBgBlack.value
            }
        }, "<60%")
        // .fromTo(
        //     '.animated-text',
        //     { y: 150 },
        //     { y: 0, duration: 400, ease: "cubic-bezier(.64,.4,.4,.64)" },
        //     '>-0.1'
        // )
        .to(".iconClass", { display: "none" })


});




const test = () => {
    gsap.fromTo(
        '.first-img',
        {
            x: -800,
            scale: 1.2
        },
        {
            delay: 0.1, // 100ms
            x: 0,
            scale: 1,
            duration: 0.8, // 800ms
            ease: "cubic-bezier(0.64, 0.4, 0.4, 0.64)"
        }
    );
};
</script>

<style lang="scss" scoped>
.text-sentence {
    font-size: 42px;
    font-weight: 400;
    width: 850px;
    margin-top: 20px;
    opacity: 0;

}

.opacity-change-class {
    height: 500px;
    opacity: 0;
}
</style>

