<template>
  <v-app dir="rtl">
    <v-locale-provider :rtl="true">
      <div dir="rtl">
        <TopHeader />
        <NavTabs />
        <router-view />

      </div>
    </v-locale-provider>
  </v-app>
</template>

<script setup>
import TopHeader from './layouts/TopHeader.vue';
import NavTabs from './components/NavTabs.vue';
</script>
<style>
body {
  font-family: "IRANSans", sans-serif;
}
</style>
