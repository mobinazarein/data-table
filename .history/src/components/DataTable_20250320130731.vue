<template>
  <v-container fluid>
    <!-- desktop -->
    <v-row class="align-center py-3 px-5 d-none d-md-flex" no-gutters>
      <v-col cols="12" md="2" class="d-flex align-center">
        <PauseIcon />
        <h2 class="mr-3">سوابق فیش</h2>
      </v-col>
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
    <!-- mobile-->
    <v-row class="align-center d-flex d-md-none flex-no-wrap justify-between ">
      <v-col cols="12" class="d-flex align-center flex-no-wrap">
        <v-col cols="4">
          <h2 class="text-nowrap" style="font-size: 14px; font-weight: 700;">سوابق فیش</h2>
        </v-col>
        <v-col cols="8" class="d-flex">
          <v-btn variant="outlined"
            style="width: 44px !important;height: 40px !important;font-size: 12px;font-weight: 400;" color="gray"
            class="rounded-xl ml-2 filter-btn">همه</v-btn>
          <v-btn variant="outlined"
            style="width: 77px !important;height: 40px !important;font-size: 12px;font-weight: 400" color="gray"
            class="ml-2 rounded-xl filter-btn">ابطال شده</v-btn>
          <v-btn variant="outlined" color="gray" class=" rounded-xl filter-btn"
            style="width: 81px !important;height: 40px !important;font-size: 12px;font-weight: 400">وصول شده</v-btn>
        </v-col>
      </v-col>
      <v-col cols="12" class="d-flex justify-center gap-2 mt-2 flex-wrap">
        <PaginationIcon class="mx-1" />
        <EyeIcon class="mx-1" />
        <InvoiceIcon class="mx-1" />
        <CircleCross class="mx-1" />
        <FilterIcon class="mx-1" />
        <PrinterIcon iconColor="#767E8A" class="mx-1" />
        <ExcelIcon iconColor="#767E8A" class="mx-1" />
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
</style>