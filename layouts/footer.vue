<template>
    <div class="footer">
        <p>www.themealdb.com 2021 created by indahwii</p>
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
    position: fixed
    left: 0
    bottom: 0
    width: 100%
    height: 40px
    background-color: $purple
    overflow: hidden
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1)
    text-align: center
    color: $white
    padding: 10px
</style>