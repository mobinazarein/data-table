<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col class="mt-3">
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab v-for="item in pageData.items" :key="item.value" :to="{ name: item.link }" class="px-10"
            style="border-left: 1px solid #ADB0B41A;">
            {{ item.title }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <router-view />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";

const route = useRoute();

const pageData = {
  items: [
    { title: "محاسبه", value: 0, link: "calculation" },
    { title: "سوابق", value: 1, link: "history" },
    { title: "کیف نوسازی", value: 2, link: "renewal-bag" },
    { title: "انتقال فیش", value: 3, link: "transfer-check" },
    { title: "فیش علی الحساب", value: 4, link: "advance-check" },
    { title: "آرای کمسیون77", value: 5, link: "commission-77" },
    { title: "قرارداد های پسماند", value: 6, link: "waste-contracts" },
  ],
};

const tab = computed(() => {
  const currentTab = pageData.items.find((item) => item.link === route.name);
  return currentTab ? currentTab.value : 0;
});
</script>
