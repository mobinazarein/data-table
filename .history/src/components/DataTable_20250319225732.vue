<template>
  <v-container fluid>
    <v-row class="align-center py-3 px-5" no-gutters>
      <v-col cols="12" md="2" class="d-flex align-center">
        <PauseIcon />
        <h2 class="mr-3">سوابق فیش</h2>
      </v-col>
      <v-col cols="12" md="5" class="d-flex align-center justify-md-end justify-start">
        <PaginationIcon class="mx-2" />
        <EyeIcon class="mx-2" />
        <InvoiceIcon class="mx-2" />
        <CircleCross class="mx-2" />
        <FilterIcon class="mx-2" />
        <v-text-field variant="outlined" density="compact" hide-details rounded="pill" class="custom-text-field mx-3"
          placeholder="جستجو کنید..." prepend-inner-icon="mdi-magnify" />
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

<style scoped>
.custom-text-field :deep(.v-input__control) {
  height: 38px;
}
</style>