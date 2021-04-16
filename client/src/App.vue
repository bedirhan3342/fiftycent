<template>
  <body>
    <div id="app">
      <router-view />
    </div>
  </body>
</template>

<script>
export default {
  async mounted() {},
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 100%;
  background: #1c1c1c;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #2c3e50;
}
a .router-link-exact-active {
  color: #42b983;
}


.conteiner-fluid {
    background: #1c1c1c;
}

.logo {
    margin: 0 -40px 0px 0;
    padding: 9px 0px 0px 5px;
}

.buy-token {
    width: 248px;
    height: 51px;
    margin: 45px 7px 49.5px 220px;
    padding: 9px 52px 8px 53px;
    box-shadow: 0 0 10px 0 rgba(242, 169, 0, 0.5);
    border: solid 3px #f2a900;
}

.buy-token .btn-text {
    width: 143px;
    height: 34px;
    font-family: sans-serif;
    font-size: 27px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.collect-wallet {
    width: 248px;
    height: 51px;
    margin: 45px 22px 50.5px 32px;
    padding: 9px 22px 8px 23px;
    border-radius: 11px;
    box-shadow: 0 0 10px 0 rgba(0, 220, 255, 0.5);
    border: solid 3px #00dcff;
}

.collect-wallet .btn-text {
    width: 143px;
    height: 34px;
    font-family: sans-serif;
    font-size: 27px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.rectangle-button .btn-text {
    width: 143px;
    height: 34px;
    font-family: sans-serif;
    font-size: 27px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.13;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.rectangle-button {
    width: 51px;
    height: 51px;
    margin: 45px 20px 0px 0px;
    padding: 0px 5px 4px 6px;
    border-radius: 11px;
    box-shadow: 4px 4px 7px 0 #000000;
    background-color: #171717;
}

.performance {
    width: 350px;
    height: 50px;
    margin: 86px 130.5px 0px 0px;
    font-family: sans-serif;
    font-size: 45px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.hr {
    width: 100%;
    height: 0;
    border: solid 2px #707070;

}

.rectangle {
    margin: 50.5px 113px 34.2px 113px;
    padding: 12px 64.5px 51px;
    border-radius: 11px;
    box-shadow: 0 0 15px 0 #000000;
    background-color: #171717;
}

.rectangle2 {
    padding: 25px 45px 25px 54px;
    border-radius: 11px;
    box-shadow: 0 0 5px 0 #000000;
    background-color: #1c1c1c;
}

.title {
    font-family: sans-serif;
    font-size: 35px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    color: #ffffff;
}

.table {
    background: #131313;
}

.th {
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #9c9c9c;
}

.td {
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #9c9c9c;
    text-align: center;
}

.td-green {
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #00ff80;
}

.td-red {
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #d81256;
}


.table-title{
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #9c9c9c;
    text-align: center;
}

.tablo1 {
    padding-right: 0px;
    padding-left: 0px;
}

.tablo2 {
    margin-right: 0px;
    padding-right: 0px;
}

.thh {
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.12;
    color: #9c9c9c;
}

.tdd {
    font-family: sans-serif;
    font-size: 30px;
    line-height: 1.8;
    color: #9c9c9c;
    text-align: center;
}

.portfolio {
    font-family: sans-serif;
    font-size: 25px;
    line-height: 1.12;
    color: #9c9c9c;
    text-align: center;
}

.pl-red {
    font-family: sans-serif;
    font-size: 30px;
    line-height: 1.8;
    color: #d81256;
}

.pl-green {
    font-family: sans-serif;
    font-size: 30px;
    line-height: 1.8;
    color: #00ff80;
}

.graph2 {
    width: 603px;
    height: 153.9px;
    margin: 10px 10px 10px 10px;
    padding: 15px 40px 20px 56px;
}

.graph1 {
    width: 350px;
    height: 250.6px;
    margin: 0px 0px 0px 50px;
}

.coins {
    font-family: sans-serif;
    font-size: 30px;
    color: #9c9c9c;
    text-align: left;
}

.table-rights {
    font-family: sans-serif;
    font-size: 30px;
    color: white;
    text-align: left;
}

.coin-img {
    width: 20px;
    text-align: left;
}

.table1 td,
.table1 th {
    padding: 0.3rem;
}

.table2 {
    background: #131313;
    margin: 50px 50px 50px 50px;
}
.table2 td,
.table2 th {
    font-size: 20px;
    text-align: left;
}

.table1 {
    background: #1c1c1c;
}

.trades {
    width: 350px;
    height: 50px;
    margin: 86px 130.5px 0px 0px;
    font-family: sans-serif;
    font-size: 39px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.tth {
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.12;
    color: #9c9c9c;
}

.ttd {
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.12;
    color: #9c9c9c;
    text-align: center;
}

.buy {
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.12;
    color: #00ff80;
}

.sell{
    font-family: sans-serif;
    font-size: 15px;
    line-height: 1.12;
    color: #d81256;
}
</style>
