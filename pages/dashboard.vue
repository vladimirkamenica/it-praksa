<template>
  <div>
    <base-header class="pb-6">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 d-inline-block mb-0" style="color:#111f46; font-family: Roboto;">IT PRAKSA</h6>
        </div>
        
      </div>

      <!-- Card stats -->
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card class="ima">
            <img src="../static/img/brand/PredragMasic.jpg" class="card-img-top">
            <template slot="footer">
               <h3 class="card-title">IT vest 1</h3>
                <div class="mb-1 text-muted">27.12.2021.</div>
          <p class="card-text"><strong>Predrag Mašić</strong>-lider, programer, predavač, vlasnik Esenca Software i IT kursevi.
            4.7 je prosečna ocena
          </p>
          <a href="https://www.itkursevi.com/predrag-masic-lider-programer-predavac-vlasnik-esenca-software-i-it-kursevi">
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Detaljnije</button>
          </a>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <img src="../static/img/brand/nemanjaAndjelovic.jpg" class="card-img-top" alt="">
            <template slot="footer">
              <h3 class="card-title">IT vest</h3>
              <div class="mb-1 text-muted">27.12.2021.</div>
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših programa se zaposli.
          </p>
          <a href="https://www.itkursevi.com/nevena-grujic-phpjava-programer">
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Detaljnije</button>
          </a>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <img src="../static/img/brand/nevenaGrujic.jpg" class="card-img-top">
            <template slot="footer">
               <h3 class="card-title">IT vest</h3>
          <div class="mb-1 text-muted">27.12.2021.</div>
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših programa se zaposli.
          </p>
          <a href="https://www.itkursevi.com/nevena-grujic-phpjava-programer">
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Detaljnije</button>
          </a>
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <img src="../static/img/brand/dejanJovanovkski.png" class="card-img-top">
            <template slot="footer">
              <h3 class="card-title">IT vest</h3>
          <div class="mb-1 text-muted">28.12.2021.</div>
          <p class="card-text">
            Zadovoljni polaznici su naša najveća referenca.
            76% polaznika nakon završenih naših programa se zaposli.
          </p>
          <a href="https://www.itkursevi.com/dejan-jovanovski-net-programer">
            <button type="button" class="w-100 btn btn-lg btn-outline-dark">Detaljnije</button>
          </a>
            </template>
          </stats-card>
        </div>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4" >
          <card type="default" style="background-color: #111f46; height: 500px;">
            <div slot="header" class="row align-items-center" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46"> Trend programskog jezika</h5>
              </div>
              <div class="col">
                <ul class="nav nav-pills justify-content-end">
                  <li class="nav-item mr-2 mr-md-0">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 0 }"
                      @click.prevent="initBigChart(0)"
                    >
                      <span class="d-none d-md-block">Mesec</span>
                      <span class="d-md-none">M</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link py-2 px-3"
                      href="#"
                      :class="{ active: bigLineChart.activeIndex === 1 }"
                      @click.prevent="initBigChart(1)"
                    >
                      <span class="d-none d-md-block">Nedelja</span>
                      <span class="d-md-none">W</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <line-chart
              :height="350"
              ref="bigChart"
              :chart-data="bigLineChart.chartData"
              :extra-options="bigLineChart.extraOptions"
            >
            </line-chart>
          </card>
        </div>

        <div class="col-xl-4" >
          <card class="bg-white" type="default"  style="height:500px;">
            <div slot="header" class="row align-items-center" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46">Zastupljenost programskih jezika za 2021. godinu</h5>
              </div>
              
            </div>

            <line-test :data="chartData" :options="chartOptions"></line-test>
               <!--
               <iframe width="460" height="355" src="https://mdbootstrap.com/api/snippets/embed/3601579/fullscreen" frameborder="0" style="padding-top: 55px;"></iframe> -->
               <!--
                <iframe width="460" height="355" src="https://mdbootstrap.com/api/snippets/embed/3583948/fullscreen" frameborder="0" style="padding-top: 55px;"></iframe> -->
          </card>
        </div>

        <div class="col-xl-4">
          <card header-classes="bg-transparent" style="height:500px;">
            <div slot="header" class="row align-items-center">
              <div class="col">
                <h6 class="text-uppercase text-muted ls-1 mb-1">Anketa</h6>
                <h5 class="h3 mb-0">Sa kojim kursem je najbolje započeti?</h5>
              </div>
            </div>
                <form  class=" bg-white px-4 mt-3" action="">
 
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                    <label class="form-check-label" for="radioExample1">
                      PHP
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                    <label class="form-check-label" for="radioExample2">
                      Web Design
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                    <label class="form-check-label" for="radioExample3">
                      Frontend Development
                    </label>
                  </div>
                  <div class="form-check mb-4">
                    <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                    <label class="form-check-label" for="radioExample3">
                      Java
                    </label>
                  </div>
                  <div class="form-check mb-5">
                    <input class="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                    <label class="form-check-label" for="radioExample3">
                      SEO
                    </label>
                  </div>
                </form>
                <div class="text-end">
                  <button type="button" class="btn btn-outline-dark btn-lg btn-block mt-6">Potvrdi</button>
                </div>
           
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
  <div class="row">
        <div class="col-md-12">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-270 position-relative">
        <div class="col-auto d-none d-lg-block">
          <iframe width="1590" height="530" src="https://www.youtube.com/embed/JKWdarVK2Rc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          <nuxt-link :to="{name: 'itpraksa-video-video',params:{video:'Esenca Software 1'}}"><strong style="margin-left: 10px;">Esenca Software 1</strong></nuxt-link>
          <div class="mb-1 text-muted mx-2">15.12.2021.</div>
        </div>
      </div>
        </div>

            <div class="col-sm-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 mr-1 shadow-sm h-md-270 position-relative">
            <div class="col-auto d-none d-lg-block">
              <iframe width="760" height="300" src="https://www.youtube.com/embed/G3gC-oOoju0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <nuxt-link :to="{name: 'itpraksa-video-video',params:{video:'Esenca Software 2'}}"><strong style="margin-left: 10px;">Esenca Software 2</strong></nuxt-link>
              <div class="mb-1 text-muted mx-2">15.12.2021.</div>
            </div>
          
          </div>
        </div>
        <div class="col-sm-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4  shadow-sm h-md-270 position-relative">
            <div class="col-auto d-none d-lg-block">
              <iframe  width="780" height="300" src="https://www.youtube.com/embed/G3gC-oOoju0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <strong style="margin-left: 10px;">Esenca Software 3</strong>
              <div class="mb-1 text-muted mx-2">15.12.2021.</div>
            </div>
          </div>
        </div>
      <div class="col-sm-4 ">
        <div class="card ">
          <iframe class="embed-responsive-item" height="230" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 4</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-4">
      <div class="card ">
          <iframe class="embed-responsive-item" height="230" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 5</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-4">
      <div class="card ">
          <iframe class="embed-responsive-item" height="230" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 6</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>  
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 7</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 8</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
     <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 9</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
     <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 10</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
       <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 11</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 12</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 13</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
       <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 14</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
       <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 14</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 15</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
       <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/G3gC-oOoju0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 16</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>
    <div class="col-sm-3">
      <div class="card ">
          <iframe class="embed-responsive-item" height="210" src="https://www.youtube.com/embed/JKWdarVK2Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class="card-body p-2 ">
            <h3 class="card-title m-0">Esenca Software 17</h3>
            <p class="card-text text-muted">03.02.2022.</p> 
          </div>
        </div>
    </div>            
  </div>
      <!--End tables-->
</div>
  </div>
 
</template>
<script>

// Charts
import * as chartConfigs from "@/components/argon-core/Charts/config";
import LineChart from "@/components/argon-core/Charts/LineChart";
import BarChart from "@/components/argon-core/Charts/BarChart";

import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import StatsCard from "@/components/argon-core/Cards/StatsCard";
import SocialTrafficTable from "@/components/pages/dashboard/SocialTrafficTable.vue";
import PageVisitsTable from "@/components/pages/dashboard/PageVisitsTable.vue";
import LineTest from "@/components/charts/LineChart";
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    /*if (!store.$auth.loggedIn) {
      return redirect("/login");
    }*/
  },
  layout: "DashboardLayout",
  components: {
    LineChart,
    BarChart,
    RouteBreadCrumb,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable,
    LineTest
  },
  data() {
    return {
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: "Performance",
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            },
          ],
          labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
       chartOptions: {
        hoverBorderWidth: 20,
        cutoutPercentage: 80,
        
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Kotlin", "Java", "PHP", "JavaScript"],
        datasets: [
          { 
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#ffd600"],
            data: [20, 70, 50, 85],
            
            
          }
        ]
      },
      redBarChart: {
        chartData: {
          labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Sales",
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
      },
    };
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            label: "Performance",
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    },
  },
  mounted() {
    this.initBigChart(0);
  },
};


</script>



<style>

</style>
