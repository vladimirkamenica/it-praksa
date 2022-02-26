<template>
  <div>
    <base-header >
      <div class="row">
        <div class="col">
          <h1>IT PRAKSA, SAVETI I PREPORUKE</h1>
        </div>
        
      </div>

      <!-- Card stats -->
     <newspapers :newspapers="newspapers" :single="false"></newspapers>
    </base-header>

    <!--Charts-->
    <advertisements v-if="advertisements_big" :big="true" :big_obj="advertisements_big" ></advertisements>
    <div class="container-fluid mt-6">
      <div class="row">
      

        <div class="col-xl-4" >
          <card class="bg-white" type="default"  >
            <div slot="header" class="row align-items-center" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46">Zastupljenost programskih jezika za 2021. godinu</h5>
              </div>
            </div>
            <line-test :data="chartData" :options="chartOptions"></line-test>
          </card>
        </div>
        
        <div class="col-xl-4">
          <card header-classes="bg-transparent" >
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
           <div class="col-xl-4" >
          <card class="bg-white" type="default"  >
            <div slot="header" class="row align-items-center" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46">Zastupljenost programskih jezika za 2021. godinu</h5>
              </div>
            </div>
            <line-test :data="chartData" :options="chartOptions"></line-test>
          </card>
        </div>
      </div>
      <!-- End charts-->

      <!--Tables-->
     <video-display :big="true" :videos="top_videos"></video-display>
     <video-display :xl_col="3" :big="false" :videos="videos"></video-display>
    

 
    <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>

      <!--End tables-->
</div>
  </div>
 
</template>
<script>

// Charts
import VideoDisplay from '~/components/videos-display/videos-display';

import * as chartConfigs from "@/components/argon-core/Charts/config";
import LineChart from "@/components/argon-core/Charts/LineChart";
import BarChart from "@/components/argon-core/Charts/BarChart";
import VideoPlayer from 'nuxt-video-player'
import RouteBreadCrumb from "@/components/argon-core/Breadcrumb/RouteBreadcrumb";
import StatsCard from "@/components/argon-core/Cards/StatsCard";


import LineTest from "@/components/charts/LineChart";
import Newspapers from "~/components/newspapers/newspapers"
import Advertisements from "~/components/advertisements/advertisements"
import adsFilterBigImg from '~/util/adsFilterBigImg'

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
    LineTest,
    VideoPlayer,
    Newspapers,
    Advertisements,
    VideoDisplay
  },
  async asyncData({app}){
   let newspapers = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/newspaper-index`);
   let video = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/video-index`);   
   let advertisement = await app.$axios.$get(`${app.$axios.defaults.baseURL}/api/ads-to-page?route=/&category=''`)
   
    return {
      newspapers : newspapers.newspapers,
      videos : video.videos,
      top_videos : video.top_videos,
      advertisements_display : adsFilterBigImg.bigImgFalse(advertisement.advertisements),
      advertisements_big: adsFilterBigImg.bigImgTrue(advertisement.advertisements),
    }
  },
 
  mounted(){
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
