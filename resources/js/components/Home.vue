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
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status'

    export default {
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
        }
    }
</script>
