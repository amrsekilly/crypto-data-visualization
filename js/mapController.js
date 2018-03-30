
 // import the cryptocurrency icons
const bitcoin = "/market-data-project/images/icons/btc@2x.png";
const ethereum = "/market-data-project/images/icons/eth@2x.png";
const bitcoinCash = "/market-data-project/images/icons/bch@2x.png";
const litecoin = "/market-data-project/images/icons/ltc@2x.png";
const ripple = "/market-data-project/images/icons/xrp@2x.png";
const dash = "/market-data-project/images/icons/dash@2x.png";

// import the fiat currency icons 
const usd = "/market-data-project/images/icons/usd@2x.png";
const usdt = "/market-data-project/images/icons/usdt@2x.png";
const eur = "/market-data-project/images/icons/eur@2x.png";
const jpy = "/market-data-project/images/icons/jpy@2x.png";
const gbp = "/market-data-project/images/icons/gbp@2x.png";


// make sure that the map is loaded to the page
if ($("#map").length != 0) {

  // the exchange centers 
  var Bitbank = {
    "type": "Feature",
    "properties": {
      "logo": "/market-data-project/images/exchange-centers/bitbank.png",
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

  var Bitmex = {
    "type": "Feature",
    "properties": {
      "logo": "/market-data-project/images/exchange-centers/bitfinex.png",
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
      "logo": "/market-data-project/images/exchange-centers/Bitso.png",
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
      "logo": "/market-data-project/images/exchange-centers/Bitstamp.png",
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
      "logo": "/market-data-project/images/exchange-centers/btc-box.jpg",
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
      "logo": "/market-data-project/images/exchange-centers/btcc.jpg",
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
      "logo": "/market-data-project/images/exchange-centers/cex-io.png",
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
      "logo": "/market-data-project/images/exchange-centers/coincheck.jpg",
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
      "logo": "/market-data-project/images/exchange-centers/coinfloor.png",
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
      "logo": "/market-data-project/images/exchange-centers/gopax.png",
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
      "logo": "/market-data-project/images/exchange-centers/huobi.jpg",
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
      "logo": "/market-data-project/images/exchange-centers/itbit.png",
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
      "logo": "/market-data-project/images/exchange-centers/kraken.png",
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
      "logo": "/market-data-project/images/exchange-centers/okCoin.jpeg",
      "name": "OKCoin",
      "currencies": [bitcoin, ethereum, litecoin, usd],
      "country": "Hong Kong",
      "iconSize": 10
    },
    "geometry": {
      "type": "Point",
      "coordinates": [114.182376,
      22.281485
      ]
    }
  };

  var OKEx = {
    "type": "Feature",
    "properties": {
      "logo": "/market-data-project/images/partners/bitbank.png",
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
      "logo": "/market-data-project/images/exchange-centers/surbtc.png",
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
      "logo": "/market-data-project/images/exchange-centers/surbtc.png",
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
      "logo": "/market-data-project/images/exchange-centers/surbtc.png",
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
      "logo": "/market-data-project/images/exchange-centers/theRock.png",
      "name": "The Rock",
      "currencies": [bitcoin, ethereum, litecoin, bitcoinCash, ripple, dash, eur],
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
      "logo": "/market-data-project/images/exchange-centers/unocoin.png",
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
      "logo": "/market-data-project/images/exchange-centers/vaultoro.png",
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
      "logo": "/market-data-project/images/exchange-centers/Zaif.png",
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
      
      Bitso,
      Bitstamp,
     
      CEXIO,
      Coincheck,
    
      Huobi,

      Kraken,
     
      TheRock,
    
    ]
  };

  var dashData = {
    "type": "FeatureCollection",
    "features": [
      CEXIO,
      Coincheck,
      Huobi,
      Kraken,
      OKEx
    ]
  };

  var usdData = {
    "type": "FeatureCollection",
    "features": [
      Bitmex,

      Bitstamp,

      BTCC,
      CEXIO,

      Coinfloor,
  
      Kraken,
      OKCoin,
     
    ]
  };

  var usdtData = {
    "type": "FeatureCollection",
    "features": [
      Huobi,
      ItBit,
      OKEx,
    ]
  };

  var eurData = {
    "type": "FeatureCollection",
    "features": [
   
      Bitstamp,
   
      CEXIO,
   
      Coinfloor,
     
      Kraken,
    
      TheRock
    ]
  };

  var jpyData = {
    "type": "FeatureCollection",
    "features": [
      Bitbank,
   
      BTCBox,
   
      Coincheck,
   
      Kraken,
     
      Zaif
    ]
  };

  var gbpData = {
    "type": "FeatureCollection",
    "features": [
      Coinfloor,
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
                    .map((currency, i) => !(i % 3) && i ? `<span><img src=${currency} style="max-width:25px" /></span><br>` : `<span><img src=${currency} style="max-width:25px" /></span>`)
                    .join('')
                        }
                </div>
              </div>
              
            </div>
          `)
        .addTo(map);
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
      // fiat currency buttons
      case 'usd':
        updateMap(usdData);
        break;
      case 'usdt':
        updateMap(usdtData);
        break;
      case 'eur':
        updateMap(eurData);
        break;
      case 'jpy':
        updateMap(jpyData);
        break;
      case 'gbp':
        updateMap(gbpData);
        break;
      // by default select the bitcoin
      default:
        updateMap(bitcoinData);
        break;
    }
  }
}

$(document).ready(function () {
  $('.currency-dropdown').dropdown({
    onChange: function (value) {
      console.log("new value: ", value);
      selectCurrency(value);
    }
  });
});
