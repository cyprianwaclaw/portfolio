<template>
    <div class="wrapper">
        <p class="white text-[120px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consectetur
            voluptatem quae ea
            similique adipisci reprehenderit vero voluptatum, debitis exercitationem nisi ad mollitia? Molestias veniam sint
            quisquam ea et dolorum nesciunt rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.</p>
    </div>
</template>
<script lang="ts" setup>
import { gsap } from 'gsap';
import SplitType from 'split-type';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {

    const split = new SplitType(".wrapper p", {
        types: "chars",
    });
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#textSection",
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.75,
            markers: true,
        }
    })
        .set(split.chars, {
            color: "#ffcc66",
            stagger: 0.1,
        }, 0.1);

})
</script>
<style lang="scss" scoped></style>
