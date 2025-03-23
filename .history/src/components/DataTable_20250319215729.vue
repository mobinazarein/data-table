<template>
  <v-row no-gutters>
    <v-col cols="12" md="12">
      <v-row no-gutters>
        <v-col cols="12" md="12" class="d-md-flex align-center pa-5">
          <div class="d-flex align-center">
            <PauseIcon />
            <h2 class="mr-5">سوابق فیش</h2>
          </div>
          <div class="mr-10">
            <PaginationIcon class="mt-3" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import PauseIcon from '../assets/Icons/PauseIcon.vue';
import PaginationIcon from '@/assets/Icons/PaginationIcon.vue';
</script>