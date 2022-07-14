import {
  mainHeatArray,
  mainWetBulbArray,
  mainCropYieldArray,
  mainSeaLevelRiseArray,
  mainFireArray,
  mainEconomicDamageArray,
} from "./ClimateData";

import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(4.5);
  const [layer, setLayer] = useState(0);

  const stateAbbrvArray = [
    "AL",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/jkerr772/cl5fi0zwz000214p39rnnx0vt",
      center: [lng, lat],
      zoom: zoom,
      minZoom: 4,
      maxZoom: 9,
    });

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false
      });


    map.current.on("load", () => {
      mainHeatArray.map((state, index) => {
        map.current.on("mouseenter", stateAbbrvArray[index], (e) => {
          map.getCanvas().style.cursor = "pointer";

          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });
        return map.current.addLayer(
          {
            id: stateAbbrvArray[index],
            type: "fill",
            "source-layer": "albersusa",
            source: "composite",
            filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
            paint: {
              "fill-color": [
                "match",
                ["get", "county_name"],
                ...mainHeatArray[index],
              ],
            },
          },
          "county-points",
          "county-boundaries"
        );
      });

      //   if (layer === 2) {
      //     console.log("2")
      //     map.current.eachLayer(function (layer) {
      //       map.current.removeLayer(layer)
      //   });
      // }

      map.current.addLayer(
        {
          id: "countyLines",
          type: "line",
          "source-layer": "albersusa",
          source: "composite",
          // filter: ["!=", "HI", "state_abbrev"],
          visibility: [
            "match",
            ["get", "state_name"],
            "Hawaii",
            "none",
            "none",
          ],
          paint: {
            "line-width": [
              "match",
              ["get", "state_name"],
              "Hawaii",
              0,
              "Alaska",
              0,
              "Puerto Rico",
              0,
              0.5,
            ],
            "line-blur": 2,
          },
        },

        "state-points"
      );
      map.current.addSource({
        id: "cities",
        type: "symbol",
        source: "jkerr772.cl5fk7b3z1js520kt1vmo78qp-2pbtg",
      });
      // add markers to map
    });

    // map.current.on('idle', () => {
    //   if (layer === 2) {
    //     console.log("2");
    //     mainHeatArray.map((state, index) => {
    //       map.removeLayer(stateAbbrvArray[index]);
    //       map.removeSource("composite")
    //     })
    //     // mainWetBulbArray.map((state, index) => {
    //     //   return map.current.addLayer(
    //     //     {
    //     //       id: stateAbbrvArray[index],
    //     //       type: "fill",
    //     //       "source-layer": "albersusa",
    //     //       source: "composite",
    //     //       filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
    //     //       paint: {
    //     //         "fill-color": [
    //     //           "match",
    //     //           ["get", "county_name"],
    //     //           ...mainWetBulbArray[index],
    //     //         ],
    //     //       },
    //     //     },
    //     //     "county-points",
    //     //     "county-boundaries"
    //     //   );
    //     // });
    //   }

    //  })
  });

  useEffect(() => {
    switch (layer) {
      case 1:
        console.log("1");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainHeatArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainHeatArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });

        break;

      case 2:
        console.log("2");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainWetBulbArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainWetBulbArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });
        break;

      case 3:
        console.log("3");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainCropYieldArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainCropYieldArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });
        break;
      case 4:
        console.log("4");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainSeaLevelRiseArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainSeaLevelRiseArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });
        break;
      case 5:
        console.log("5");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainFireArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainFireArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });
        break;
      case 6:
        console.log("6");
        mainHeatArray.map((state, index) => {
          if (map.current.getLayer(stateAbbrvArray[index])) {
            map.current.removeLayer(stateAbbrvArray[index]);
          }
        });
        mainEconomicDamageArray.map((state, index) => {
          return map.current.addLayer(
            {
              id: stateAbbrvArray[index],
              type: "fill",
              "source-layer": "albersusa",
              source: "composite",
              filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
              paint: {
                "fill-color": [
                  "match",
                  ["get", "county_name"],
                  ...mainEconomicDamageArray[index],
                ],
              },
            },
            "county-points",
            "county-boundaries"
          );
        });
        break;
    }
  }, [layer]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className="main-wrapper">
        <h1>Climate Change Map</h1>
        <div className="layer-picker">
          <h2>Switch Datasets</h2>
          <div className="switch">
            <div onClick={() => setLayer(1)}>Heat</div>
            <div onClick={() => setLayer(2)}>Wet Bulb</div>
            <div onClick={() => setLayer(3)}>Crop Yield</div>
            <div onClick={() => setLayer(4)}>Sea Level Rise</div>
            <div onClick={() => setLayer(5)}>Very Large Fires</div>
            <div onClick={() => setLayer(6)}>Economic Damage</div>
          </div>
        </div>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
