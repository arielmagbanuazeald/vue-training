import Vue from 'vue';

let source = {
    user: {
        name: 'John Doe'
    }
};

new Vue({
    el: '#one',
    data: source
});

new Vue({
    el: '#two',
    data: source
});
