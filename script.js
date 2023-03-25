// // Check if Geolocation API is supported
// if ('geolocation' in navigator) {
//     console.log('Geolocation is available');
//   } else {
//     console.log('Geolocation is not available');
//   }
  
//   const getLocationBtn = document.querySelector('#getLocationBtn');
//   const removeLocationBtn = document.querySelector('#removeLocationBtn');
//   const mapDiv = document.querySelector('#map');
//   const latKey = 'lat';
//   const longKey = 'long';
  
//   // Check if lat and long are already stored in local storage
//   if (localStorage.getItem(latKey) && localStorage.getItem(longKey)) {
//     getLocationBtn.disabled = true;
//     const lat = parseFloat(localStorage.getItem(latKey));
//     const long = parseFloat(localStorage.getItem(longKey));
//     initMap(lat, long);
//   }
  
//   // Function to get location and display map
//   function getLocation() {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   }
  
//   // Function to display location on map
//   function showPosition(position) {
//     const lat = position.coords.latitude;
//     const long = position.coords.longitude;
//     localStorage.setItem(latKey, lat);
//     localStorage.setItem(longKey, long);
//     getLocationBtn.disabled = true;
//     initMap(lat, long);
//   }
  
//   // Function to remove location from local storage and enable Get Location button
//   function removeLocation() {
//     localStorage.removeItem(latKey);
//     localStorage.removeItem(longKey);
//     getLocationBtn.disabled = false;
//     mapDiv.innerHTML = '';
//   }
  
//   // Function to initialize map
//   function initMap(lat, long) {
//     const mapUrl = `https://www.google.com/maps/embed/v1/view?key=API_KEY&center=${lat},${long}&zoom=15`;
//     mapDiv.innerHTML = `<iframe src="${mapUrl}" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`;
//   }
  
//   getLocationBtn.addEventListener('click', getLocation);
//   removeLocationBtn.addEventListener('click', removeLocation);




//   function displayMap() {
//     const lat = localStorage.getItem("lat");
//     const long = localStorage.getItem("long");
  
//     const url = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&q=${lat},${long}&zoom=18`;
    
//     const mapDiv = document.getElementById("map");
//     mapDiv.innerHTML = `<iframe
//       width="100%"
//       height="450"
//       frameborder="0" style="border:0"
//       src="${url}"
//       allowfullscreen>
//     </iframe>`;
//   }


//   const getLocationButton = document.getElementById("get-location");
// getLocationButton.addEventListener("click", () => {
//   getLocation();
// });

// const removeLocationButton = document.getElementById("remove-location");
// removeLocationButton.addEventListener("click", () => {
//   localStorage.removeItem("lat");
//   localStorage.removeItem("long");
//   getLocationButton.disabled = false;
//   const mapDiv = document.getElementById("map");
//   mapDiv.innerHTML = "";
// });

// const lat = localStorage.getItem("lat");
// const long = localStorage.getItem("long");
// if (lat && long) {
//   getLocationButton.disabled = true;
//   displayMap();
// }

  
  





let map=document.getElementById('map');
let btn=document.getElementById('btn');

function getLocation(){
    if(localStorage.getItem("lat")){
        btn.disabled=true;
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        btn.disabled=true;
    }else{
        map.innerText="Sorry to say Geolocation is not supported by your browser";
    }
}

function showPosition(position){
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("long",position.coords.longitude);
    map.innerHTML=`<iframe src="https://maps.google.com/maps?q=${position.coords.latitude}, ${position.coords.longitude}&output=embed"></iframe>`;
}

function removeLocation(){
    btn.disabled=false;
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
}