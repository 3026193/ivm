  //initialize the map         
  var map = L.map('map').setView([52.14049904,5.36708465], 3);
  
  //Create baselayer - tiles         
  var backgroundMap = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',{
    attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a>contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 19
    }
  );
  
  backgroundMap.addTo(map);
        

/*    var marker = L.marker([52.35946508, 5.2328915]).addTo(map);
        
    var popup = "Hier komt de nieuwe Aeres Hogeschool te staan ";
        marker.bindPopup(popup); */
        

        
var greenIcon = L.icon({
    iconUrl: 'icon2.png',
    iconSize:     [60, 85], // size of the icon
});
L.marker([53.0313172,5.226658], {icon: greenIcon}).addTo(map).bindPopup("<h3>De Afsluitdijk</h3>De Afsluitdijk is de waterkering tussen Noord-Holland en Friesland, die het IJsselmeer afsluit van de Waddenzee. Hieraan ontleent de dam zijn naam. De Afsluitdijk is belangrijk om Nederland tegen overstromingen te beschermen. De Afsluitdijk is een onderdeel van de Zuiderzeewerken. In 1927 werd begonnen met de aanleg. In 1932 werd het laatste sluitgat, de Vlieter, gesloten. Een jaar later werd de dijk opengesteld voor het wegverkeer. Op de plaats waar de Afsluitdijk werd gedicht, werd een monument opgericht, het Vlietermonument.");
L.marker([51.9549007,4.16700728], {icon: greenIcon}).addTo(map).bindPopup("<h3>De Maeslantkering</h3>Geen enkele waterkering ter wereld heeft grotere beweegbare onderdelen dan de Maeslantkering. Dit Deltawerk kan een vloedgolf van 5 m boven NAP aan. De Maeslantkering ligt in de Nieuwe Waterweg bij Hoek van Holland en werd gebouwd tussen 1991 en 1997. Het bouwwerk is volledig automatisch gestuurd en vormt samen met de Hartelkering en de dijkverbreding Rozenburg de Europoortkering. De Maeslantkering is een voorliggende kering, wat betekent dat hij de eerste klappen opvangt bij hoogwater vanuit zee. Hiermee beschermt de stormvloedkering de inwoners van Zuid-Holland.");
L.marker([51.831867,4.0485331,0.0096408], {icon: greenIcon}).addTo(map).bindPopup("<h3>Haringvlietdam</h3>De bouw Haringvlietdam werd in 1971 voltooid. Toen had men 14 jaar lang gewerkt aan de dam die de 4,5 kilometer water tussen Goerree-Overflakkee en Voorne-Putte had overbrugd. Op de Oosterscheldekering na, nam de bouw van de Haringvlietdam de meeste tijd in beslag. De Haringvlietdam had twee functies. Ten eerste moest de dam beschermen tegen een toekomstige watersnoodramp. Ten tweede moest de dam zorgen voor de afvoer van Rijn- en Maaswater in de Noordzee.");
L.marker([51.6086881,3.683236,0.27830031], {icon: greenIcon}).addTo(map).bindPopup("<h3>De Oosterscheldekering</h3>De bouw van de Oosterscheldekering was zo’n groots en complex project dat er makkelijk een hele website aan alleen deze dam gewijd zou kunnen worden. Zonder twijfel is stormvloedkering van de Oosterschelde het meest indrukwekkende waterkerige bouwwerk van Nederland. Andere stormvloedkeringen kunnen gevonden worden in de Hollandsche IJssel en de Nieuwe Waterweg"); 
L.marker([51.6760143,4.1258551,5.65652417], {icon: greenIcon}).addTo(map).bindPopup("<h3>De Grevelingendam</h3>Aan de Grevelingendam werd in 1958 begonnen. Na zeven jaar hard werk was de dam volledig klaar. De Grevelingendam was met zijn zes kilometer beduidend langer dan de Zandkreekdam of de Veerse Gatdam. Caissons bleken voor dit karwei minder geschikt. Daarom werd voor een deel van de dam een revolutionaire techniek gebruikt: via kabelbanen werden grote betonblokken in het water gestort. Voor de rest van de dam werd gebruikt gemaakt van de reeds bekende technieken als het opspuiten van zand en het afzinken van caissons.");     
L.marker([51.76483515,3.8568463,8.73770166], {icon: greenIcon}).addTo(map).bindPopup("<h3>De Brouwersdam</h3>De Brouwersdam is het zevende bouwwerk van de Deltawerken. De Brouwersdam sluit het Brouwershavense Gat af. Door deze afsluiting ontstond het Grevelingenmeer. Al in 1965 was de Grevelingendam tussen Goeree-Overflakkee en Schouwen-Duiveland gereedgekomen. De Grevelingen ten zuiden van Goeree-Overflakkee stonden nog in verbinding met de Noordzee. De stormvloeden konden hier dus hoger oplopen, daarom werden de dijken aan de zuidkant van het eiland in 1965 verhoogd. Om de periode van hogere vloedstanden te verkorten is direct na de sluiting van de Grevelingendam begonnen met de bouw van de Brouwersdam. Na ruim zes jaar, in het voorjaar van 1971, is deze dam gesloten. Tussen 1964 en 1971 hebben zich enkele zeer hoge waterstanden voorgedaan. In november 1966 bleef het water hier slechts enkele centimeters beneden het peil van 1 februari 1953. "); 

        
 
// Create a marker first
var geojsonMarkerOptions = {
  radius: 8,
  fillColor: "#ff7800",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};
 
//create a empty geojson layer
var geojson = L.geoJson(null,{
  style: function (feature) {
    return {
        color: "red"
    }
  }
    
}).addTo(map);
        // new Http Request
            var xhttp = new XMLHttpRequest();
 
            // set the request method and data file
            xhttp.open('GET', encodeURI("nerderland.json"));
            
            //specify what must be done with the geojson data to the layer when request is succesfull
            xhttp.onload = function() {
              if (xhttp.readyState === 4) {
                  // add the json data to the geojson layer we created before!
                  geojson.addData(JSON.parse(xhttp.responseText));
                } else {
                  alert('Request failed.  Returned status of ' + xhttp.status);
                }
            };
            
            // send the request
            xhttp.send();


var geojson1 = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
        // new Http Request
            var xhttp1 = new XMLHttpRequest();
 
            // set the request method and data file
            xhttp1.open('GET', encodeURI("rivieren.json"));
            
            //specify what must be done with the geojson data to the layer when request is succesfull
            xhttp1.onload = function() {
              if (xhttp1.readyState === 4) {
                  // add the json data to the geojson layer we created before!
                  geojson1.addData(JSON.parse(xhttp1.responseText));
                } else {
                  alert('Request failed.  Returned status of ' + xhttp1.status);
                }
            };
            
            // send the request
            xhttp1.send();





var geojson2 = L.geoJson(null,{
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
}).addTo(map);
        // new Http Request
            var xhttp2 = new XMLHttpRequest();
 
            // set the request method and data file
            xhttp2.open('GET', encodeURI("amerika.json"));
            
            //specify what must be done with the geojson data to the layer when request is succesfull
            xhttp2.onload = function() {
              if (xhttp2.readyState === 4) {
                  // add the json data to the geojson layer we created before!
                  geojson2.addData(JSON.parse(xhttp2.responseText));
                } else {
                  alert('Request failed.  Returned status of ' + xhttp2.status);
                }
            };
            
            // send the request
            xhttp2.send();