
 // import the cryptocurrency icons
const bitcoin = "/market-data-project/images/icons/bitcoin-icon.png";
const ethereum = "/market-data-project/images/icons/ethereum-icon.png";
const bitcoinCash = "/market-data-project/images/icons/bitcoin-cash-icon.png";
const litecoin = "/market-data-project/images/icons/litecoin-icon.png";
const ripple = "/market-data-project/images/icons/ripple-icon.png";
const dash = "/market-data-project/images/icons/dash-icon.png";
const gbp = "/market-data-project/images/icons/gbp.png";
const jpy = "/market-data-project/images/icons/jpy.png";
const eur = "/market-data-project/images/icons/eur.png";
const usdt = "/market-data-project/images/icons/usdt.png";
const usd = "/market-data-project/images/icons/usd.png";

// to map range of values to other range 
function mapRange(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// make sure that the map is loaded to the page
if ($("#map").length != 0) {

  // the exchange centers 
  var Bitbank = {
    "type": "Feature",
    "properties": {
      "name": "Japan",
      "currencies": [bitcoin, litecoin, ripple, jpy],
      "country": "Japan",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.707731,
        35.659129
      ]
    }
  };

  var Bitfinex = {
    "type": "Feature",
    "properties": {
      "name": "Hong Kong",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Hong Kong",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        114.162979,
        22.280641
      ]
    }
  };

  // Data for countries to highlight.
  var Japan = {
    "type": "Feature",
    "properties": {
      "name": "Japan",
      "currencies": [bitcoin, litecoin, ripple, jpy],
      "country": "Japan",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.707731,
        35.659129
      ]
    }
  };

  var HongKong = {
    "type": "Feature",
    "properties": {
      "name": "Hong Kong",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Hong Kong",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        114.162979,
        22.280641
      ]
    }
  };


  var Belize = {
    "type": "Feature",
    "properties": {
      "name": "Belize",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Belize",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -88.497650,
        17.189877
      ]
    }
  };

  var Chile = {
    "type": "Feature",
    "properties": {
      "name": "Chile",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Chile",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.542969,
        -35.675147
      ]
    }
  };

  var China = {
    "type": "Feature",
    "properties": {
      "name": "China",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "China",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        104.195397,
        35.861660
      ]
    }
  };

  var Colombia = {
    "type": "Feature",
    "properties": {
      "name": "Colombia",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Colombia",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.297333,
        4.570868
      ]
    }
  };

  var India = {
    "type": "Feature",
    "properties": {
      "name": "India",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "India",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.962880,
        20.593684
      ]
    }
  };

  var Luxembourg = {
    "type": "Feature",
    "properties": {
      "name": "Luxembourg",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Luxembourg",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.129583,
        49.815273
      ]
    }
  };

  var Malta = {
    "type": "Feature",
    "properties": {
      "name": "Malta",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Malta",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        14.375416,
        35.937496
      ]
    }
  };

  var Mexico = {
    "type": "Feature",
    "properties": {
      "name": "Mexico",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Mexico",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -102.552784,
        23.634501
      ]
    }
  };

  var Peru = {
    "type": "Feature",
    "properties": {
      "name": "Peru",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Peru",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -75.015152,
        -9.189967
      ]
    }
  };

  var Seychelles = {
    "type": "Feature",
    "properties": {
      "name": "Seychelles",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Seychelles",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        78.962880,
        20.593684
      ]
    }
  };

  var SouthKorea = {
    "type": "Feature",
    "properties": {
      "name": "South Korea",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "South Korea",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        127.766922,
        35.907757
      ]
    }
  };

  var Taipei = {
    "type": "Feature",
    "properties": {
      "name": "Taipei",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "Taipei",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        121.565418,
        25.032969
      ]
    }
  };

  var USA = {
    "type": "Feature",
    "properties": {
      "name": "USA",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, gbp, jpy, eur, usdt, usd],
      "country": "USA",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -95.712891,
        37.090240
      ]
    }
  };


  // the places' geojson data for each cryptocurrency
  var bitcoinData = {
    "type": "FeatureCollection",
    "features": [
      Japan,
      HongKong,
      Belize,
      Chile,
      China,
      Colombia,
      India,
      Luxembourg,
      Malta,
      Mexico,
      Peru,
      Seychelles,
      SouthKorea,
      Taipei,
      USA
    ]
  };

  var ethereumData = {
    "type": "FeatureCollection",
    "features": [
      Bitfinex,

    ]
  };

  var bitcoinCashData = {
    "type": "FeatureCollection",
    "features": [
      Bitfinex,
    ]
  };

  var litecoinData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,

    ]
  };

  var rippleData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,
      Bitfinex,

    ]
  };

  var dashData = {
    "type": "FeatureCollection",
    "features": [
      Bitfinex,
    ]
  };

  // A flag to indicate whether the user clicked on the marker or not
  var markerClicked = false;

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
  // disable the touch to zoom on phones 
  map.touchZoomRotate.disable();
  
  // add the legend to the map 
  var legend = document.getElementById('legend');

  [{
    size: 18,
    color: "#00ffb3",
    text: "< $1.8B"
  },
    {
      size: 18,
      text: "$1.8B to $9B",
      color: "#007999"
    },
    {
      size: 18,
      text: "> $9B",
      color: "#77E2FC"
    }].forEach(function (radius) {
    legend.insertAdjacentHTML('beforeend', '<span class="circle" style="width:' + radius.size + 'px; opacity: 0.9; border: 2px solid white; background-color: ' + radius.color + '; top: 2px; height:' + radius.size + 'px;"></span><span>' + radius.text + '</span>');
  });



  // wait until the map is displayed
  map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
      "id": "markers",
      "type": "circle",
      "paint": {
        "circle-radius": 8,
        // for the outer border width of the circle in pixels.
        "circle-stroke-width": 2,
        // the color of the outer border
        "circle-stroke-color": "#FFF",
        // the circle opacity 
        // from 0 to 1, 
        // 1 means completely solid color 
        // 0 means invisible 
        "circle-opacity": 0.5,
        // to blur the circle color 
        // (from 0 to 1), zero means no blur, and one means maximum blur
        // "circle-blur": 0.4,
        "circle-color": {
          property: "iconSize",
          stops: [
            [10, "#77E2FC"],
            [20, "#007999"],
            [30, "#00ffb3"]
          ]
        },
      },
      "layout": {
        "visibility": "visible",
      },
      "source": {
        "type": "geojson",
        "data": bitcoinData,
      }
    });


    map.addLayer({
      "id": "markers-hover",
      "type": "circle",
      "paint": {
        "circle-radius": 8,
        // for the outer border width of the circle in pixels.
        "circle-stroke-width": 2,
        // the color of the outer border
        "circle-stroke-color": "#FFF",
        // the circle opacity
        // from 0 to 1,
        // 1 means completely solid color
        // 0 means invisible
        "circle-opacity": 0.9,
        // to blur the circle color
        // (from 0 to 1), zero means no blur, and one means maximum blur
        // "circle-blur": 0.4,
        "circle-color": {
          property: "iconSize",
          stops: [
            [10, "#77E2FC"],
            [20, "#007999"],
            [30, "#00ffb3"]
          ]
        },
      },
      "layout": {
        "visibility": "visible",
      },
      "source": {
        "type": "geojson",
        "data": bitcoinData,
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
      var circleSize = description.iconSize;

      

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
              <h2>${ description.name}</h2>
              <p class="exchange-country"> 
                ${ description.country}
              </p>
              <div style="text-align: left;">
                <div style="display: inline-block;">
                ${
                  currencies
                    // to make sure that each row contains at most 3 logos
          .map((currency, i) => !(i % 3) && i ? `<span><img src=${currency} style="max-width:25px;" /></span><br>` : `<span><img src=${currency} style="max-width:25px; margin-right: 7px;" /></span>`)
                    .join('')
                        }
                </div>
              </div>
              
            </div>
          `)
        .addTo(map);


      // change the color of the tooltip depending on the selected circle
      if (circleSize == 10) {
        let tooltip = $(".mapboxgl-popup-tip");
        tooltip.addClass('small-circle');
      } else if (circleSize == 20) {
        let tooltip = $(".mapboxgl-popup-tip");
        tooltip.addClass('medium-circle');
      } else {
        let tooltip = $(".mapboxgl-popup-tip");
        tooltip.addClass('large-circle');
      }
    }

    map.on('mouseenter', 'markers', function (e) {
      if (!markerClicked) {
        showPopup(e);
      }
    });

    map.on("click", 'markers', function (e) {
      showPopup(e);
      markerClicked = true;
    });

    map.on("mousedown", function (e) {
      if (markerClicked) {
        map.getCanvas().style.cursor = '';
        popup.remove();
        markerClicked = false;
      }
    });

    map.on('mouseleave', 'markers', function () {
      if (!markerClicked) {
          map.getCanvas().style.cursor = '';
          popup.remove();
      }
    });

    map.on('mousemove', function(e) {
      var features = map.queryRenderedFeatures(e.point, { layers: ['markers'] });
      map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
      var geojson = {
        type: 'FeatureCollection',
        features: []
      };
      if (!features.length) {
        map.getSource('markers-hover').setData(geojson);
        return;
      }
      geojson.features.push(features[0]);
      map.getSource('markers-hover').setData(geojson);
    });
  });

  // update the map with new data
  // getojson is the new geojson data object
  function updateMap(geojson) {
    // get the current layer you're showing the markers on and update its data
    map.getSource('markers').setData(geojson);
    // gray out the inactive buttons
    updateActiveButton();
  }


  // handle the currency changes
  function changeCurrency() {
    // cryptocurrency
    let currency = document.forms[0];
  
    // insert the data for the cryptocurrencies
    for (var i = 0; i < currency.length; i++) {
      if (currency[i].checked) {
        selectCurrency(currency[i].value);
      }
    }
  }

  function selectCurrency(currency) {
    switch (currency) {
      // cryptocurrency buttons
      case 'bitcoin':
        updateMap(bitcoinData);
        break;
      case 'ethereum':
        updateMap(ethereumData);
        break;
      case 'litecoin':
        updateMap(litecoinData);
        break;
      case 'dash':
        updateMap(dashData);
        break;
      case 'ripple':
        updateMap(rippleData);
        break;
      case 'bitcoinCash':
        updateMap(bitcoinCashData);
        break;
     
      // by default select the bitcoin
      default:
        updateMap(bitcoinData);
        break;
    }
  }
  // zoom range from 0 to 0.9
  // depends on the width of the screen
  // for responsiveness
  $(window).resize(function () {
  // screen width 
  const screenWidth = $(window).width(); 
  let newZoom = mapRange(screenWidth, 0, 1247, 0, 0.9);
    map.setZoom(newZoom);
  });

} // end of map found

function updateActiveButton() {
  var filterVal = 'grayscale(100%)';
  var nofilter = 'grayscale(0%)';
  $('input[type="radio"]:not(:checked) + label')
    .css('filter', filterVal)
    .css('webkitFilter', filterVal)
    .css('mozFilter', filterVal)
    .css('oFilter', filterVal)
    .css('msFilter', filterVal);

  $('input[type="radio"]:checked + label')
    .css('filter', nofilter)
    .css('webkitFilter', nofilter)
    .css('mozFilter', nofilter)
    .css('oFilter', nofilter)
    .css('msFilter', nofilter);
}


$(document).ready(function () {
  
  // show the active button 
  updateActiveButton();

  // for the dropdown menu on phones and small devices
  $('.currency-dropdown').dropdown({
    onChange: function (value) {
      selectCurrency(value);
    }
  });

  // if the user decided to use the divs instead of the radio buttons
  $('.bitcoin, .ethereum, .litecoin, .dash, .ripple, .bitcoinCash').click(function () {
    // click the coin's button 
    $('input[name="currency"]', this).prop("checked", true);
    var selectedCurrency = $(this)[0].classList[4];
    selectCurrency(selectedCurrency);
  });
});
