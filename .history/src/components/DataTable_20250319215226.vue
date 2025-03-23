<template>
  <v-row no-gutters class="pa-5">
    <v-col cols="12" md="12">
      <v-row no-gutters>
        <v-col cols="12" md="12" class="d-md-flex align-center">
          <v-col cols="12" md="3" class="d-flex align-center ">
            <PauseIcon />
            <h2 class="mr-5">سوابق فیش</h2>
          </v-col>
          <v-col cols="12" md="3">
            <PaginationIcon />
          </v-col>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import PauseIcon from '../assets/Icons/PauseIcon.vue';
import PaginationIcon from '@/assets/Icons/PaginationIcon.vue';
</script>