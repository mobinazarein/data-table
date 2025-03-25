<template>
  <v-app dir="rtl">
    <v-locale-provider :rtl="true">
      <div dir="rtl">
        <DataTable :showExportButtons="true" :itemsPerPage="20" :showSearchBtn="true" />
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
<style></style>
