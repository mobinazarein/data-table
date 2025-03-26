<template>
    <div>
        <v-row no-gutters justify="center">
            <v-col class="mt-3">
                <v-tabs v-model="tab" align-tabs="center">
                    <v-tab v-for="item in pageData.items" :key="item.value" @click="goToTab" class="px-10"
                        style="border-left: 1px solid #ADB0B41A;">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
</script>
