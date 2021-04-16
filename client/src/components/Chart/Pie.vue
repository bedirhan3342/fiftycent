
<script>
import { Pie } from "vue-chartjs";
export default {
  extends: Pie,
  props: {
    label: { type: String },
    chartData: { type: Array },
    options: { type: Object },
    bgColor: { type: String },
  },
  async mounted() {
    let labels = await this.chartData.filter((p) =>{
        if(p.status.available>10){
          return  p.name;
        }
    });
    let dataset = await this.chartData.map((p) => {
      if (p.status.available > 10) {
        return {
          label: "Coin",
          backgroundColor: [
            "#41B883",
            "#E46651",
            "#00D8FF",
            "#41B883",
            "#E46651",
          ],
          data: p.status.available,
        };
      }
      return;
    });
    const newDataset=dataset.filter(p=>p!=undefined)
    console.log(newDataset)
    const data = {
      hoverBackgroundColor: "red",
      hoverBorderWidth: 10,
      labels: labels,
      datasets: newDataset
    };

 
         this.renderChart(data, this.options);
 
  },
};
</script>

<style>
</style>