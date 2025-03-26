<template>
    <DataTable :headers="pageData.headers" :items="pageData.items" :showExportButtons="true" :itemsPerPage="20"
        :showSearchBtn="true" :items-per-page="10" :customStyles="[
            { key: 'row', bgColor: '#FFEEF0', textColor: '#DC3545' },
            { key: 'documentNumber', bgColor: '#E4EFFF', textColor: '#013075', icon: 'mdi-eye', iconColor: '#013075', iconSize: '18px' },
            { key: 'receiptType', bgColor: '#FFBE4C26', textColor: '#FFBE4C' }
        ]" title="سوابق فیش" :iconComponent="PauseIcon"
        :iconList="[PaginationIcon, EyeIcon, InvoiceIcon, CircleCross, FilterIcon]"
        :mobileIconList="[PaginationIcon, EyeIcon, InvoiceIcon, CircleCross, FilterIcon, PrinterIcon, ExcelIcon]"
        :buttons="pageData.buttonList" :mobileFilterButtons="pageData.mobileBtn" :actions="actions" />
</template>
<script setup>
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

</script>