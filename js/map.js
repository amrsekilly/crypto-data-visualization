
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
  // disable the double click zoom
  // map.doubleClickZoom.disable();
  // disable the touch to zoom on phones 
  map.touchZoomRotate.disable();
  // disable scrolling on mobile devices 
  // map.dragPan.disable();

  // add the legend to the map 
  var legend = document.getElementById('legend');

  [{
    size: 30,
    text: "< 1TB"
  },
    {
      size: 25,
      text: "< 500GB"
    },
    {
      size: 16,
      text: "< 500GB"
    }].forEach(function (radius) {
    legend.insertAdjacentHTML('beforeend', '<span class="circle" style="width:' + radius.size + 'px;top: ' + radius.size / 5 + 'px;height:' + radius.size + 'px;"></span><span>'+ radius.text +'</span>');
  });


  // wait until the map is displayed
  map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
      "id": "markers",
      "type": "circle",
      "paint": {
        "circle-radius": {
          property: "iconSize",
          stops: [
            [10, 8],
            [20, 13],
            [30, 15]
          ]
        },
        "circle-color": "#00FFBA",
      },
      "layout": {
        "visibility": "visible",
      },
      "source": {
        "type": "geojson",
        "data": bicoinData,
      }
    });

    // show the popup 
    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
    });

    // to show the popup 
    function showPopup(e) {

      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';
      var coordinates = e.features[0].geometry.coordinates.slice();
      var description = e.features[0].properties;
      var regex = /\[\s*(.*?)\s*\]/g;
      m = regex.exec(description.currencies);
      var currencies = m[1].split(",");

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates)
        .setHTML(`
            <div >
              <img class="exchange-logo" src="${ description.logo}" />
              <p class="exchange-country"> 
                ${ description.country}
              </p>
             ${
          currencies
            // to make sure that each row contains at most 3 logos
            .map((currency, i) => !(i % 2) && i ? `<span><img src=${currency} /></span><br>` : `<span><img src=${currency} /></span>`)
            .join('')
          }
            </div>
          `)
        .addTo(map);
    }

    map.on('mouseenter', 'markers', function (e) {
      showPopup(e);
    });

    // map.on("click", 'markers', function (e) {
    //   showPopup(e);
    // });

    map.on('mouseleave', 'markers', function () {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });
  });

  // update the map with new data
  // getojson is the new geojson data object
  function updateMap(geojson) {
    // get the current layer you're showing the markers on and update its data
    map.getSource('markers').setData(geojson);
  }


  // handle the currency changes
  function changeCurrency() {
    let currency = document.forms[0];
    for (var i = 0; i < currency.length; i++) {
      if (currency[i].checked) {
        switch (currency[i].value) {
          // Add more data sources to the cryptocurrency buttons 
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