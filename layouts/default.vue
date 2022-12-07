<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        plain
        to="/"
      >
        Главная
      </v-btn>
      <v-btn
        plain
        to="/login"
        v-if="!isLoggedIn"
      >
        Вход
      </v-btn>
      <v-btn
        plain
        to="/orders"
        v-if="isLoggedIn"
      >
        Заказы
      </v-btn>
      <v-btn
        plain
        to="/grafic"
        v-if="isLoggedIn"
      >
        Диаграммы
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Диета18'
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }

}
</script>
