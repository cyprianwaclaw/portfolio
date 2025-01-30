<template>
    <div class="black-container">
        <div class="mx-[200px]">
            <div class="text-container">
                <p class="animated-text">
                    Projekty
                </p>
            </div>
        </div>
        <div class="mt-[400px]">
            <SectionsHomeImagesWhite />
        </div>
        <div class="bg-black h-[254px]">
        </div>
    </div>
</template>

<script setup lang="ts">
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
                start: "top 50%",
                end: "top 15%",
                scrub: true,
            },
        }
    );


})
</script>

<style lang="scss" scoped>
.black-container {
    transform: translateY(-70vh);
}


.text-container {
    overflow: hidden;
    width: 500px;
    height: 150px;
    position: relative;
}

.first-img-wrapper {
    overflow: hidden;
    width: 500px;
    height: 500px;
    position: relative;
}

.animated-text {
    font-size: 100px;
    color: white;
    font-weight: 400;
}
</style>