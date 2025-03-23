<template>
  <v-app dir="rtl">
    <!-- <v-main dir="rtl"> -->
    <v-locale-provider :rtl="true">
      <div dir="rtl">
        <DataTable />
      </div>
      <!-- </v-main> -->
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
