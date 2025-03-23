<template>
  <v-row no-gutters>
    <v-col cols="12" md="12">
      <v-row no-gutters>
        <v-col cols="12" md="12" class="d-md-flex align-center pa-5">
          <v-col cols="12" md="2" class="d-flex align-center">
            <PauseIcon />
            <h2 class="mr-5">سوابق فیش</h2>
          </v-col>
          <v-col class="mr-8" cols="12" md="5">
            <PaginationIcon class="mt-3" />
            <EyeIcon />
            <InvoiceIcon />
            <CircleCross class="mb-3 mr-3" />
            <FilterIcon />
            <v-text-field variant="outlined" density="compacted" label="جستجو کنید..."></v-text-field>
          </v-col>
          <!-- <div class="d-flex align-center">

      </div> -->
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import PauseIcon from '../assets/Icons/PauseIcon.vue';
import PaginationIcon from '@/assets/Icons/PaginationIcon.vue';
import EyeIcon from '@/assets/Icons/EyeIcon.vue';
import InvoiceIcon from '@/assets/Icons/InvoiceIcon.vue';
import CircleCross from '@/assets/Icons/CircleCross.vue';
import FilterIcon from '@/assets/Icons/FilterIcon.vue';
</script>