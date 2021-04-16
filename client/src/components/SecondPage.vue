<template>
  <div class="rectangle conteiner-fluid d-flex justify-content-between row">
        <div class="col">
            <p class="title text-center">Returns</p>
            <hr class="hr">
            <div class="rectangle2 conteiner-fluid d-flex justify-content-between row">
                <table class="table table-striped table-dark border-dark border-bottom border-left border-right ">
                    <thead>
                        <tr>
                            <th class="th" scope="col">Year</th>
                            <th class="table-title th" scope="col">Market</th>
                            <th class="table-title th" scope="col">Portfolio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="th" scope="row">2019</th>
                            <td class="td-green td">10 %</td>
                            <td class="td-red td">-10 %</td>

                        </tr>
                        <tr>
                            <th class="th" scope="row">2020</th>
                            <td class="td-green td">15 %</td>
                            <td class="td-red td">-6 %</td>

                        </tr>
                        <tr>
                            <th class="th" scope="row">2021</th>
                            <td class="td-green td">20 %</td>
                            <td class="td-red td">12 %</td>

                        </tr>
                        <tr>
                            <th class="th" scope="row">Yearly Avarage</th>
                            <td class="td-green td">25 %</td>
                            <td class="td-green td">21 %</td>

                        </tr>
                        <tr>
                            <th class="th" scope="row">Overall (x days)</th>
                            <td class="td-green td">100 %</td>
                            <td class="td-green td">500 %</td>

                        </tr>
                    </tbody>
                </table>
                <div class="col-12 conteiner-fluid d-flex justify-content-between">
                    <p class="title mx-auto">Overall</p>
                    <p class="title mx-auto">Ratios</p>
                </div>
                <div class="col tablo1">
                    <table class="table table-striped table-dark border-dark border-bottom border-left border-right ">
                        <thead>
                            <tr>
                                <th class="th" scope="col">Starting Overall</th>
                                <th class="th" scope="col">$ 21,000</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="th" scope="row">Min. Overall</th>
                                <td class="td">% 17,000</td>
                            </tr>
                            <tr>
                                <th class="th" scope="row">Max. Overall</th>
                                <td class="td">% 143,530</td>
                            </tr>
                            <tr>
                                <th class="th" scope="row">Closing Overall</th>
                                <td class="td">% 92,634</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col tablo2">
                    <table class="table table-striped table-dark border-dark border-bottom border-left border-right ">
                        <thead>
                            <tr>
                                <th class="th" scope="col">Profit Factor</th>
                                <th class="th" scope="col">6,73</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="th" scope="row">Payout Ratio</th>
                                <td class="td">8,04</td>
                            </tr>
                            <tr>
                                <th class="th" scope="row">CPC Index</th>
                                <td class="td">23,45</td>
                            </tr>
                            <tr>
                                <th class="th" scope="row">Expectancy</th>
                                <td class="td">404%</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>