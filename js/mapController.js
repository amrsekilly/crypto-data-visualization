
 // import the cryptocurrency icons
const bitcoin = "/market-data-project/images/icons/bitcoin.png";
const ethereum = "/market-data-project/images/icons/ethereum.png";
const bitcoinCash = "/market-data-project/images/icons/bitcoin-cash.png";
const litecoin = "/market-data-project/images/icons/litecoin.png";
const etc = "/market-data-project/images/icons/etc.png";
const ripple = "/market-data-project/images/icons/ripple.png";
const dash = "/market-data-project/images/icons/dash.png";
const eos = "/market-data-project/images/icons/eos.png";
const neo = "/market-data-project/images/icons/neo.png";
const omisego = "/market-data-project/images/icons/omisego.png";
const monero = "/market-data-project/images/icons/monero.png";
const qtum = "/market-data-project/images/icons/qtum.png";
const stellar = "/market-data-project/images/icons/stellar.png";
const zcash = "/market-data-project/images/icons/zcash.png";
const gbp = "/market-data-project/images/icons/gbp.png";
const jpy = "/market-data-project/images/icons/jpy.png";
const eur = "/market-data-project/images/icons/euro.png";
const usdt = "/market-data-project/images/icons/usdt.png";
const dollar = "/market-data-project/images/icons/dollar.png";
const pln = "/market-data-project/images/icons/pln.png";
const rub = "/market-data-project/images/icons/rub.png";
const uah = "/market-data-project/images/icons/uah.png";
const krw = "/market-data-project/images/icons/krw.png";
const gold = "/market-data-project/images/icons/gold.png";
const pen = "/market-data-project/images/icons/pen.png";

// to map range of values to other range 
function mapRange(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

// make sure that the map is loaded to the page
if ($("#map").length != 0) {

  // A flag to indicate whether the user clicked on the marker or not
  var markerClicked = false;
  var popupIsOpened = false;

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

    

map.on('load', function () {

  var sourceData = {
        type: "FeatureCollection",
        features: []
      };


  map.addSource("countries", {
    "type": "geojson",
    "data": sourceData
  });

  map.addLayer({
    "id": "country-fills",
    "type": "fill",
    "source": "countries",
    "layout": {},
    "paint": {
      "fill-color": {
        property: "iconSize",
        stops: [
          [10, "#77E2FC"],
          [20, "#007999"],
          [30, "#00ffb3"]
        ]
      },
      "fill-opacity": 0.7
    },
  }, 'country-label-lg');

  map.addLayer({
    "id": "country-borders",
    "type": "line",
    "source": "countries",
    "layout": {},
    "paint": {
      "line-color": "#FFFFFF",
      "line-width": 1
    },
    "filter": ["==", "name", ""]
  });

  map.addLayer({
    "id": "country-fills-hover",
    "type": "fill",
    "source": "countries",
    "layout": {},
    "paint": {
      "fill-color": {
        property: "iconSize",
        stops: [
          [10, "#77E2FC"],
          [20, "#007999"],
          [30, "#00ffb3"]
        ]
      },
      "fill-opacity": 1
    },
    "filter": ["==", "name", ""]
  }, 'country-label-lg');

  $.get( "/market-data-project/js/ne_50m_admin_0_countries.geojson", function( data ) 
    {

      var features = data.features;

      var sourceFeatures = [];
      for (var i = 0; i < features.length; i ++) {
        var feature = features[i];

        switch (feature.properties.name) {
          case 'Japan':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, jpy];
            feature.properties.iconSize = 30;
            feature.properties.coordinates = [86.795722, 6.211737];
            feature.properties.exchange_country = 4;
            feature.properties.trading = "$191M";
            sourceFeatures.push(feature);
            break;
          case 'China':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, usdt, eos, neo, monero, etc, qtum, omisego, zcash, stellar, dollar, eur, jpy, gbp];
            feature.properties.iconSize = 30;
            feature.properties.coordinates = [31.600410,14.504007];
            feature.properties.exchange_country = 6;
            feature.properties.trading = "$1.7B";
            sourceFeatures.push(feature);
            break;
          case 'India':
            feature.properties.currencies = [bitcoin];
            feature.properties.iconSize = 30;
            feature.properties.coordinates = [145.506660,5.162256];
            feature.properties.exchange_country = 1;
            feature.properties.trading = "$330K";
            sourceFeatures.push(feature);
            break;
          case 'Italy':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, zcash, eur];
            feature.properties.iconSize = 10;
            feature.properties.coordinates = [69.150057,36.959818];
            feature.properties.exchange_country = 1;
            feature.properties.trading = "$468K";
            sourceFeatures.push(feature);
            break;
          case 'Mexico':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dollar];
            feature.properties.iconSize = 10;
            feature.properties.coordinates = [-45.189816,10.681159];
            feature.properties.exchange_country = 1;
            feature.properties.trading = "$1.6M";
            sourceFeatures.push(feature);
            break;
          case 'UK':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, usdt, eos, monero, etc, zcash, dollar, eur, rub, uah, pln, gold];
            feature.properties.iconSize = 30;
            feature.properties.coordinates = [48.211738,35.559266];
            feature.properties.exchange_country = 5;
            feature.properties.trading = "$124M";
            sourceFeatures.push(feature);
            break;    
          case "USA":
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, dash, dollar, eur, jpy, gbp];
            feature.properties.iconSize = 30;
            feature.properties.coordinates = [-19.174191,18.666059];
            feature.properties.exchange_country = 3;
            feature.properties.trading = "$298M";
            sourceFeatures.push(feature);
            break;
          case "Chile":
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, pen, dollar];
            feature.properties.iconSize = 10;
            feature.properties.coordinates = [-24.895033,-45.768910];
            feature.properties.exchange_country = 1;
            feature.properties.trading = "$248K";
            sourceFeatures.push(feature);
            break;
          case 'Korea':
            feature.properties.currencies = [bitcoin, ethereum, bitcoinCash, litecoin, ripple, zcash, eur, krw];
            feature.properties.iconSize = 20;
            feature.properties.coordinates = [127.978458,37.663998];
            feature.properties.exchange_country = 2;
            feature.properties.trading = "$22M";
            sourceFeatures.push(feature);
            break;   
          default:
            break;
        }
      }

      sourceData.features= sourceFeatures;
      map.getSource('countries').setData(sourceData);
      $("#loading_screen").hide();
      
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
    var coordinates = JSON.parse(e.features[0].properties.coordinates);
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
          <div class="pop-title">${ description.name}</div>
          <div class="exchange-container">
          <div class="exchange-number">${ description.exchange_country}</div><div class="exch-right-col"><div class="part-one">Participating</div><div class="part-two"> ${description.exchange_country > 1 ? 'Exchanges' : 'Exchange'}</div></div>
          </div>
          <div class="vol">
           <div class="num">${ description.trading }</div> <span class="vol-copy">avg 24hr vol</span>
          </div>
          <div style="text-align: left;max-width:154px;margin:0 auto;">
            <div style="display: inline-block;">
            ${
        currencies
        // to make sure that each row contains at most 3 logos
          .map((currency, i) => !(i % 4) && i ? `<span><img src=${currency} style="max-width:25px;" /></span>` : `<span><img src=${currency} style="max-width:25px;" /></span>`)
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

  map.on("click", 'country-fills', function (e) {
    if (markerClicked) {
      map.getCanvas().style.cursor = '';
      popup.remove();
      popupIsOpened = false;
      markerClicked = false;
    } else {
      if (!popupIsOpened) {
        showPopup(e);
        popupIsOpened = false;
      }
      markerClicked = true;
    }
  });

  // When the user moves their mouse over the states-fill layer, we'll update the filter in
  // the state-fills-hover layer to only show the matching state, thus making a hover effect.
  map.on("mousemove", "country-fills", function(e) {
    if (!popupIsOpened && !markerClicked) {
      map.setFilter("country-fills-hover", ["==", "name", e.features[0].properties.name]);

      showPopup(e);
      popupIsOpened = true;
    }
  });

  // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
  map.on("mouseleave", "country-fills", function() {

    if(!markerClicked) {
      map.setFilter("country-fills-hover", ["==", "name", ""]);
    }

    if (!markerClicked && popupIsOpened) {
      popup.remove();
      popupIsOpened = false;
    }
  });
});


  // add the legend to the map
  var legend = document.getElementById('legend');

  [{
    size: 18,
    color: "#00ffb3",
    text: "X < $3.5M"
  },
    {
      size: 18,
      text: "$3.5M < X < $50M",
      color: "#007999"
    },
    {
      size: 18,
      text: "$50M < X",
      color: "#77E2FC"
    }].forEach(function (radius) {
    legend.insertAdjacentHTML('beforeend', '<div class="legend-row"><span class="circle" style="width:' + radius.size + 'px; opacity: 0.9; border: 2px solid white; background-color: ' + radius.color + '; top: 4px; height:' + radius.size + 'px;"></span><span>' + radius.text + '</span></div>');
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
