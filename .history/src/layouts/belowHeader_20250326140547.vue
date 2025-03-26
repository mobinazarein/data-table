<template>
  <div>
    <v-row no-gutters justify="center">
      <v-col class="mt-3">
        <v-tabs v-model="tab" align-tabs="center">
          <v-tab v-for="item in pageData.items" :key="item.value" :text="item" :to="{ name: item.link }" class="px-10"
            :value="item" style="border-left: 1px solid #ADB0B41A;">{{ item.title }}</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const tab = ref(0);
const pageData = ref({
  items: [{ title: 'محاسبه', value: 0 },
  { title: 'سوابق', value: 1, link: '/' },
  { title: 'کیف نوسازی', value: 2 },
  { title: 'انتقال فیش', value: 3 },
  { title: 'فیش علی الحساب', value: 4 },
  { title: 'آرای کمسیون77', value: 5 },
  { title: 'قرارداد های پسماند', value: 5 },
  ]
}).value
</script>