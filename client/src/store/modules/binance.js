import API from "@/services/BinanceApi"

const state={
    myBalance:[],
    account:{}
}

const getters={
    getMyBalance(state){
        return state.myBalance;
    },
    getMyAccount(state){
        return state.account;
    }
}

const mutations={
    SET_MYBALANCE(state,value){
        state.myBalance=value;
    },
    SET_MYACCOUNT(state,value){
        state.account=value;
    }
}

const actions={
    async getMyBalance({state,commit,dispatch}){
        try {
            const data=await API().get("/balance");
            console.log(data)
            commit('SET_MYBALANCE',data.data);

            state.myBalance.forEach(element => {
                dispatch('getMyCurrency',element);
            });


        } catch (error) {
            return error;
        }
    },
    async getMyAccount({commit}){
        try {
            const data=await API().get("/account");
            console.log(data)
            commit('SET_MYACCOUNT',data.data);
        } catch (error) {
            return error;
        }
    },
    async getMyCurrency({commit},element){
        try {
            let index=state.myBalance.findIndex(p=>p.name==element.name);
            console.log(index)
            var total = element.status.price * element.status.available;
            state.myBalance[index]={...element,total:total.toFixed(2)}
            return index;
        } catch (error) {
            return error;
        }
    }
}

export default{
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}