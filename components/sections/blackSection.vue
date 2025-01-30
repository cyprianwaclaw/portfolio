<template>
    <div class="black-container">
        <div class="mx-[200px]">
            <div class="text-container">
                <p class="animated-text">Projekty</p>
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
        <div class="mt-[300px]">
            <SectionsHomeImagesWhite />
        </div>
        <div class="bg-black h-[254px]"></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.fromTo(
        '.animated-text',
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

.text-container {
    overflow: hidden;
    width: 500px;
    height: 180px;
    position: relative;
}

.animated-text {
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