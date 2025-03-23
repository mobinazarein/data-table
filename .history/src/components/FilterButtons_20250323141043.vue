<template>
    <v-row class="align-center py-3 px-5 d-none d-md-flex" no-gutters>
        <div class="filter-buttons">
            <v-btn v-for="(filter, index) in filters" :key="index" variant="outlined" color="gray" class="filter-btn">
                {{ filter.label }}
            </v-btn>
        </div>
    </v-row>
    <v-row class="align-center d-flex d-md-none flex-no-wrap justify-between ">
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
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    filters: {
        type: Array,
        required: true,
    },
});
</script>

<style scoped>
.filter-buttons {
    display: flex;
    gap: 8px;
}

.filter-btn {
    font-size: 14px;
    font-weight: 400;
    border-radius: 8px;
}

@media (max-width: 960px) {
    .filter-btn {
        height: 40px !important;
        font-size: 12px !important;
        font-weight: 400 !important;
        border-radius: 20px !important;
    }
}
</style>