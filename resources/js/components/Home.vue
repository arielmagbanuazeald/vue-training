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
                            {{ status.created_at | ago }}
                        </p>
                    </div>

                    <div class="message-body">
                        {{ status.body }}
                    </div>
                </div>

                <add-to-stream @completed="addStatus"></add-to-stream>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddToStream from '../components/AddToStream';

    export default {
        components: {
            AddToStream
        },

        mounted() {
            console.log('Component mounted.')
        },

        data() {
            return {
                statuses: []
            }
        },

        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },

        created() {
            Status.all(statuses => this.statuses = statuses);
        },

        methods: {
            addStatus(status) {
                this.statuses.unshift(status);

                alert('Your status has been added to the stream.');
                window.scrollTo(0, 0);
            }
        }
    }
</script>
