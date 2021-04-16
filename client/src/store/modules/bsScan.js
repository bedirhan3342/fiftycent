import API from "@/services/BinanceApi"

const state={
    myBSBalance:[],
}

const getters={
    getMyBSBalance(state){
        return state.myBalance;
    },
  
}

const mutations={
    SET_MYBSBALANCE(state,value){
        state.myBalance=value;
    },
  
}

const actions={
    async getMyBSBalance({commit}){
        try {
            const data=await API().get("/single-balance");
            console.log(data)
            commit('SET_MYBSBALANCE',data.data);
        } catch (error) {
            return error;
        }
    },
  
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}


