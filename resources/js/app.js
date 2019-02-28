import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';
import Example from './components/Home';
import Carousel from './components/Carousel';

window.axios = axios;
window.Form = Form;

new Vue({
    el: '#app',

    components: {
        Example,
        Carousel
    },

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            this.form.post('/projects')
                .then(response => alert('Wahoo!'));
        }
    }
});
