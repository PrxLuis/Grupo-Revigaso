let map;

async function initMap() {
    const myLatLng = { lat: 18.13687, lng: -92.86644 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Grupo Revigaso",
    });
  }

  window.initMap = initMap;