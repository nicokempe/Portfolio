<template>
  <HeaderComponent v-if="hideHeader === false" />
  <div class="container">
    <router-view/>
  </div>
  <FooterComponent v-if="hideFooter === false" />

</template>

<script>
import HeaderComponent from '@/components/static/HeaderComponent';
import FooterComponent from '@/components/static/FooterComponent';


export default {
  name: 'App',
  components: {HeaderComponent, FooterComponent},
  data() {
    return {
      hideHeader: false,
      hideFooter: false,
      isErrorPage: false,
    }
  },
  watch: {
    '$route'(to) {
      if (to.path === '/error') {
        document.getElementsByTagName("body")[0].classList.add("errorPage");
        this.hideFooter = true;
        this.hideHeader = true;
        this.isErrorPage = true;
      } else {
        document.getElementsByTagName("body")[0].classList.remove("errorPage");
        this.hideFooter = false;
        this.hideHeader = false;
        this.isErrorPage = false;
      }
    },
  }
}
</script>