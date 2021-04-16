<template>
  <div class="container-fluid">
    <div class="row conteiner-fluid justify-content-between">
      <div class="col-4">
        <img class="graph1" src="@/assets/images/Group 44.svg" alt="" />
      </div>
      <div class="col-4">
        <table class="table table1 table-borderless border-right">
          <thead>
            <tr>
              <th class="coin-img thh" scope="col">
                <img src="@/assets/images/tether.svg" alt="" />
              </th>
              <td class="coins tdd">Tether</td>
              <td class="table-rights tdd">35%</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="coin-img thh" scope="col">
                <img src="@/assets/images/bitcoin.svg" alt="" />
              </th>
              <td class="coins tdd">Bitcoin</td>
              <td class="table-rights tdd">50%</td>
            </tr>
            <tr>
              <th class="coin-img thh" scope="col">
                <img src="@/assets/images/ethereum.svg" alt="" />
              </th>
              <td class="coins tdd">Ethereum</td>
              <td class="table-rights tdd">5%</td>
            </tr>
            <tr>
              <th class="coin-img thh" scope="col">
                <img src="@/assets/images/50s.svg" alt="" />
              </th>
              <td class="coins tdd">Fifty Token</td>
              <td class="table-rights tdd">10%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <Pie
          :label="'MyCoins'"
          :chartData="myBalances"
          :options="chartOptions"
          :bgColor="'#F7D51B'"
        ></Pie>
      </div>
    </div>
    <div class="conteiner-fluid d-flex justify-content-between col">
      <table class="table table2 table-striped table-dark" v-if="myBalances">
        <thead>
          <tr>
            <th class="table-title2 thh" scope="col"></th>
            <th class="table-title2 td-coin thh" scope="col">Name</th>
            <th class="table-title2 thh" scope="col">Amount(Available)</th>
            <th class="table-title2 thh" scope="col">Price($)</th>
            <th class="table-title2 thh" scope="col">Total($)</th>
            <th class="table-title2 thh" scope="col">All Time P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coin in myBalances" :key="coin.id">
            <th class="thh" scope="row">
              <img :src="coin.status.img" alt="" style="max-height: 50px;"/>
            </th>
            <td class="td-coin tdd">{{ coin.name }}</td>
            <td class="tdd">{{ coin.status.available }}</td>
            <td class="tdd">$ {{ Number(coin.status.price) }}</td>
            <td class="tdd"> $ {{ coin.total }}</td>
            <td class="pl-red tdd">
              -$ 100.00 <img src="@/assets/images/Polygon 2.svg" alt="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Pie from "./Chart/Pie";
export default {
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 20,
      },
      totalDollar: 0,
    };
  },
  methods: {
    ...mapActions("Binance", ["getMyCurrency"]),
  },

  components: { Pie },
  computed: {
    ...mapGetters("Binance", { myBalances: "getMyBalance" }),
  },
};
</script>

<style>
</style>