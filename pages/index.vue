<template>
    <div class="body">
      <carousel class="banner" items="1" :nav="false">
        <img src="images/1.jpg">
        <img src="images/1.jpg">
      </carousel>
      <h2 class="title-home">Categori Makanan</h2>
        <div class="catalog">
          <div class="item" v-for="item in products" :key="item">
            <div class="product-card" @click="detailCategori(item.strCategory)">
              <img :src="item.strCategoryThumb">
              <div class="product-body">
                <p class="product-title">{{ item.strCategory }}</p>
                <p class="desc">{{ item.strCategoryDescription.substring(0, 80) + '...' }}</p>
              </div>
            </div>
            <div class="product-action">
              <button @click="addtocart(item.idCategory, item.strCategory, item.strCategoryThumb, item.strCategoryDescription )">
                  <img src="images/icart.png">
              </button>
              <p>Rp. 50.000;</p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import carousel from 'v-owl-carousel';
export default {
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
    },
    mounted() {
      this.getProduct()
    },
    methods: {
      getProduct() {
        this.$axios.get('/categories.php')
        .then(res => {
          this.products = res.data.categories
        })
      },
      detailCategori(key){
        this.detail = key
        this.$router.push('/detail?params=' + this.detail)
        this.$store.dispatch('detail/getDetail', this.detail)
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

  .owl-theme .owl-nav
    // display: none !important

  .banner
      width: 100%
      margin: 0 auto
      text-align: center
      padding: $gap-2 $gap-2 0 $gap-2
      img 
        margin: 0 auto
        width: 100%
        max-height: 500px

      @media screen and (max-width: $small)
        img 
          width: 100%

  .title-home 
    font-size: 30px
    font-weight: bold
    text-align: center
    padding-top: $gap-2

  .catalog
    width: 100%
    display: flex
    flex-wrap: wrap
    flex: 1 1 auto
    padding-top: $gap-2
    padding-bottom: $gap-2
    justify-content: center

    .item 
      width: 18%
      margin: 10px

      @media only screen and (max-width: 780px)
        width: 100%
    
      .product-card 
        height: auto
        display: block
        max-width: 100%
        height: 330px
        position: relative
        white-space: normal
        border: 1px solid #f1f1f1

        img 
          width: 100%

        .product-body 
          padding: 0 $gap-1 $gap-1 $gap-1

          .product-title 
            font-weight: bold
            font-size: 25px
            padding-top: $gap-1

          .desc
           text-align: justify; 

      .product-action 
        border: 1px solid #f1f1f1
        background: $purple
        display: flex
        justify-content: space-between
        margin: 0
        padding: $gap-1 $gap-1 $gap-1
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
          color: white
          font-size: 20px
          font-weight: bold
          padding-top: $gap-1

</style>