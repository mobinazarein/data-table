<template>
  <v-container fluid>
    <v-row class="align-center py-3 px-5" no-gutters>
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
        <v-btn variant="outlined" color="gray" class="rounded-lg ml-2">همه</v-btn>
        <v-btn variant="outlined" color="gray" class="ml-2 rounded-lg">ابطال شده</v-btn>
        <v-btn variant="outlined" color="gray" class="ml-2 rounded-lg">وصل شده</v-btn>
      </v-col>
      <v-col cols="auto" class="d-flex align-center">
        <v-btn icon variant="flat" color="green" class="btn-square">
          <v-icon>mdi-microsoft-excel</v-icon>
        </v-btn>
        <v-btn icon variant="flat" color="blue" class="ml-2 btn-square">
          <v-icon>mdi-printer</v-icon>
        </v-btn>
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
</script>

<style>
.custom-text-field :deep(.v-input__control) {
  height: 38px;
  border-radius: 30px !important;
}

.v-field.v-field--center-affix.v-field--prepended.v-field--variant-outlined.v-theme--light.v-locale--is-rtl {
  border-radius: 12px !important;
}
</style>