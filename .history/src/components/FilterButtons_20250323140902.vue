<template>
    <v-row class="align-center py-3 px-5 d-none d-md-flex" no-gutters>
        <div class="filter-buttons">
            <v-btn v-for="(filter, index) in filters" :key="index" variant="outlined" color="gray" class="filter-btn">
                {{ filter.label }}
            </v-btn>
        </div>
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