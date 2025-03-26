<template>
  <v-app dir="rtl">
    <v-locale-provider :rtl="true">
      <div dir="rtl">
        <TopHeader />
        <DataTable :headers="pageData.headers" :items="pageData.items" :showExportButtons="true" :itemsPerPage="20"
          :showSearchBtn="true" :items-per-page="10" :customStyles="[
            { key: 'row', bgColor: '#FFEEF0', textColor: '#DC3545' },
            { key: 'documentNumber', bgColor: '#E4EFFF', textColor: '#013075', icon: 'mdi-eye', iconColor: '#013075', iconSize: '18px' },
            { key: 'receiptType', bgColor: '#FFBE4C26', textColor: '#FFBE4C' }
          ]" title="سوابق فیش" :iconComponent="PauseIcon"
          :iconList="[PaginationIcon, EyeIcon, InvoiceIcon, CircleCross, FilterIcon]"
          :mobileIconList="[PaginationIcon, EyeIcon, InvoiceIcon, CircleCross, FilterIcon, PrinterIcon, ExcelIcon]"
          :buttons="pageData.buttonList" :mobileFilterButtons="pageData.mobileBtn" :actions="actions" />
      </div>
    </v-locale-provider>
  </v-app>
</template>

<script setup>
import TopHeader from './layouts/TopHeader.vue';
import DataTable from './components/DataTable.vue';
import PauseIcon from './assets/Icons/PauseIcon.vue';
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
    { title: 'ردیف محاسبه', key: 'row', align: 'center', sortable: true, width: '121px' },
    { title: 'شماره سند', key: 'documentNumber', align: 'center', sortable: true, width: '165px' },
    { title: 'وصول فیش', key: 'receiptStatus', align: 'center', sortable: true, width: '139px' },
    { title: 'تاریخ محاسبه', key: 'calculationDate', align: 'center', sortable: true, width: '159px' },
    { title: 'مبلغ', key: 'amount', align: 'center', sortable: true, width: '139px' },
    { title: 'مدت زمان', key: 'duration', align: 'center', sortable: true, width: '165px' },
    { title: 'تاریخ تسویه', key: 'settlementDate', align: 'center', sortable: true, width: '139px' },
    { title: 'کاربر محاسب', key: 'user', align: 'center', sortable: true, width: '139px' },
    { title: 'نوع فیش', key: 'receiptType', align: 'center', sortable: true, width: '139px' },
    // { title: 'عملیات', key: 'actions', align: 'center', sortable: true, width: '139px' }
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
      receiptType: 'علی الحساب',
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
    }, {
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
  ],
  buttonList: [
    { label: 'همه', width: 48 },
    { label: 'ابطال شده', width: 87 },
    { label: 'وصول شده', width: 92 },
  ],
  mobileBtn: [
    { label: "همه", width: 44, borderRadius: 62 },
    { label: "ابطال شده", width: 80, borderRadius: 42 },
    { label: "وصول شده", width: 89, borderRadius: 42 }
  ]
}).value;
const actions = [
  { icon: 'mdi-pencil', method: editItem },
  { icon: 'mdi-delete', method: deleteItem },
];
function editItem() {
  console.log('edit');
}
function deleteItem() {
  console.log('delete');

}
</script>
<style>
body {
  font-family: "IRANSans", sans-serif;
}
</style>
