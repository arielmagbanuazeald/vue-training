<template>
    <div class="container">
        <div class="columns">
            <div class="column">
                <div class="message" v-for="status in statuses">
                    <div class="message-header">
                        <p>
                            {{ status.user.name }} said ...
                        </p>
                        <p>
                            {{ postedOn(status) }}
                        </p>
                    </div>

                    <div class="message-body">
                        {{ status.body }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';

    export default {
        mounted() {
            console.log('Component mounted.')
        },

        data() {
            return {
                statuses: []
            }
        },

        created() {
            axios.get('/statuses')
                .then(({data}) => this.statuses = data);
        },

        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>
