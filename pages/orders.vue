<template>
  <v-container>
    <v-data-table
      :headers="dessertHeaders"
      :items="desserts"
      :expanded.sync="expanded"
      item-key="title"
      show-expand
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Заказы на открузку</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </template>
      <template v-slot:expanded-item="{ headers, item }">
        <td :colspan="headers.length">
          <template>
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Номенклатура
                  </th>
                  <th class="text-left">
                    Количество
                  </th>
                  <th class="text-left">
                    Цена
                  </th>
                  <th class="text-left">
                    Сумма
                  </th>
                  <th class="text-left">
                    Время
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for="product in item.detail"
                  :key="product.name"
                >
                  <td>{{ product.name }}</td>
                  <td>{{ product.count }}</td>
                  <td>{{ product.price }}</td>
                  <td>{{ product.summ }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "orders",
  async asyncData( { $axios, store}) {
    try {
      const user = store.getters.login
      const password = store.getters.password

      let { data } = await $axios.get('http://192.168.131.128/Win1C/hs/nuxt/v1/orders/', {
        credential: true,
        auth: {
          username: user,
          password: password
        }
      })
      return { desserts: data }
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      expanded: [],
      dessertHeaders: [
        {
          text: 'Заказ',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Сумма', value: 'summ' },
        { text: 'Склад', value: 'sklad' },
        { text: 'Менеджер', value: 'manager' },
        { text: 'Статус', value: 'status' },
        { text: 'Время', value: 'time' },

      ],
      desserts: [],
    }
  },
}
</script>

<style scoped>

</style>
