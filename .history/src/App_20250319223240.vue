<template>
  <v-app dir="rtl">
    <v-main dir="rtl">
      <div dir="rtl">
        <DataTable />
      </div>
    </v-main>
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
