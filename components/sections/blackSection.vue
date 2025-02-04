<template>
    <div class="black-container bg-new-white11223">
        <div class="mx-[200px]">
            <div class="text-container">
                <p class="animated-text1">Projekty</p>
            </div>

            <div class="mt-[120px] image-section">
                <div class="flex justify-between gap-[21px] w-full">
                    <div class="image-wrapper">
                        <NuxtImg
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d19222185738331.6568b549ecb83.jpg"
                            class="w-[600px] h-[600px] img1 object-cover" />
                    </div>
                    <div class="image-wrapper">
                        <NuxtImg
                            src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ace7c4186777573.657b23e182cac.jpg"
                            class="w-[600px] h-[600px] img2 object-cover" />
                        <div class="w-[600px] h-[600px] img2 bg-bg-[#D9D9D9]" />
                    </div>
                </div>
                <div class="flex justify-between gap-[21px] w-full mt-[54px]">
                    <div class="image-wrapper">
                        <NuxtImg
                            src=" https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ace7c4186777573.657b23e182cac.jpg"
                            class="w-[600px] h-[600px] img3 object-cover" />
                    </div>
                    <div class="image-wrapper">
                        <NuxtImg
                            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d19222185738331.6568b549ecb83.jpg"
                            class="w-[600px] h-[600px] img4 object-cover" />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-[300px] ">
            <SectionsHomeImagesWhite />
        </div>
        <div class="bg-black h-[345px]"></div>
    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap'
import { storeToRefs } from "pinia"
import { useState } from "@/store/state"
import ScrollTrigger from 'gsap/ScrollTrigger'

const { isBlackHeader, isBgBlack } = storeToRefs(useState())

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {

    gsap.fromTo(
        '.bg-new-white11223',
        {
            opacity: 0,
            duration: 0,

        },
        {
            opacity: 1,
            duration: 0,
            scrollTrigger: {
                trigger: ".bg-new-white11223",
                // start: "top 0%",
                start: "top-=14%",
                // start: "top 38%", // Animacja zaczyna się 20% przed głównym elementem
                // end: "top 30%", // Opcjonal
                scrub: true,
                markers: true,
                // onUpdate: () => {
                //     isBlackHeader.value = false
                //     isBgBlack.value = !isBgBlack.value
                // }
                onEnter: () => { // Wyzwala, gdy element wchodzi na ekran
                    isBlackHeader.value = false
                    isBgBlack.value = true
                },
                onLeave: () => { // Wyzwala, gdy element znika z ekranu
                    isBlackHeader.value = true
                    isBgBlack.value = false
                },
                onEnterBack: () => { // Wyzwala, gdy element wraca na ekran
                    isBlackHeader.value = false
                    isBgBlack.value = true
                },
                onLeaveBack: () => { // Wyzwala, gdy element znika podczas przewijania wstecz
                    isBlackHeader.value = true
                    isBgBlack.value = false
                },
            }
        }
    );

    gsap.fromTo(
        '.animated-text1',
        { y: 150 },
        {
            y: 0,
            duration: 5,
            ease: "cubic-bezier(.64,.4,.4,.64)",
            scrollTrigger: {
                trigger: ".black-container",
                start: "top 30%",
                end: "top 15%",
                scrub: true
            }
        }
    );
    // https://mir-s3-cdn-cf.behance.net/project_modules/1400/ace7c4186777573.657b23e182cac.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/disp/ace7c4186777573.657b23e182cac.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/ace7c4186777573.657b23e182cac.jpg 1600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ace7c4186777573.657b23e182cac.jpg 1200w
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".image-section",
            start: "top 80%",
            end: "bottom 80%",
            // markers: true,
            scrub: true
        }
    });

    tl.fromTo(
        '.img1',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 2, ease: "cubic-bezier(.64,.4,.4,.64)" }
    ).fromTo(
        '.img2',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 3, ease: "cubic-bezier(.64,.4,.4,.64)" },
        ">-2"
    ).fromTo(
        '.img3',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 3, ease: "cubic-bezier(.64,.4,.4,.64)" },
        ">-2"
    ).fromTo(
        '.img4',
        { clipPath: 'inset(100% 0 0 0)', scale: 1.2 },
        { clipPath: 'inset(0% 0 0 0)', scale: 1, duration: 3, ease: "cubic-bezier(.64,.4,.4,.64)" },
        ">-2"
    );
});
</script>
<style lang="scss" scoped>
.black-container {
    transform: translateY(-70vh);
}

// .bg-new-white11223 {
//     // transform: translateY(-71vh);
//     // background: rgb(0, 0, 0)
// }

.text-container {
    overflow: hidden;
    width: 500px;
    height: 180px;
    position: relative;
}

.animated-text1 {
    font-size: 130px;
    color: white;
    font-weight: 500;
}

.image-wrapper {
    overflow: hidden;
    width: 600px;
    height: 600px;
}
</style>