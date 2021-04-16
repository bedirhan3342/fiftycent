import axios from "axios";
import Vue from "vue"


export default ()=>{
    const axiosInstance=axios.create({
        baseURL:"/api"
    })

     axiosInstance.defaults.headers.common['X-MBX-APIKEY']='fAtKamnruwPgW5MMQHxxclriK2OYHwBAMv8nsxpitRvu4EHPKeYLo7LTEU42PQB3'
    // axiosInstance.defaults.headers.common['binance-api-secret']= 'qPRgXr5EkrzNnvYE0SQVmlnqAyLDEFsJjBVpoB7NlCxLCAR2lPCqXM4LiwRs3SAz',
    // axiosInstance.defaults.headers.common={
    //     'access_token':'fAtKamnruwPgW5MMQHxxclriK2OYHwBAMv8nsxpitRvu4EHPKeYLo7LTEU42PQB3',
    //     'secretKey':'qPRgXr5EkrzNnvYE0SQVmlnqAyLDEFsJjBVpoB7NlCxLCAR2lPCqXM4LiwRs3SAz',
      
    // }
    Vue.use(axiosInstance);
    return axiosInstance;
}
