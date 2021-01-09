import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import * as getter from './getter'
import * as actions from './action'
import mutations from './mutations'

const state = {

}

const store = new Vuex.Store({
    state,
    getter,
    actions,
    mutations,
    modules: {
        // logIn
    }
});
 
export default store;