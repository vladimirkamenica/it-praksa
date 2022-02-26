<template>
  <div>
      <b-container fluid>
          <b-row v-if="big" class="mt-4">
              <b-col  class="text-center">
                  <a :href="big_obj.advertisement.link_ads" target="_blank">
                  <img class="img-fluid" :src="big_obj.advertisement.img_ads" :alt="big_obj.advertisement.title_ads">
                  </a>
              </b-col>
          </b-row>
          <b-row v-if="!big">
              <b-col cols="12" xl="6" lg="6" md="6" sm="12" class="text-center" v-for="advertisement in take_three" :key="advertisement.id">
                    <a :href="advertisement.advertisement.link_ads" target="_blank">
                      <img class="m-1 img-fluid" :src="advertisement.advertisement.img_ads" :alt="advertisement.advertisement.title_ads">
                   </a>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
    name: 'advertisements',
    props:{
        advertisements:{
           type: Array
        },
        big_obj:{
           type: Object
        },
        big:{
            type: Boolean
        }
    },
    computed:{
        take_three(){
            return this.advertisements.slice(0,3);
        },
    }
  
}
</script>

<style>

</style>