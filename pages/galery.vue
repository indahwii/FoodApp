<template>
    <div class="body">
      <carousel class="banner" items="1" :nav="false">
        <img src="images/1.jpg">
        <img src="images/1.jpg">
      </carousel>
      <h2 class="title-home">Galery {{ this.$route.query.params }}</h2>
      <div class="justify-center">
        <div class="content">
          <div class="catalog">
            <div class="item" v-for="item in details" :key="item">
              <div class="product-card" @click="detailCategori()">
                <img :src="item.strMealThumb">
                <div class="product-body">
                  <p class="product-title">{{ item.strMeal }}</p>
                  <p>Asal : {{ item.strArea }}</p>
                  <p class="desc"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import carousel from 'v-owl-carousel';

import {mapActions , mapState } from 'vuex'


export default {
    async fetch({ store }) {
    await Promise.all([
      store.dispatch('detail/getDetail'),
    ])
  },
    components: {
      carousel,
    },
    filters: {
    },
    data() {
      return {
        products: [],
      }
    },
    computed: {
        ...mapState('detail', {
            details: (state) => state.detailProduct,
        }),
    },
    mounted() {
    },
    methods: {
     ...mapActions('detail', ['getDetail']),
      detailCategori(){
        this.$router.push('detail');
      },
      addtocart(id,name,image,desc) {
        this.selected = {
          id: id, 
          name: name,
          image: image,
          desc: desc
        };
        this.$store.commit('cart/setCart', this.selected);
      }
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
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;

    .item 
      width: 18%
      margin: 10px

      @media only screen and (max-width: 780px)
        width: 100%
    
      .product-card 
        height: auto
        display: block
        max-width: 100%
        position: relative
        white-space: normal
        border: 1px solid #f1f1f1

        img 
          width: 100%

        .product-body 
          padding: 0 $gap-1 $gap-1 $gap-1

          .product-title 
            font-weight: bold
            font-size: 18px
            padding-top: $gap-1

          .desc
           text-align: justify; 

        .product-action 
          display: flex
          justify-content: space-between
          margin: 0
          padding: $gap-2 $gap-1 $gap-1 $gap-1
          bottom: 0

          button
            background-color: #eeeeee
            border: 1px solid #f1f1f1
            border-radius: 4px
            padding: 6px
            color: white
            text-align: center
            text-decoration: none
            display: inline-block
            cursor: pointer

          p 
            font-size: 20px
            font-weight: bold
            padding-top: $gap-1

</style>