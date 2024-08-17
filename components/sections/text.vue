<template>
    <div class="wrapper" id="#textSection">
        <p class="reveal-text-home text-[44px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            consectetur
            voluptatem quae ea
            similique adipisci reprehenderit vero voluptatum, debitis exercitationem nisi ad mollitia? Molestias veniam
            sint
            quisquam ea et dolorum nesciunt rem saepe id, amet vero, necessitatibus esse reiciendis molestiae.</p>
    </div>
</template>
<script lang="ts" setup>
import SplitType from 'split-type';
import gsap from 'gsap';

let tl1 = ref() as any

onMounted(() => {

    const split = new SplitType(".wrapper p", {
        types: "chars",
    });
    tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#textSection",
            start: "top -50%",
            end: "+=40%",
            pin: true,
            scrub: 0.75,
        }
    })
        .set(split.chars, {
            color: "black",
            stagger: 0.1,
        }, 0.1);

})
</script>
<style lang="scss" scoped>
.reveal-text-home {
    width: 60%;
    margin-left: 200px;
    margin-top: 200px;
    color: #d5d5d5b2;
}
</style>
