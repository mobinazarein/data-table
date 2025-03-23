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
    <v-row class="justify-space-between d-none align-center px-4 mt-8 ">
      <div class="d-flex align-center ">
        <p class="footer-text">نمایش در هر صفحه</p>
        <v-select v-model="itemsPerPage" :items="[10, 20, 50]" density="compact" variant="outlined" rounded="pill"
          class="custom-select mr-3" hide-details></v-select>
      </div>
      <div class="footer-right">
        <v-pagination v-model="page" :length="totalPages" total-visible="5" rounded density="comfortable"
          color="primary" class="custom-pagination"></v-pagination>
      </div>
      <div class="footer-middle">
        <span class="footer-text"> {{ startIndex }} - {{ endIndex }} از {{ totalItems }} مورد </span>
      </div>
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
    <v-row no-gutters>
      <v-col cols="12" md="12" class="mt-5">
        <v-data-table :headers="pageData.headers" :items="pageData.items" :items-per-page="itemsPerPage"
          hide-default-footer>
          <template v-slot:item.row="{ item }">
            <v-chip style="background-color: #FFEEF0;color: #DC3545;height: 22px;border-radius: 8px;font-size: 12px;"
              class="">
              {{ item.row }}
            </v-chip>
          </template>
          <template v-slot:item.documentNumber="{ item }">
            <v-chip color="blue" class="ma-1 "
              style="width: 170px;height: 22px !important; border-radius: 8px;padding: 0;font-size: 12px;">
              <v-icon end color="#013075" size="xl" class="pa-0 mt-1">mdi-eye</v-icon>
              <v-btn variant="text" color="#013075" size="small">
                مشاهده [{{ item.documentNumber }}]
              </v-btn>
            </v-chip>
          </template>
          <template v-slot:item.receiptType="{ item }">
            <v-chip style="background-color: #FFBE4C26;color: #FFBE4C;height: 22px;font-size: 12px;"
              class=" font-weight-bold">
              {{ item.receiptType }}
            </v-chip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <v-row class="justify-space-between d-md-none align-center px-4 mt-8 ">
      <div class="d-flex align-center ">
        <p class="footer-text">نمایش در هر صفحه</p>
        <v-select v-model="itemsPerPage" :items="[10, 20, 50]" density="compact" variant="outlined" rounded="pill"
          class="custom-select mr-3" hide-details></v-select>
      </div>
      <div class="footer-middle">
        <span class="footer-text"> {{ startIndex }} - {{ endIndex }} از {{ totalItems }} مورد </span>
      </div>
      <!-- <v-col cols="12" md="auto" class="d-flex justify-center mt-2 mt-md-0"> -->
      <v-pagination v-model="page" :length="totalPages" total-visible="5" rounded density="comfortable" color="primary"
        class="custom-pagination"></v-pagination>
      <!-- </v-col> -->
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
  import { ref, computed } from 'vue';
  const pageData = ref({
    headers: [
      { title: 'ردیف محاسبه', key: 'row', align: 'center', sortable: true, width: '121px' },
      { title: 'شماره سند', key: 'documentNumber', align: 'center', sortable: true, width: '165px' },
      { title: 'وصول فیش', key: 'receiptStatus', align: 'center', sortable: true, width: '139px' },
      { title: 'تاریخ محاسبه', key: 'calculationDate', align: 'center', sortable: true, width: '159px' },
      { title: 'مبلغ', key: 'amount', align: 'center', sortable: true, width: '139px' },
      { title: 'مدت زمان', key: 'duration', align: 'center', sortable: true, width: '165px' },
      { title: 'تاریخ تسویه', key: 'settlementDate', align: 'center', sortable: true, width: '139px' },
      { title: 'کاربر محاسب', key: 'user', align: 'center', sortable: true, width: '139px' },
      { title: 'نوع فیش', key: 'receiptType', align: 'center', sortable: true, width: '139px' }
    ],
    items: [
      {
        row: 'ابطال شده (557)',
        documentNumber: '1403001368',
        receiptStatus: '09130537010',
        calculationDate: '23 تیر 1403 ساعت 17:55',
        amount: '5,000,000,000',
        duration: '23 اسفند 1400 تا 22 مهر 1402',
        settlementDate: '1403/11/23 08:30:51',
        user: 'مدیر ارشد',
        receiptType: 'علی الحساب'
      },
      {
        row: 'ابطال شده (557)',
        documentNumber: '1403001368',
        receiptStatus: '09130537010',
        calculationDate: '23 تیر 1403 ساعت 17:55',
        amount: '5,000,000,000',
        duration: '23 اسفند 1400 تا 22 مهر 1402',
        settlementDate: '1403/11/23 08:30:51',
        user: 'مدیر ارشد',
        receiptType: 'علی الحساب'
      }
    ]
  });
  const page = ref(1);
  const itemsPerPage = ref(10);
  const totalItems = ref(19);
  const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));
  const startIndex = computed(() => (page.value - 1) * itemsPerPage.value + 1);
  const endIndex = computed(() => Math.min(page.value * itemsPerPage.value, totalItems.value));
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

  .v-data-table thead {
    background-color: #F6F8FA !important;
    width: 138.41665649414062px;
    height: 32px !important;
  }

  .v-data-table thead th {
    height: 32px !important;
    color: #5F6B7A !important;
    font-weight: 700 !important;
    border: 1px solid #EAF1F2 !important;
  }

  .v-data-table tbody tr td {
    height: 32px !important;
    color: #364153 !important;
    font-weight: 500 !important;
    border: 1px solid #EAF1F2 !important;

  }

  td.v-data-table__td.v-data-table-column--align-center {
    font-size: 12px !important;
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

  .custom-pagination .v-pagination__item {
    border-radius: 12px !important;
    min-width: 36px !important;
    height: 36px !important;
    font-size: 14px !important;
    color: #5B6176 !important;
    border: 1px solid #AEB2C0 !important;
  }

  .custom-pagination .v-pagination__item--active {
    border-radius: 12px !important;
    min-width: 36px !important;
    height: 36px !important;
    background-color: #B8DADA !important;
    color: #148976 !important;
    border: 1px solid #148976 !important;
    font-weight: bold !important;
    box-shadow: none !important;
  }

  button.v-btn.v-btn--icon.v-theme--light.text-primary.v-btn--density-comfortable.v-btn--rounded.v-btn--size-default.v-btn--variant-text {
    border-radius: 12px !important;
  }

  .custom-pagination .v-pagination__prev,
  .custom-pagination .v-pagination__next {
    border-radius: 12px !important;
    background-color: #F6F8FA !important;
    color: #AEB2C0 !important;
    border: 1px solid #AEB2C0 !important;
  }

  .custom-pagination .v-pagination__item--active,
  .custom-pagination .v-pagination__item:focus,
  .custom-pagination .v-pagination__item:hover {
    border-radius: 12px !important;
    min-width: 36px !important;
    height: 36px !important;
    background-color: #D8EEF2 !important;
    color: #148976 !important;
    border: 1px solid #148976 !important;
    font-weight: bold !important;
  }

  .footer-middle {
    font-size: 14px;
    color: #5F6B7A;
    font-weight: 500;
  }
</style>