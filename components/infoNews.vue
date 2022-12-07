<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <h1>Новостная лента</h1>
      </div>

      <div class="news_container">
        <div class="news_header">
          <h2>Новость: Новый сотрудник</h2>
        </div>

        <div class="news_content">
          <div class="text">
            <p>
              Мы рады приветсвовать в нашем коллективе нового сотрудника - Смирнова Юрия Константтиновича.
              Желаем пладотворной работы и успехов в команде
            </p>
          </div>
          <div class="photos">

          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "infoNews"
}
</script>

<style>
.news_container {
  display: flex;
  width: 800px;
  flex-direction: column;
  margin: 20px auto;
  border: 3px solid black;
  border-radius: 10px;
}

.news_header {
  padding: 10px;
}

.news_content {
  margin: 10px
}

.news_content.text {
  margin: 10px
}
</style>

