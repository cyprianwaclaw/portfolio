<template>
  <div class="lenis-c">
    <NuxtPage />
  </div>
</template>
<style scoped>

html.lenis,
html.lenis body {
    height: auto;

}

.lenis-c{
    width: 100vw;
    margin-left: -8px;
    margin-top: -8px;
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
