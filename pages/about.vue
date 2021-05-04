<template>
    <div class="body">
      <div class="justify-center">
        <div class="about">
          <p class="about__title">About</p>
          <div class="about__desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </div>
</template>

<script>
</script>

<style lang="sass" scoped>
@import '~/assets/sass/style.sass';

.about
  padding-top: 20px
  text-align: center

  &__title
     color: $purple
     font-size: 35px
     font-weight: bold
     font-family: sans-serif

  &__desc
    padding-top: 20px
    text-align: justify
    line-height: 1.5


</style>