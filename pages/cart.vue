<template>
    <div class="body">
        <div class="catalog">
          <div class="item" v-for="item in carts" :key="item">
            <div class="product-card">
              <img :src="item.image">
              <div class="product-body">
                <p class="product-title">{{ item.name }}</p>
                <p class="desc">{{ item.desc.substring(0,80) + '...' }}</p>
              </div>
              <div class="product-action">
                <button>
                    <img src="images/icart.png">
                </button>
                <p>Rp. 50.000;</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';


export default {
    components: {
    },
    filters: {
    },
    data() {
      return {
      }
    },
    computed: {
       ...mapState('cart', {
        carts: (state) => state.productCart,
       })
    },
    mounted() {
    },
    methods: {
    }
}
</script>

<style lang="sass" scoped>
  @import '~/assets/sass/style.sass'  

  $gap-1: 10px
  $gap-2: 20px

  .title-home 
    font-size: 30px
    font-weight: bold
    text-align: center
    padding-top: $gap-2

  .catalog
    width: 100%
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    justify-content: center;

    .item 
      width: 22%
      margin: 10px

      @media only screen and (max-width: 780px)
        width: 100%
    
      .product-card 
        height: 540px
        display: block;
        max-width: 100%;
        position: relative;
        white-space: normal;
        border: 1px solid #f1f1f1

        .product-body 
          padding: 0 $gap-1 $gap-1 $gap-1;

          .product-title 
            font-weight: bold
            font-size: 25px
            padding-top: $gap-1

        .product-action 
          display: flex
          justify-content: space-between
          margin: 0
          padding: $gap-2 $gap-1 $gap-1 $gap-1
          bottom: 0

</style>