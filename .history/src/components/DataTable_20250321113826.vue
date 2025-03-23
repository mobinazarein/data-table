<template>
  <v-container fluid>
    <!-- desktop -->
    <v-row class="align-center py-3 px-5 d-none d-md-flex" no-gutters>
      <div class="d-flex align-center">
        <PauseIcon />
        <h2 class="mr-3 ml-5">سوابق فیش</h2>
      </div>
      <v-col cols="12" md="5" class="d-flex align-center justify-md-end justify-start">
        <PaginationIcon class="mx-1" />
        <EyeIcon class="mx-1" />
        <InvoiceIcon class="mx-1" />
        <CircleCross class="mx-1" />
        <FilterIcon class="mx-1" />
        <v-text-field variant="outlined" density="compact" hide-details class="custom-text-field mx-2"
          label="جستجو کنید..." prepend-inner-icon="mdi-magnify" />
      </v-col>
      <v-col cols="auto" class="d-flex align-center mx-auto">
        <v-btn variant="outlined" color="gray" class="rounded-lg ml-2 filter-btn">همه</v-btn>
        <v-btn variant="outlined" color="gray" class="ml-2 rounded-lg filter-btn">ابطال شده</v-btn>
        <v-btn variant="outlined" color="gray" class="ml-2 rounded-lg filter-btn">وصول شده</v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex align-center">
        <v-btn icon variant="flat" color="blue" class="ml-2 btn-square">
          <PrinterIcon />
        </v-btn>
        <v-btn icon variant="flat" color="green" class="btn-square">
          <ExcelIcon />
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" md="12">
        <v-data-table :headers="pageData.headers" :items="pageData.items"></v-data-table>
      </v-col>
    </v-row>
    <!-- mobile-->
    <v-row class="align-center d-flex d-md-none flex-no-wrap justify-between ">
      <v-col cols="12" class="d-flex align-center flex-no-wrap">
        <v-row no-gutters>
          <v-col cols="4">
            <h2 class="text-nowrap" style="font-size: 18px; font-weight: 700;">سوابق فیش</h2>
          </v-col>
          <v-col cols="8" class="d-flex">
            <v-btn variant="outlined"
              style="width: 44px !important;height: 40px !important;font-size: 12px;font-weight: 400;" color="gray"
              class="rounded-xl ml-2 filter-btn">همه</v-btn>
            <v-btn variant="outlined"
              style="width: 77px !important;height: 40px !important;font-size: 12px;font-weight: 400" color="gray"
              class="ml-2 rounded-xl filter-btn">ابطال شده</v-btn>
            <v-btn variant="outlined" color="gray" class=" rounded-xl filter-btn ml-1"
              style="width: 81px !important;height: 40px !important;font-size: 12px;font-weight: 400">وصول شده</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex justify-center gap-8 mt-2 flex-wrap">
        <PaginationIcon class="mx-1" />
        <EyeIcon class="mx-1" />
        <InvoiceIcon class="mx-1" />
        <CircleCross class="mx-1 mt-3" />
        <FilterIcon class="mx-1 mt-3" />
        <PrinterIcon iconColor="#767E8A" class="mx-1 mt-3" />
        <ExcelIcon iconColor="#767E8A" class="mx-1 mt-3" />
      </v-col>
      <v-col cols="12">
        <v-text-field variant="outlined" hide-details class="custom-text-field mx-2" label="جستجو کنید..."
          prepend-inner-icon="mdi-magnify" />
      </v-col>
    </v-row>

  </v-container>
</template>


<script setup>
import PauseIcon from '@/assets/Icons/PauseIcon.vue';
import PaginationIcon from '@/assets/Icons/PaginationIcon.vue';
import EyeIcon from '@/assets/Icons/EyeIcon.vue';
import InvoiceIcon from '@/assets/Icons/InvoiceIcon.vue';
import CircleCross from '@/assets/Icons/CircleCross.vue';
import FilterIcon from '@/assets/Icons/FilterIcon.vue';
import PrinterIcon from '@/assets/Icons/PrinterIcon.vue';
import ExcelIcon from '@/assets/Icons/ExcelIcon.vue';
import { ref } from 'vue';
const pageData = ref({
  headers: [
    { title: 'ردیف محاسبه', key: 'row', align: 'center', sortable: true },
    { title: 'شماره سند', key: 'documentNumber', align: 'center', sortable: true },
    { title: 'وصول فیش', key: 'receiptStatus', align: 'center', sortable: true },
    { title: 'تاریخ محاسبه', key: 'calculationDate', align: 'center', sortable: true },
    { title: 'مبلغ', key: 'amount', align: 'center', sortable: true },
    { title: 'مدت زمان', key: 'duration', align: 'center', sortable: true },
    { title: 'تاریخ تسویه', key: 'settlementDate', align: 'center', sortable: true },
    { title: 'کاربر محاسب', key: 'user', align: 'center', sortable: true },
    { title: 'نوع فیش', key: 'receiptType', align: 'center', sortable: true }
  ],
  items: [
    {
      row: 'ابطال شده (557)',
      documentNumber: '12345',
      receiptStatus: 'وصول شد',
      calculationDate: '1402/12/25',
      amount: '1,500,000',
      duration: '30 روز',
      settlementDate: '1402/12/30',
      user: 'علی رضایی',
      receiptType: 'نوع A'
    },
    {
      row: 'ابطال شده (557)',
      documentNumber: '67890',
      receiptStatus: 'در انتظار',
      calculationDate: '1402/12/20',
      amount: '2,000,000',
      duration: '45 روز',
      settlementDate: '1403/01/05',
      user: 'زهرا احمدی',
      receiptType: 'نوع B'
    }
  ]
});
</script>


<style>
.custom-text-field :deep(.v-input__control) {
  height: 38px;
}

.v-field.v-field--center-affix.v-field--prepended.v-field--variant-outlined.v-theme--light.v-locale--is-rtl {
  border-radius: 12px !important;
}

.btn-square {
  border-radius: 12px !important;
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
}

/* tr {
  background-color: green !important;
} */
.v-data-table thead {
  background-color: #F5F7FA !important;
  /* رنگ پس‌زمینه هدر */
}

.v-data-table thead th {
  color: #5F6B7A !important;
  /* رنگ متن هدر */
  font-weight: 700 !important;
  border-bottom: 2px solid #DCE1E7 !important;
  /* خط جداکننده بین هدر و داده‌ها */
}

.v-data-table tbody tr {
  border-bottom: 1px solid #DCE1E7 !important;
  /* خط بین سطرها */
}

.v-data-table tbody tr td {
  color: #F6F8FA !important;
  /* رنگ متن درون جدول */
  font-weight: 500 !important;
}
</style>