<template>
  <v-app dir="rtl">
    <v-locale-provider :rtl="true">
      <div dir="rtl">
        <DataTable :showExportButtons="true" :itemsPerPage="20" :showSearchBtn="true" :items-per-page="10"
          :customStyles="[
            { key: 'row', bgColor: '#FFEEF0', textColor: '#DC3545' },
            { key: 'documentNumber', bgColor: 'blue', textColor: 'white' },
            { key: 'receiptStatus', bgColor: '#E0F7FA', textColor: '#006064' },
            { key: 'receiptType', bgColor: '#FFBE4C26', textColor: '#FFBE4C' }
          ]" />
      </div>
    </v-locale-provider>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable.vue';
export default {
  name: 'App',

  components: {
    DataTable,
  },

  data: () => ({
    //
  }),
}
</script>
<style>
body {
  font-family: "IRANSans", sans-serif;
}
</style>
