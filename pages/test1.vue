
<template>
    <div class="flex w-full h-screen justify-center items-center ml-[300px]">
        <div class="image-wrapper">
            <img src="/13.jpg" />
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';

onMounted(() => {
    gsap.fromTo(
        'img',
        {
            clipPath: 'inset(100% 0 0 0)',
            scale: 1.2
        },
        {
            clipPath: 'inset(0% 0 0 0)',
            scale: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }
    );
});
</script>

<style scoped>
.image-wrapper {
    overflow: hidden;
    width: 100%;
    height: auto;
}

img {
    display: block;
    width: 400px;
    height: auto;
}
</style>