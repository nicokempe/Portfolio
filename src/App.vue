<template>
  <HeaderComponent />
  <div class="container">
    <router-view/>
  </div>
  <FooterComponent />
</template>

<script>
import HeaderComponent from '@/components/static/HeaderComponent';
import FooterComponent from '@/components/static/FooterComponent';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>