<template>
    <div>
        <div class="wrapper" id="textSection">
            <p class="reveal-text-home text-[44px]">
                I’m Cyprian, a freelancer specializing in crafting <br>digital experiences. I love designing interfaces
                that, <br>through their simplicity, invite users to engage <br>with them. I’ll show you how to bring your
                vision <br>for a digital product to life, transforming ideas<br> into a solution that captivates. Together,
                we’ll <br>create more than just a project – we’ll build <br>an unforgettable experience.
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import SplitType from 'split-type';
import gsap from 'gsap';

let tl1 = ref() as any;

onMounted(() => {
    nextTick(() => {
        const split = new SplitType(".wrapper p", {
            types: "chars",
        });

        tl1.value = gsap.timeline({
            scrollTrigger: {
                trigger: "#textSection",
                start: "top +=80%",
                end: "+=80%",
                scrub: true,
            }
        })
            .to(split.chars, {
                color: "black",
                webkitBackgroundClip: "text",
                backgroundClip: "text",
                stagger: 0.02,
                duration: 1,
            }, 0.1);
    });
});
</script>

<style lang="scss" scoped>
.wrapper {
    margin-top: 120px;
    display: flex;
}

.reveal-text-home {
    margin-left: 200px;
    color: #d5d5d5b2;
    line-height: 65px;
    word-wrap: break-word;
    white-space: normal;
}
</style>