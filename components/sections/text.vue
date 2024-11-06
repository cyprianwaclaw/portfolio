<template>
    <div class="wrapper" id="#textSection">
        <p class="reveal-text-home text-[44px]">
            <!-- Jestem Cyprian pracuje jako freelancer specjalizując się w tworzeniu cyfrowych doświadczeń. Rozmawiam, projektuje, wdrażam. Kocham projektować interfejsy, które swoją prostotą zachęcają do korzystanie z nich.

    Pokażę Ci, jak najlepiej urzeczywistnić Twoją wizję na produkt cyfrowy, przekuwając pomysły w rozwiązanie, które angażuje. Razem stworzymy coś więcej niż tylko projekt – powstanie niezapomniane doświadczenie -->

            I’m Cyprian, a freelancer specializing in crafting <br>digital experiences. Talk, design, and implement.<br> I
            love designing interfaces that, through their simplicity, invite users to engage with them.
            <br><br>
            I’ll show you how to bring your vision for a <br> digital product to life, transforming ideas into a solution
            that captivates. Together, we’ll create more than just a project – we’ll build an unforgettable experience.

        </p>
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
            start: "bottom 70%",
            end: "+=60%",
            pin: true,
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
    margin-top: 120px;
    color: #d5d5d5b2;
    line-height: 60px;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
</style>
