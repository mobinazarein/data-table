<template>
  <!--<div
    class="d-flex flex-row text-nowrap justify-center items-center px-52 py-6 gap-x-2 select-none border-b-6 border-[#CFEBFD]">
    <template v-for="(item, index) in items" :key="index">
      <router-link :to="{ name: item.link }" active-class="selected"
        class="flex justify-center items-center px-6 py-3 cursor-pointer">
        {{ item.title }}
      </router-link>
      <div v-if="index < items.length - 1" class="w-0 h-7.5 border border-[#ADB0B41A]"></div>
    </template>
</div>
</template>
<script setup>
// import { useRoute } from "vue-router";
// const route = useRoute();
const items = [
  { title: "محاسبه", link: "calculation" },
  { title: "سوابق", link: "records" },
  // { title: "کیف نوسازی"},
  // { title: "انتقال فیش" },
  // { title: "فیش علی الحساب" },
  // { title: "آرای کمسیون 77" },
  // { title: "قرارداد های پسماند" },
];
</script>
<style>
.selected {
  color: #ffffff;
  border-radius: 7px;
  background: linear-gradient(90deg, #148976 0%, #117363 100%);
}
</style> -->
  <div>
    <v-row no-gutters justify="center">
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab v-for="item in pageData.items" :key="item" :text="item" :value="item"></v-tab>
        <!-- <v-tab :value="2">City</v-tab>
        <v-tab :value="3">Abstract</v-tab> -->
      </v-tabs>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref('Appetizers');
const pageData = ref({
  items: ['Appetizers',
    'Entrees',
    'Deserts',
    'Cocktails']
}).value
</script>