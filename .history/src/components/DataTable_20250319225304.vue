<template>
  <v-row no-gutters class="align-center pa-2">
    <v-col cols="auto" class="text-right">
      <h3 class="font-weight-bold">سوابق فیش</h3>
    </v-col>
    <v-col cols="auto" class="d-flex align-center mx-auto">



      <v-btn icon variant="text" class="ml-2">
        <v-icon>mdi-filter</v-icon>
      </v-btn>
      <v-btn icon variant="text" class="ml-2">
        <v-icon>mdi-close-circle-outline</v-icon>
      </v-btn>
      <v-btn icon variant="text" class="ml-2">
        <v-icon>mdi-file-document-outline</v-icon>
      </v-btn>
      <v-btn icon variant="text" class="ml-2">
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn icon variant="text" class="ml-2">
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
      <v-text-field variant="outlined" rounded="pill" label="جستجو کنید..." prepend-inner-icon="mdi-magnify" dense
        class="ml-4" style="max-width: 200px;">
      </v-text-field>
      <v-btn variant="tonal" color="teal" class="rounded-pill px-4">همه</v-btn>
      <v-btn variant="outlined" color="gray" class="ml-2 rounded-pill">ابطال شده</v-btn>
      <v-btn variant="outlined" color="gray" class="ml-2 rounded-pill">وصل شده</v-btn>

    </v-col>
    <!-- دکمه‌های اکسل و پرینت -->
    <v-col cols="auto" class="d-flex align-center">
      <v-btn icon variant="flat" color="green">
        <v-icon>mdi-microsoft-excel</v-icon>
      </v-btn>
      <v-btn icon variant="flat" color="blue" class="ml-2">
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </v-col>

    <!-- فیلترها و جستجو -->


    <!-- عنوان سمت راست -->

  </v-row>
</template>

<style scoped>
.v-field__input {
  height: 38px;
}
</style>