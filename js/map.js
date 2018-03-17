
 // import the cryptocurrency icons
 const bitcoin = "images/icons/btc.png";
 const ethereum = "images/icons/eth.png";
 const litecoin = "images/icons/ltc.png";
 const bch = "images/icons/bch.png";
 const btcz = "images/icons/btcz.png";

// make sure that the map is loaded to the page
if ($("#map").length != 0) {

  // the places' geojson data for each cryptocurrency
  var bicoinData = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, litecoin, bch, btcz],
          "country": "Hong Kong",
          "iconSize": 20
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.201469,
            9.712924
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, ethereum, bch, btcz],
          "country": "Korea",
          "iconSize": 10
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            40.201469,
            9.712924
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "country": "Thailand",
          "currencies": [bitcoin, litecoin, ethereum, bch, btcz],
          "iconSize": 30
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-63.29223632812499, -18.28151823530889]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, ethereum, bch, btcz],
          "country": "USA",
          "iconSize": 10
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-53.29223632812499, -28.28151823530889]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, litecoin, ethereum, bch],
          "country": "Russia",
          "iconSize": 20
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            20.201469,
            19.712924
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, litecoin, ethereum, btcz],
          "country": "Chiang Mai",
          "iconSize": 20
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            49.902097,
            64.205112
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "logo": "https://i.imgur.com/2IVXVHL.png",
          "currencies": [bitcoin, litecoin, bch, btcz],
          "country": "Kansas",
          "iconSize": 20
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-96.324462890625,
            40.024695711685304
          ]
        }
      },
    ]
  };

  var ethereumData = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "currencies": [bitcoin, litecoin, bch, btcz],
        "country": "Hong Kong",
        "iconSize": 20
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          11.201469,
          9.712924
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "currencies": [bitcoin, ethereum, bch, btcz],
        "country": "Korea",
        "iconSize": 10
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          40.201469,
          9.712924
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "country": "Thailand",
        "currencies": [bitcoin, litecoin, ethereum, bch, btcz],
        "iconSize": 30
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-63.29223632812499, -18.28151823530889]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "currencies": [bitcoin, ethereum, bch, btcz],
        "country": "USA",
        "iconSize": 10
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-78.29223632812499, -14.28151823530889]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "currencies": [bitcoin, litecoin, ethereum, btcz],
        "country": "Chiang Mai",
        "iconSize": 20
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          55.902097,
          32.205112
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "logo": "https://i.imgur.com/2IVXVHL.png",
        "currencies": [bitcoin, litecoin, bch, btcz],
        "country": "Kansas",
        "iconSize": 20
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-54.324462890625,
          40.024695711685304
        ]
      }
    },
    ]
  };

  // update the map with new data
  function updateMap(geojson) {

    if (map) {
      // remove the old GL Map to free the used resources before creating a new one
      map.remove();
    }
    
    // MapBox's API key
    mapboxgl.accessToken = 'pk.eyJ1IjoiYW1yc2VraWxseSIsImEiOiJjamVzbWwxeTc3MWV6MzNvMTA4NnE1cGRqIn0.gduDJTnrg9nbXGLe0GSiIw';
    // create the Map with the custom styles I designed
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/amrsekilly/cjesn29l429772rphyzf63dbk'
    });
    // add the map controls 
    map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    // disable map zoom when using scroll
    map.scrollZoom.disable();

    
    // wait until the map is displayed
    map.on('load', function () {

      // Add a layer showing the places.
      map.addLayer({
        "id": "markers",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": geojson
        }
      });

      // loop over the exchange centers 
      geojson.features.forEach(function (marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundColor = '#00FFBA';
        el.style.width = marker.properties.iconSize / 16 + 'em';
        el.style.height = marker.properties.iconSize / 16 + 'em';

        // add marker to map
        var m = new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(new mapboxgl.Popup({
            offset: 25,
            closeButton: false
          }) // add popups
            .setHTML(`
            <div >
              <img class="exchange-logo" src="${marker.properties.logo}" />
              <p class="exchange-country"> 
                ${marker.properties.country}
              </p>
              ${
              marker.properties.currencies
                // to make sure that each row contains at most 3 logos
                .map((currency, i) => !(i % 2) && i ? `<span><img src="${currency}" /></span><br>` : `<span><img src="${currency}" /></span>`)
                .join('')
              }
            </div>
          `))
          .addTo(map);
      });

      // detect hovering over a marker 
      // map.on('click', (e) => {
      //   console.log("mouse moved: ", e.lngLat);

      // });

    });
  }

  // call the map function once to display the default data 
  updateMap(bicoinData);

  // handle the currency changes
  function changeCurrency() {
    let currency = document.forms[0];
    for (var i = 0; i < currency.length; i++) {
      if (currency[i].checked) {
        switch (currency[i].value) {
          case 'bitcoin':
            updateMap(bicoinData);
            break;
          case 'ethereum':
            updateMap(ethereumData);
            break;
        
          default:
            updateMap(bicoinData);
            break;
        }
      }
    }
  }

}