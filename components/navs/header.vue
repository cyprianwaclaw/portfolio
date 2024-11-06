<template>
    <div>
        <NavsOpenMenu :modalActive="isOpen" />
        <div class="p-9 flex w-full justify-between items-center fixed z-50">
            <p @click="goToHome" class="text-xl tracking-wider elementToAnimate">CYPRIAN WACŁAW</p>
            <div class="flex items-center gap-10">
                <div class="w-[100px] border elementToAnimate rounded-full">
                    <ButtonsAnimation v-if="textColor === 'white'" @clickButton="toggleMenu" text="CLOSE"
                        :textColor="textColor" />
                    <ButtonsAnimation v-else @clickButton="toggleMenu" text="MENU" :textColor="textColor" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';

const isOpen = ref(false);
const textColor = ref('black');

let timeline = ref() as any;

const goToHome = () => {
    useRouter().push('/');
};

const toggleMenu = () => {
    isOpen.value = !isOpen.value;

    if (isOpen.value) {
        playAnimation()
        setTimeout(() => {
            textColor.value = 'white'
        }, 450)
    } else {
        setTimeout(() => {
            textColor.value = 'black'
        }, 1000);
        setTimeout(() => {
            reverseAnimation();
        }, 700);
    }
}

const playAnimation = () => {
    gsap.to('.elementToAnimate', {
        color: 'white',
        borderColor: 'white',
        ease: 'power2.out'
    });
};

const reverseAnimation = () => {
    gsap.to('.elementToAnimate', {
        color: 'black',
        borderColor: 'black',
        ease: 'power2.out'
    });
};

onMounted(() => {
    timeline.value = gsap.timeline({ paused: true });
    timeline.value.fromTo(
        '.elementToAnimate',
        { color: 'black', borderColor: 'black' },
        { color: 'white', borderColor: 'white' }
    );
});
</script>

<style scoped>
.elementToAnimate {
    transition: color 0.5s, border-color 0.5s;
    /* border: 1px solid black; */
}
</style>
