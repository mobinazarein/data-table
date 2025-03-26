<template>
    <div>
        <v-row no-gutters justify="center">
            <v-col class="mt-3">
                <v-tabs v-model="tab" align-tabs="center">
                    <v-tab v-for="item in pageData.items" :key="item.value" @click="goToTab(item.link)" class="px-10 "
                        style="border-left: 1px solid #ADB0B41A;">
                        {{ item.title }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const tab = ref(0);
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

const goToTab = (link) => {
    router.push(`/${link}`);
};
</script>
<style>
button.v-btn.v-tab-item--selected.v-tab--selected.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-text.v-tab.px-10:hover,
button.v-btn.v-tab-item--selected.v-tab--selected.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-text.v-tab.px-10:active,
button.v-btn.v-tab-item--selected.v-tab--selected.v-theme--light.v-btn--density-default.v-btn--size-default.v-btn--variant-text.v-tab.px-10:focus {
    background: linear-gradient(45deg, #148976, #117363);
    color: white;
    border-radius: 7px;
    height: 46px;
    margin-bottom: 20px;
}
</style>