<template>
    <div class="footer">
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0,
            title: this.$route.name,
        }
    },
    computed: {
        
    },
    mounted() {
        
    },
    methods: {
        back() {
            this.$router.back()
        }
    }
}
</script>
<style lang="sass">
@import '~/assets/sass/style.sass';

.footer
    // position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 100px
    background-color: $purple
    overflow: hidden
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1)
</style>