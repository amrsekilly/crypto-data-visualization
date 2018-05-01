
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
      "name": "BitBank",
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

  var Bitfinex = {
    "type": "Feature",
    "properties": {
      "name": "Bitfinex",
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

  var Bitmex = {
    "type": "Feature",
    "properties": {
      "name": "Bitmex",
      "currencies": [bitcoin, usd],
      "country": "Seychelles",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.491977,
        4.679574
      ]
    }
  };

  var Bitso = {
    "type": "Feature",
    "properties": {
      "name": "Bitso",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple],
      "country": "Mexico",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -99.133208,
        19.432608
      ]
    }
  };

  var Bitstamp = {
    "type": "Feature",
    "properties": {
      "name": "Bitstamp",
      "currencies": [bitcoin, ethereum, bitcoinCash, litecoin, ripple, usd, eur],
      "country": "Luxembourg",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        6.129583,
        49.815273
      ]
    }
  };


  var BTCBox = {
    "type": "Feature",
    "properties": {
      "name": "BTCBox",
      "currencies": [bitcoin, jpy],
      "country": "Japan",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        138.252924,
        36.204824
      ]
    }
  };

  var BTCC = {
    "type": "Feature",
    "properties": {
      "name": "BTCC",
      "currencies": [bitcoin, ethereum, usd],
      "country": "Hong Kong",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        114.109497,
        22.396428
      ]
    }
  };

  var CEXIO = {
    "type": "Feature",
    "properties": {
      "name": "CEX.IO",
      "currencies": [bitcoin, ethereum, bitcoinCash, ripple, dash, usd, eur],
      "country": "UK",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.098821,
        51.523144
      ]
    }
  };

  var Coincheck = {
    "type": "Feature",
    "properties": {
      "name": "Coincheck",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, ripple, dash, jpy],
      "country": "Japan",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.691706,
        35.689487
      ]
    }
  };

  var Coinfloor = {
    "type": "Feature",
    "properties": {
      "name": "Coinfloor",
      "currencies": [bitcoin, bitcoinCash, usd, eur, gbp],
      "country": "UK",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        -0.112312,
        51.516728
      ]
    }
  };

  var GoPax = {
    "type": "Feature",
    "properties": {
      "name": "GoPax",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash],
      "country": "South Korea",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [127.059108,
        37.511683
      ]
    }
  };

  var Huobi = {
    "type": "Feature",
    "properties": {
      "name": "Huobi",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, ripple, dash, usdt],
      "country": "China",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [116.407396,
        39.9042
      ]
    }
  };

  var ItBit = {
    "type": "Feature",
    "properties": {
      "name": "ItBit",
      "currencies": [bitcoin, usdt],
      "country": "USA",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-73.975427,
       40.753289
      ]
    }
  };

  var Kraken = {
    "type": "Feature",
    "properties": {
      "name": "Kraken",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, ripple, dash, usd, eur, jpy],
      "country": "USA",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-122.400874,
        37.790047
      ]
    }
  };

  var OKCoin = {
    "type": "Feature",
    "properties": {
      "name": "OKCoin",
      "currencies": [bitcoin, ethereum, litecoin, usd],
      "country": "Hong Kong",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [116.407396,
      39.904200
      ]
    }
  };

  var OKEx = {
    "type": "Feature",
    "properties": {
      "name": "OKEx",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, dash, usdt],
      "country": "Belize",
      "iconSize": 30
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-88.181928,
        17.493383
      ]
    }
  };

  var SurBTC = {
    "type": "Feature",
    "properties": {
      "name": "SurBTC",
      "currencies": [bitcoin, ethereum, bitcoinCash],
      "country": "Chile",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-70.59851,
        -33.406555
      ]
    }
  };

  var SurBTC2 = {
    "type": "Feature",
    "properties": {
      "name": "SurBTC",
      "currencies": [bitcoin, ethereum, bitcoinCash],
      "country": "Colombia",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-74.297333, 4.570868]
    }
  };

  var SurBTC3 = {
    "type": "Feature",
    "properties": {
      "name": "SurBTC",
      "currencies": [bitcoin, ethereum, bitcoinCash],
      "country": "Peru",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-75.015152, -9.189967]
    }
  };

  var TheRock = {
    "type": "Feature",
    "properties": {
      "name": "The Rock",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, ripple, eur],
      "country": "Malta",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [14.514553, 35.898908]
    }
  };

  var Unocoin = {
    "type": "Feature",
    "properties": {
      "name": "Unocoin",
      "currencies": [bitcoin],
      "country": "India",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [77.559957, 12.985186]
    }
  };

  var Vaultoro = {
    "type": "Feature",
    "properties": {
      "name": "Vaultoro",
      "currencies": [bitcoin],
      "country": "UK",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-3.157272, 51.479222]
    }
  };


  var Zaif = {
    "type": "Feature",
    "properties": {
      "name": "Zaif",
      "currencies": [bitcoin, ethereum, bitcoinCash, jpy],
      "country": "Japan",
      "iconSize": 20
    },
    "geometry": {
      "type": "Point",
      "coordinates": [135.497341, 34.682592]
    }
  };


  // the places' geojson data for each cryptocurrency
  var bitcoinData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,
      Bitmex,
      Bitfinex,
      Bitso,
      Bitstamp,
      BTCBox,
      BTCC,
      CEXIO,
      Coincheck,
      Coinfloor,
      GoPax,
      Huobi,
      ItBit,
      Kraken,
      OKCoin,
      OKEx,
      SurBTC,
      SurBTC2,
      SurBTC3,
      TheRock,
      Unocoin,
      Vaultoro,
      Zaif
    ]
  };

  var ethereumData = {
    "type": "FeatureCollection",
    "features": [
      Bitso,
      Bitstamp,
      Bitfinex,
      
      BTCC,
      CEXIO,
      Coincheck,
      
      GoPax,
      Huobi,
      
      Kraken,
      OKCoin,
      OKEx,
      SurBTC,
      SurBTC2,
      SurBTC3,
      TheRock,
     
      Zaif
    ]
  };

  var bitcoinCashData = {
    "type": "FeatureCollection",
    "features": [
      Bitso,
      Bitstamp,
      Bitfinex,
      CEXIO,
      Coincheck,
      Coinfloor,
      GoPax,
      Huobi,
      Kraken,
      OKEx,
      SurBTC,
      SurBTC2,
      SurBTC3,
      TheRock,
      Zaif
    ]
  };

  var litecoinData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,
      Bitso,
      Bitstamp,
      Bitfinex,
      Coincheck,
      GoPax,
      Huobi,
      Kraken,
      OKCoin,
      OKEx,
      TheRock,
    ]
  };

  var rippleData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,
      Bitfinex,
      Bitso,
      Bitstamp,
      CEXIO,
      Coincheck,
      Huobi,
      Kraken,
      TheRock
    ]
  };

  var dashData = {
    "type": "FeatureCollection",
    "features": [
      Bitfinex,
      CEXIO,
      Coincheck,
      Huobi,
      Kraken,
      OKEx
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
    size: 16,
    color: "#00ffb3",
    text: "< 1TB"
  },
    {
      size: 16,
      text: "< 500GB",
      color: "#007999"
    },
    {
      size: 16,
      text: "< 500GB",
      color: "#77E2FC"
    }].forEach(function (radius) {
    legend.insertAdjacentHTML('beforeend', '<span class="circle" style="width:' + radius.size + 'px; background-color: '+ radius.color +'; top: 2px; height:' + radius.size + 'px;"></span><span>'+ radius.text +'</span>');
  });


  // wait until the map is displayed
  map.on('load', function () {
    // Add a layer showing the places.
    map.addLayer({
      "id": "markers",
      "type": "circle",
      "paint": {
        "circle-radius": 8,
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
