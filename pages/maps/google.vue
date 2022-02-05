<template>

    <!--
    <base-header class="pb-1 mb-4">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h1 class="h2 text-white d-inline-block mb-0">KONTAKT</h1>
         
        </div>
    
      </div>
    </base-header> -->
    <div class="container mb-6 mt-5 ml-5 ">
      <div class="row ">
        <div class="col  mb-2">
          <h1> Kontakt </h1>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p>
           ITpraksa.Com 
           <br><br>Esenca Software doo 
           <br><br>Ratnih vojnih invalida 48
           <br><br>11000 Beograd-Palilula, 
          <br><br> Republika Srbija
          <br><br> info@ITpraksa.com
          <br><br> 063 85 42 651

          </p>
          <br><br><br><br><br><br><br><br><br>
        </div>
      </div>
      
    </div>
   
      <!--
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col">
          <div class="card border-0">
            <div id="map-custom" class="map-canvas"
                 style="height: 600px;"></div>
          </div>
        </div>
      </div>
    </div> -->

    
  
</template>
<script>
  import { API_KEY } from '@/util/API_KEY';

  export default {
    layout: 'DashboardLayout',
    methods: {
      initMap(google) {
        let map, lat = 40.748817, lng = -73.985428, color = "#5e72e4";
        map = document.getElementById('map-custom');

        let myLatlng = new google.maps.LatLng(lat, lng);
        let mapOptions = {
          zoom: 12,
          scrollwheel: false,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{ "color": "#444444" }]
          }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{ "color": "#f2f2f2" }]
          }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{ "saturation": -100 }, { "lightness": 45 }]
          }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{ "visibility": "simplified" }]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{ "visibility": "off" }]
          }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{ "visibility": "off" }]
          }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": color }, { "visibility": "on" }] }]
        }

        map = new google.maps.Map(map, mapOptions);

        let marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          animation: google.maps.Animation.DROP,
          title: 'Hello World!'
        });

        let contentString = '<div class="info-window-content"><h2>Argon Dashboard PRO</h2>' +
          '<p>A beautiful premium dashboard for Bootstrap 4.</p></div>';

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    },
    async mounted() {
      let GoogleMapsLoader = await import('google-maps');
      GoogleMapsLoader = GoogleMapsLoader.default || GoogleMapsLoader
      GoogleMapsLoader.KEY = API_KEY;
      GoogleMapsLoader.load(google => {
        this.initMap(google);
      });
    }
  };
</script>
