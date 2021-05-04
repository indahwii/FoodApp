<template>
    <div class="body">
      <carousel class="banner" items="1" :nav="false">
        <img src="images/1.jpg">
        <img src="images/1.jpg">
      </carousel>
      <h2 class="title-home">Categori Makanan</h2>
       <div class="justify-center">
        <div class="content">
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
                <p>Rp. 50.000</p>
              </div>
            </div>
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
        this.$router.push('/galery?params=' + this.detail)
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
        alert("Data berhasil di tambahkan")
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
        display: block
        max-width: 100%
        position: relative
        white-space: normal
        border: 1px solid #ccc
        border-bottom: none
        border-radius: 6px 6px 0px 0px
        background-color: $white

        @media only screen and (max-width: 780px)
          height: auto


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
        border: 1px solid #ccc
        background-color: #ffd66b
        display: flex
        justify-content: space-between
        margin: 0
        padding: $gap-1 $gap-1 $gap-1
        bottom: 0
        border-radius: 0px 0px 6px 6px

        button
          background-color: white
          border: 1px solid #fff
          border-radius: 4px
          padding: 6px
          color: white
          text-align: center
          text-decoration: none
          display: inline-block
          cursor: pointer

          &:hover
            background-color: #fff76a
            border: 1px solid #ffd66b


        p 
          color: $purple
          font-size: 20px
          font-weight: bold
          padding-top: $gap-1

</style>