<template>
  <v-app>
    

    
    <v-app-bar 
      app 
      flat 
      class="navBar"
      color="#2c6785"
      height="100"
    >
      <v-toolbar-title>
        <g-link style="color:#fff;" to='/' > Guia Cidadão </g-link>
      </v-toolbar-title>

       
      <v-text-field 
        v-model="searchText"
        @click:clear="searchText = ''"
        placeholder="O que você procura?" 
        class="ml-8"
        style="max-width: 350px; background-color: #488ba6; color:#FFF;"
        prepend-inner-icon="mdi-magnify"
        outlined
        clearable
        rounded
        dense
        hide-details
        color="#FFF"
      />
      
      <v-spacer />
      
      <img style="height:80px;" src="https://cdn.es.gov.br/images/logo/governo/brasao/right-white/Brasao_Governo_240.png" />

    </v-app-bar>
    <v-main >
        <slot :searchText="searchText" />
    </v-main>
    <v-footer style="background-color:#93565A; color:#E6E6E6; padding: 0px; margin-top:50px">
      <p style="padding:50px 50px 25px 50px"><b>GOVERNO DO ESTADO DO ESPÍRITO SANTO (GOVERNO ES)</b><br/>
      Praça João Clímaco, 142 - Cidade Alta, Centro<br/>
      CEP: 29018-110 - Vitória / ES<br/>
      Tel.: (27) 3636-1024</p>
      <p style="background-color:#CCC; color:#4D4D4D; width:100%; padding: 10px; margin:0px; text-align:center; font-size:15px">2021 / Desenvolvido pelo grupo Error 404 no primeiro Hackathon Cibercidadão organizado pelo PRODEST.</p>
    </v-footer>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
export default{
  data(){
    return{
      searchText: ''
    }
  }
}
</script>


<style scoped>
.v-toolbar__title a {
  text-decoration: none;
  color: #000;
}
</style>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.navBar {
  background-color: #2c6785;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
