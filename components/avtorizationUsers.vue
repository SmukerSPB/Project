<template>
    <v-card>
      <v-card-title>Авторизация пользователя в системе</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <!--Описание текстового поля Логин-->
          <v-text-field
            v-model="login"
            :rules="loginRules"
            label="Login"
            placeholder="Ваш логин"
            required
            type="text"
          />
          <!--        Описание текстового поля Пароль-->
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :counter="true"
            label="Пароль"
            required
            type="password"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          :disabled="!valid"
          color="green"
          @click="onLogin"
        >
          Авторизация
        </v-btn>
      </v-card-actions>
    </v-card>
</template>

<script>
export default {
  name: "avtorizationUsers",

  data:()=>({
    valid: false,
    login:"",
    password:"",
    loginRules:[
      login=>!!login || 'Поле логин не заполнено'
    ],
    passwordRules:[
      password=>!!password || 'Поле пароль не заполнено'
    ],
  }),

  methods:{
    onLogin() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("Avtorizate", {
          login: this.login,
          password: this.password
        }).then(() => {
          this.$router.push("/")
        }).catch((e) => {
          console.log(e)
          this.$router.push("/")
        })
      }
    },
  },

}
</script>

