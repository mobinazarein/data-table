<template>
    <div>
        <v-row no-gutters justify="center">
            <v-col class="mt-3">
                <v-tabs v-model="tab" align-tabs="center">
                    <v-tab v-for="item in pageData.items" :key="item.value" :to="{ name: item.link }" class="px-10"
                        style="border-left: 1px solid #ADB0B41A;">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const tab = ref(0); // مقدار پیش‌فرض

const pageData = {
    items: [
        { title: "محاسبه", value: 0, link: "calculation" },
        { title: "سوابق", value: 1, link: "history" },
        { title: "کیف نوسازی", value: 2, link: "renewal-bag" },
        { title: "انتقال فیش", value: 3, link: "transfer-check" },
        { title: "فیش علی الحساب", value: 4, link: "advance-check" },
        { title: "آرای کمسیون77", value: 5, link: "commission-77" },
        { title: "قرارداد های پسماند", value: 6, link: "waste-contracts" },
    ],
};

// همگام‌سازی مقدار `tab` با `route.name`
watch(
    () => route.name,
    (newRoute) => {
        nextTick(() => {  // اطمینان از اینکه مسیر تغییر کرده است
            if (newRoute) {  // چک می‌کنیم که `newRoute` مقدار داشته باشه
                const currentTab = pageData.items.find((item) => item.link === newRoute);
                tab.value = currentTab ? currentTab.value : 0;
            }
        });
    },
    { immediate: true } // مقدار اولیه تنظیم بشه
);
</script>
