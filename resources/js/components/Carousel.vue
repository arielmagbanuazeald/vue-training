<template>
    <div class="main-carousel" data-flickity='{"cellAlign": "left", "contain": true}'>
        <slot></slot>
    </div>
</template>

<script>
    import Flickity from 'flickity';
    import 'flickity/dist/flickity.min.css';

    export default {
        mounted() {

        }
    }
</script>
