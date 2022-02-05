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
          <ul class="nav nav-footer mt-1 ">
           
          <li class="nav-item mr-3">
           <NuxtLink style="color: #8898aa !important; font-size: 0.875rem;" :to="{name:'uslovi'}">Uslovi korišćenja</NuxtLink>
          </li>
          <li class="nav-item mr-3">
            <NuxtLink style="color: #8898aa !important; font-size: 0.875rem;" :to="{name:'privatnost'}">Politika privatnosti</NuxtLink>
          </li>
          <li class="nav-item mr-3">
            <NuxtLink style="color: #8898aa !important; font-size: 0.875rem;" :to="{name:'marketing'}"> Marketing</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink style="color: #8898aa !important; font-size: 0.875rem;" :to="{name:'kontakt'}">Kontakt</NuxtLink>
          </li>
          
          </ul> 
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto">
        <ul class="nav nav-footer ">
          <li class="nav-item">
            <a 
              href="#"
              class="nav-link"
              target="_blank"
              rel="noopener"
              > <i class="fab fa-facebook" ></i></a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-instagram"></i></a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-twitter"></i></a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-youtube"></i></a>
          </li>

          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              target="_blank"
              rel="noopener"
              ><i class="fab fa-google"></i></a>
          </li>
          
          </ul>
      </div>
    </div>
    <!--
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-12">
        <div class="copyright text-center text-lg-right text-muted">
         Copyright © {{ year }} IT Praksa.com Sva prava su zadržana.
        </div>
    </div> -->

    
        <!--
      <div class="col-lg-6">
        <div class="copyright text-center text-lg-right text-muted">
          © {{ year }}, made with <i class="fa fa-heart heart"></i> by<a
            href="https://www.creative-tim.com"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >Creative Tim</a
          >
          and<a
            href="https://www.updivision.com"
            class="font-weight-bold ml-1"
            target="_blank"
            rel="noopener"
            >UPDIVISION</a
          >
          for a better web.
        </div>
      </div> 
    </div>-->
    
      
       
      
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
