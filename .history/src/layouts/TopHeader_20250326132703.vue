<template>
    <div class="flex justify-between items-center p-6 border-b border-[#ADB0B433] select-none">
        <div class="flex flex-row gap-x-1.25">
            <ClipBoard />
            <div class="h-5 text-nowrap">عوارض نوسازی</div>
        </div>
        <!-- <FullScreen class="cursor-pointer" @click="toggleFullscreen" /> -->
    </div>
</template>
<script setup>
import ClipBoard from "../assets/Icons/clipboard.vue";
// import FullScreen from "@assets/icon/dashboard/header/fullScreen.vue";
// const toggleFullscreen = () => {
//     if (document.fullscreenElement) {
//         if (document.exitFullscreen) {
//             document.exitFullscreen();
//         } else if (document.webkitExitFullscreen) {
//             // Safari
//             document.webkitExitFullscreen();
//         } else if (document.mozCancelFullScreen) {
//             // Firefox
//             document.mozCancelFullScreen();
//         } else if (document.msExitFullscreen) {
//             // IE/Edge
//             document.msExitFullscreen();
//         }
//     } else {
//         const doc = document.documentElement;
//         if (doc.requestFullscreen) {
//             doc.requestFullscreen();
//         } else if (doc.mozRequestFullScreen) {
//             // Firefox
//             doc.mozRequestFullScreen();
//         } else if (doc.webkitRequestFullscreen) {
//             // Chrome, Safari, Opera
//             doc.webkitRequestFullscreen();
//         } else if (doc.msRequestFullscreen) {
//             // IE/Edge
//             doc.msRequestFullscreen();
//         }
//     }
// };
</script>
<style scoped></style>