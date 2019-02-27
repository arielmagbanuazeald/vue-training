import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Form from './core/Form';

window.Vue = Vue;
window.axios = axios;
window.Form = Form;

Vue.use(VueRouter);

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

