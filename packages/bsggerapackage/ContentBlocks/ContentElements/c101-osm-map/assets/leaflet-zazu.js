/* zazu.berlin – die Schwarzwald Werbeagentur in Berlin (c) JavaScript 20190509
author: Thomas Hezel, Berlin
Leaflet Map JavaScript - variable lati and longi coming from FLUID
*/

jQuery(document).ready(function ($) {

    //in jquery click call for leaflet js
    $('#activateMapBtn, #map').click(function () {

        var markerOrt1 = L.icon({
            iconUrl: '/fileadmin/Resources/Public/Icons/Map/map-icon-schwab.png',
            shadowUrl: '/fileadmin/Resources/Public/Icons/Map/map-icon-schwab-shadow.png',

            iconSize: [26, 102], // size of the icon
            shadowSize: [20, 65], // size of the shadow
            iconAnchor: [13, 102], // point of the icon which will correspond to marker's location
            shadowAnchor: [0, 65],  // the same for the shadow
            popupAnchor: [-6, -100] // point from which the popup should open relative to the iconAnchor
        });

        /***
        * last figure here is giving a zoomfactor: 5 is aprox. Europe, 10 is aprox. a region
        ***/
        var map = L.map('map', { zoomControl: false }).setView([lati, longi], 14);

        /*above remove control and put a new one on bottomleft*/
        map.addControl(L.control.zoom({ position: 'bottomleft' }));

        /*tiles from mapBox
            L.tileLayer('https://{s}.tiles.mapbox.com/v3/uhradone.ija63bia/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        }).addTo(map);
        */

        /*tiles from openStreetMap*/
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a>',
            maxZoom: 18
        }).addTo(map);

        L.marker([lati1, longi1], { icon: markerOrt1 }).addTo(map).bindPopup("Fliesenschwab<br><b>Fluorn-Winzeln</b>").openPopup();

        //jquery  additions
        $('.dataWarning').addClass('hidden');
        $('#map').addClass('dontShowBackground');


        //on click function
    });


});
