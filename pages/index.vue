<template>
 <div class="container-fluid mt-2">
      <div class="row">
        <div class="col mt-2">
          <h1>IT PRAKSA, SAVETI I PREPORUKE</h1>
        </div>
      </div>
     <newspapers :newspapers="newspapers" :single="false"></newspapers>
     <advertisements v-if="advertisements_big" :big="true" :big_obj="advertisements_big" ></advertisements>
     <video-display class="mt-4" :big="true" :videos="top_videos"></video-display>
     <video-display :xl_col="3" :big="false" :videos="videos"></video-display>
      <advertisements :big="false" :advertisements="advertisements_display" ></advertisements>
      <!-- <div class="row mt-4">
        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"  >
          <card class="bg-white"  >
            <div slot="header" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46">Očekivana zastupljenost programskih jezika za 2022 godinu.</h5>
              </div>
            </div>
            <line-test :data="chartData2" :options="chartOptions"></line-test>
          </card>
        </div>
           <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12" >
          <card class="bg-white" type="default"  >
            <div slot="header" class="row align-items-center" >
              <div class="col" >
                <h5 class="h3 mb-0" style="color: #111f46">Očekivana plata za IT praksu?</h5>
              </div>
            </div>
            <line-test :data="chartData" :options="chartOptions"></line-test>
          </card>
        </div>
      </div> -->
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
              data: [555, 20, 10, 30, 15, 40, 20, 60, 60],
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
        labels: ["600 evra", "500 evra", "400 evra", "300 evra"],
        datasets: [
          { 
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#ffd600"],
            data: [10, 20, 30, 40],
            
            
          }
        ]
      },
       chartData2: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["JavaScript", "PHP", "Java", "C#"],
        datasets: [
          { 
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#ffd600"],
            data: [45, 20, 20, 15],
            
            
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

