<template>
    <div class="relative w-full h-screen flex justify-center items-center flex-col -pt-[120px]">
        <div class="justify-start">
            <h2 class="font-semibold text-[31px]">My name is</h2>
            <h1 class="font-semibold text-[100px] -mt-[16px] tracking-[4px]">CYPRIAN WACŁAW</h1>
            <div class="flex place-items-center mt-[21px]">
                <div class="z-10 -mr-16">
                    <p class="text-[42px]">I create digital</p>
                    <p class="text-[55px] font-semibold -mt-[20px] ml-[113px]">experiences</p>
                </div>
                <div class="bg-[#D9D9D9] h-[270px] w-[450px] rounded-[22px]" />
                <div class="z-10 ml-[28px]">
                    <p class="text-[42px]">that define</p>
                    <p class="text-[55px] font-semibold -mt-[20px]">new reality</p>
                </div>
            </div>
        </div>
        <div class="flex absolute bottom-1  left-[28px] gap-[21px] place-items-center">
            <div v-for="(item, index) in linkMenuSocialArray" :key="index" class="my-[45px]">
                <p class="links-menu">
                    {{ item.name }}
                </p>
            </div>
        </div>
        <div class="flex absolute bottom-2 right-[28px]  gap-[21px] place-items-center">
            <div class="w-[145px]">
                <ButtonsAnimation @clickButton="toggleClick" text="LETS TALK" bgColor="#3EE9E9" />
            </div>
            <div v-for="(item, index) in linkMenuArray" :key="index" class="my-[45px]">
                <p class="links-menu">
                    {{ item.name }}
                </p>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import gsap from 'gsap';

const linkMenuSocialArray = reactive([
    { name: "Instagram", link: "/" },
    { name: "Behance", link: "/" },
    { name: "Linkedin", link: "/" },
    { name: "GitHub", link: "/" },
])

const linkMenuArray = reactive([
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
])

const toggleClick = () => { }

</script>

<style lang='scss' scoped>
.elipse {
    width: 800px;
    height: 800px;
    border: 5px dashed #e4e4e4;
    position: absolute;
    border-radius: 100%;
    z-index: -1;
}

.links-menu {
    color: #313131c0;
    text-transform: uppercase;
    font-size: 19px;
    transition: color 0.34s;
}

.links-menu:hover {
    color: #000000;
    cursor: pointer;
    transition: color 0.2s;
}

.custom-shadow {
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
}

.div-block-3 {
    flex-direction: column;
    align-items: flex-start;
    display: flex;
    overflow: hidden;
    position: relative;
}

.text-block-3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>
