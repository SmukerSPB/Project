<template>
  <v-container>
    <h1>Вход</h1>
    <v-form
      ref="form"
      v-model="valid"
    >
      <v-text-field
        v-model="login"
        :rules="loginRules"
        label="Login"
        required
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Пароль"
        counter
        required
        type="password"
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        color="success"
        @click="onLogin"
      >
        Вход
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    login: '',
    loginRules: [
      v => !!v || 'Поле login обязательное',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Поле пароль обязательное',
    ],
  }),

  methods: {
    onLogin () {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("loginUser", {
          login: this.login,
          password: this.password
        }).then(() => {
          this.$router.push("/orders")
        }).catch((e) => {
          console.log(e)
          this.$router.push("/")
        })
      }
    },
  },
}
</script>

<style scoped>

</style>
