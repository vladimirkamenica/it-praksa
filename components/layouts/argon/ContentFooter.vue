<template>
  <footer class="footer px-4 mx-2">
    <div class="row justify-content-center">
      <div class="col ">
        <div class="copyright text-center text-muted">
         Copyright © {{ year }} IT Praksa.com Sva prava su zadržana.
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
           <NuxtLink class="footer-color-nuxt" :to="{name:'uslovi'}">Uslovi korišćenja</NuxtLink>
      </div>
      <div class="col-auto">
            <NuxtLink class="footer-color-nuxt" :to="{name:'privatnost'}">Politika privatnosti</NuxtLink>
      </div>
      <div class="col-auto">
            <NuxtLink class="footer-color-nuxt" :to="{name:'marketing'}"> Marketing</NuxtLink>
      </div>
      <div class="col-auto">      
            <NuxtLink class="footer-color-nuxt" :to="{name:'kontakt'}">Kontakt</NuxtLink>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
            <a 
              href="https://www.facebook.com/groups/it.praksa"
              target="_blank"
              rel="noopener"
              > <i class="fab fa-facebook"></i></a>
      </div>
      <div class="col-auto">
              <a
              href="https://www.instagram.com/itpraksa/"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-instagram"></i></a>
      </div>
      <div class="col-auto">
            <a
              href="https://twitter.com/itpraksa"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-twitter"></i></a>
      </div>
      <div class="col-auto">
            <a
              href="https://www.youtube.com/channel/UClDx0-NU9750KOHm3QF-LaQ"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-youtube"></i></a>
      </div>
      <div class="col-auto">
            <a
              href="https://business.google.com/n/8830104708040202315/profile?hl=sr&fid=11609997360109208568"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-google"></i></a>
      </div>
       <div class="col-auto">
            <a
              href="https://www.linkedin.com/company/esenca-software/"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-linkedin"></i></a>
      </div>
    </div>
 
  </footer>
</template>
<script>

export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  
};

</script>
<style>
.fa:hover {
    opacity: 0.7;
}
.fa-facebook {
  background: #3B5998;
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
 
}

.fa-instagram {
  background:  #f40083;
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
 
}

.fa-twitter {
  background: #55ACEE;
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  
}

.fa-youtube {
  background: #bb0000;
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;

}

.fa-google {
  background: #dd4b39;
  color: white;
  padding: 10px;
  font-size: 25px;
  width: 45px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  
}

</style>
