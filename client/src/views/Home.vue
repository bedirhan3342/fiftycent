<template>
  <div class="home">
    <Header/>
    <MainPage/>
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <FifthPage/>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue'
import SecondPage from "@/components/SecondPage"
import ThirdPage from "@/components/ThirdPage"
import FourthPage from "@/components/FourthPage"
import FifthPage from "@/components/FifthPage"
import Header from "@/components/Header.vue"
import {mapActions} from "vuex"
export default {
  name: 'Home',
  components: {
    MainPage,
    Header,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage
    
  },
    methods:{
    ...mapActions('Binance',['getMyBalance','getMyAccount']),
    ...mapActions('BSScan',['getMyBSBalance'])
  },  
  async mounted(){
    await this.getMyBalance();
    await this.getMyAccount();
    await this.getMyBSBalance();
  }
}
</script>
<style scoped>

</style>
