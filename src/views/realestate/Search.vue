<template>
  <div class="wrapB">
    <div id="map" style="width:500px;height:700px;"></div>
  </div>
</template>

<script>

export default {
  name: "RealestateSearch",
  components: {
  },
  data() {
    return {
      map: null,
      buttons: [
        {
          title: "확인",
          highlight: true,
          onClick: () => {
            console.log("클릭");
          },
        },
        {
          title: "취소",
          onClick: () => {
            console.log("클릭");
          },
        },
      ],
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=6f0cd3f675a4d46c711e67d3a74d7398";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.51924223760834, 126.92716681223602),
        level: 7,
      };
      this.map = new kakao.maps.Map(container, options);
    },
  },
};
</script>
