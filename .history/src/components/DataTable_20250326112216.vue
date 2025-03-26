<template>
  <v-container fluid>
    <!-- desktop -->
    <v-row class="align-center py-3 px-1 d-none d-md-flex" no-gutters>
      <v-col cols="12" md="10" class="d-flex align-center  justify-start">
        <div class="d-flex align-center gap-24 justify-start">
          <div class="d-flex align-center text-nowrap">
            <component :is="iconComponent" />
            <h2 class="mr-3 ml-5 text-nowrap " style="white-space: nowrap;">{{ title }}</h2>
          </div>
          <div v-for="(icon, index) in iconList" :key="index">
            <component v-if="icon" :is="icon" class="mx-1" />
          </div>
          <v-text-field v-if="showSearchBtn" variant="outlined" density="compact" hide-details
            class="custom-text-field mx-2" label="جستجو کنید..." prepend-inner-icon="mdi-magnify" width="295.6875px" />
          <v-btn v-for="(button, index) in buttons" :key="index" variant="outlined" color="gray"
            class="ml-2 rounded-lg filter-btn"
            :style="{ maxWidth: button.width + 'px', minWidth: button.width + 'px', fontSize: button.fontSize, borderRadius: button.borderRadius }">
            {{ button.label }}
          </v-btn>
        </div>
      </v-col>
      <v-col cols="auto" md="2" class="d-flex align-center justify-end" v-if="props.showExportButtons">
        <v-btn icon variant="flat" class="ml-2 printer-btn">
          <PrinterIcon />
        </v-btn>
        <v-btn icon variant="flat" class="excel-btn">
          <ExcelIcon />
        </v-btn>
      </v-col>
    </v-row>
    <!-- mobile-->
    <v-row class="align-center d-flex d-md-none flex-no-wrap justify-between ">
      <v-col cols="12" class="d-flex align-center flex-no-wrap">
        <v-row no-gutters>
          <v-col cols="12">
            <div class="d-flex justify-space-between gap-8">
              <h2 class="text-nowrap " style="font-size: 20px; font-weight: 700;">{{ title }}</h2>
              <div class="d-flex">
                <v-btn v-for="(button, index) in mobileFilterButtons" :key="index" variant="outlined" color="gray"
                  class="ml-1 rounded-lg filter-btn"
                  :style="{ maxWidth: button.width + 'px', minWidth: button.width + 'px', fontSize: '12px', borderRadius: button.borderRadius + 'px' + ' !important' }">
                  {{ button.label }}
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <div class="d-flex flex-column ">
          <div class="gap-8 d-flex justify-space-between flex-wrap">
            <div v-for="(icon, index) in mobileIconList" :key="index" class="d-flex align-center justify-space-between">
              <component v-if="icon" :is="icon" iconColor="#767E8A" class="mx-1 ml-3 mb-3" />
            </div>
          </div>
          <v-text-field width="341px" variant="outlined" hide-details class="mx-2" label="جستجو کنید..."
            prepend-inner-icon="mdi-magnify" v-if="showSearchBtn" />
        </div>
      </v-col>
    </v-row>
    <v-row no-gutters class="px-1">
      <v-col cols="12" md="12" class="mt-5">
        <v-data-table :headers="headers" :items="items" :items-per-page="props.itemsPerPage" hide-default-footer>
          <template v-for="column in props.customStyles" #[`item.${column.key}`]="{ item }" :key="column.key">
            <v-chip
              :style="{ backgroundColor: column.bgColor, color: column.textColor, height: '22px', fontSize: '12px', cursor: column.icon ? 'pointer' : 'default' }"
              class="font-weight-bold">
              <v-icon v-if="column.icon" :color="column.iconColor" :size="column.iconSize" class="ml-1 mb-1">
                {{ column.icon }}
              </v-icon>
              {{ item[column.key] }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row class="justify-space-between d-md-none align-center px-1 mt-8 ">
      <div class="d-flex align-center ">
        <p class="footer-text">نمایش در هر صفحه</p>
        <v-select v-model="itemsPerPage" :items="[10, 20, 50]" density="compact" variant="outlined" rounded="pill"
          class="custom-select mr-3" hide-details menu-icon="mdi-unfold-more-horizontal"></v-select>
      </div>
      <div class="footer-middle">
        <span class="footer-text"> {{ startIndex }} - {{ endIndex }} از {{ totalItems }} مورد </span>
      </div>
      <div class="mt-5" style="margin-left: auto; margin-right: auto;">
        <v-pagination v-model="page" :length="totalPages" total-visible="5" rounded density="comfortable"
          color="primary" class="custom-pagination"></v-pagination>
      </div>
    </v-row>
    <v-row class="justify-space-between d-none d-md-flex align-center px-3 mt-8">
      <div class="d-flex align-center ">
        <p class="footer-text">نمایش در هر صفحه</p>
        <v-select v-model="itemsPerPage" :items="[10, 20, 50]" density="compact" variant="outlined" rounded="pill"
          class="custom-select mr-3" hide-details menu-icon="mdi-unfold-more-horizontal"></v-select>
      </div>
      <div class="footer-right">
        <v-pagination v-model="page" :length="totalPages" total-visible="5" rounded density="comfortable"
          color="primary" class="custom-pagination"></v-pagination>
      </div>
      <div class="footer-middle">
        <span class="footer-text"> {{ startIndex }} - {{ endIndex }} از {{ totalItems }} مورد </span>
      </div>
    </v-row>
  </v-container>
</template>
<script setup>
import PrinterIcon from '@/assets/Icons/PrinterIcon.vue';
import ExcelIcon from '@/assets/Icons/ExcelIcon.vue';
import { ref, computed } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  showExportButtons: {
    type: Boolean,
    default: true,
  },
  showSearchBtn: {
    type: Boolean,
    default: true
  },
  customStyles: { type: Array, default: () => [] },
  customIcon: { type: Array, default: () => [] },
  headers: { type: Array, required: true },
  items: { type: Array, required: true },
  title: {
    type: String,
    required: true
  },
  iconComponent: {
    type: [String, Object],
    required: true
  },
  iconList: {
    type: Array,
    required: true
  },
  mobileIconList: {
    type: Array,
    required: true
  },
  buttons: {
    type: Array,
    required: true,
    default: () => [
      { label: "همه", width: 48 },
      { label: "ابطال شده", width: 87 },
      { label: "وصول شده", width: 92 }
    ]
  },
  mobileFilterButtons: {
    type: Array,
    default: () => [
      { label: "همه", width: 44, borderRadius: 62 },
      { label: "ابطال شده", width: 80, borderRadius: 42 },
      { label: "وصول شده", width: 89, borderRadius: 42 }
    ]
  }
});
const page = ref(1);
const totalItems = ref(30);
const itemsPerPage = ref(props.itemsPerPage);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));
const startIndex = computed(() => (page.value - 1) * itemsPerPage.value + 1);
const endIndex = computed(() => Math.min(page.value * itemsPerPage.value, totalItems.value));
</script>
<style scoped>
.custom-text-field :deep(.v-input__control) {
  height: 38px;
}

.excel-btn {
  background: linear-gradient(45deg, #02A357, #0D7A40) !important;
  color: white !important;
  border-radius: 12px !important;
  box-shadow: 0px 4px 10px #0A88481A !important;
  width: 48px !important;
  height: 48px !important;
}

.printer-btn {
  border-radius: 12px !important;
  box-shadow: 0px 4px 10px #216BCA1A !important;
  background: linear-gradient(45deg, #3FA2ED, #1859BD) !important;
  color: white !important;
  width: 48px !important;
  height: 48px !important;
}

.filter-btn:hover,
.filter-btn:focus,
.filter-btn.v-btn--active {
  background-color: #B8DADA !important;
  color: #148976 !important;
  border-color: #148976 !important;
}

.filter-btn {
  border-color: #AEB2C04D !important;
  color: #40474F !important;
  line-height: 180% !important;
  padding: 0px 12px !important;
}

.footer-text {
  color: #5F6B7A;
  font-size: 14px;
  font-weight: 500;
}

.custom-select {
  max-width: 90px;
}

.custom-pagination {
  --v-pagination-height: 40px;
}

.footer-middle {
  font-size: 14px;
  color: #5F6B7A;
  font-weight: 500;
}
</style>