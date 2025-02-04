<template>
  <div class="lenis-c">
    <Preloader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
html.lenis,
html.lenis body {
  height: auto;

}

.lenis-c {
  width: 100vw;
}

.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}

.lenis.lenis-stopped {
  overflow: hidden;
}

.lenis.lenis-smooth iframe {
  pointer-events: none;
}

body,
html {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
