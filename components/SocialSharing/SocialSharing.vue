<template>
 <b-row class="mt-xl-3 mt-lg-3 mt-md-3 mt-sm-3 mt-3">
    <b-col class="d-flex ">
  <div class="news_detail__social-list viber-hover">
<ShareNetwork
    network="viber"
    :url="url"
    :title="title"
  >
  
 <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'viber' }" />
</ShareNetwork>
  </div>
  <div class="news_detail__social-list skype-hover  ml-2">
<ShareNetwork
    network="skype"
    :url="url"
    :title="title"
  >
  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'skype' }"  />
</ShareNetwork>

</div>
<div class="news_detail__social-list linkedin-hover  ml-2">
<ShareNetwork
    network="linkedin"
    :url="url"
    :title="title"
  >
  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"  />
</ShareNetwork>

</div>
  <div class="news_detail__social-list whatsapp-hover ml-2">
<ShareNetwork
    network="whatsApp"
    :url="url"
    :title="title"
  >
  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'whatsapp-square' }"  />
</ShareNetwork>
</div>
<div class="news_detail__social-list facebook-hover ml-2">
<ShareNetwork
    network="facebook"
    :url="url"
    :title="title"
  >
<font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"  />
</ShareNetwork>
</div>
<div class="news_detail__social-list telegram-hover  ml-2">
<ShareNetwork
    network="telegram"
    :url="url"
    :title="title"
  >
  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'telegram' }"  />
</ShareNetwork>

</div>


    </b-col>
  </b-row>

</template>

<script>
export default {
name : 'socijal-sharing',
props:{
    url:{
        type: String,
         
    },
     title:{
        type: String,
         
    }
}
}
</script>

<style>

</style>