import {
  mainHeatArray,
  mainWetBulbArray,
  mainCropYieldArray,
  mainSeaLevelRiseArray,
  mainFireArray,
  mainEconomicDamageArray,
  finalData,
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
  const [name, setName] = useState("Heat");
  const [hover, setHover] = useState(false);
  const [hoverData, setHoverData] = useState({
    name: "",
    state: "",
    heat: "",
    wetBulb: "",
    cropYield: "",
    seaLevelRise: "",
    fire: "",
    economicDamage: "",
  });
  // console.log(finalData);
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

    map.current.on("load", () => {
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

      mainHeatArray.map((state, index) => {
        return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
          setHover(true);
          const features = map.current.queryRenderedFeatures(e.point);
          let heatData = finalData.map((element, index) => {
            if (
              features[0].properties.county_name === element.county &&
              features[0].properties.state_abbrev === element.state
            ) {
              return element.data.heat;
            }
          });

          console.log(features);
          if (features.length > 0) {
            if (typeof features[0].properties.county_name !== "undefined") {
              setHoverData({
                name: features[0].properties.county_name,
                state: features[0].properties.state_abbrev,
                heat: heatData,
              });
            }
          }
        });
      });

      mainHeatArray.map((state, index) => {
        return map.current.on("mouseleave", stateAbbrvArray[index], (e) => {
          setHover(false);
        });
      });

      map.current.addLayer(
        {
          id: "countyLines",
          type: "line",
          "source-layer": "albersusa",
          source: "composite",
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
    });
  });

  useEffect(() => {
    switch (layer) {
      case 1:
        setName("Heat");
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
        mainHeatArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let heatData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.heat;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: heatData,
                });
              }
            }
          });
        });

        break;

      case 2:
        setName("Wet Bulb");
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
        mainWetBulbArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let wetBulbData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.wetBulb;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: wetBulbData,
                });
              }
            }
          });
        });
        break;

      case 3:
        setName("Crop Yield Decline");
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
        mainCropYieldArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let cropYieldData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.cropYield;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: cropYieldData,
                });
              }
            }
          });
        });
        break;
      case 4:
        setName("Sea Level Rise");
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
        mainSeaLevelRiseArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let seaLevelRiseData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.seaLevelRise;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: seaLevelRiseData,
                });
              }
            }
          });
        });
        break;
      case 5:
        setName("Very Large Fires");
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
        mainFireArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let fireData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.fire;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: fireData,
                });
              }
            }
          });
        });
        break;
      case 6:
        setName("Economic Damage");
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
        mainEconomicDamageArray.map((state, index) => {
          return map.current.on("mousemove", stateAbbrvArray[index], (e) => {
            const features = map.current.queryRenderedFeatures(e.point);
            let economicDamageData = finalData.map((element, index) => {
              if (
                features[0].properties.county_name === element.county &&
                features[0].properties.state_abbrev === element.state
              ) {
                return element.data.economicDamage;
              }
            });

            console.log(features);
            if (features.length > 0) {
              if (typeof features[0].properties.county_name !== "undefined") {
                setHoverData({
                  name: features[0].properties.county_name,
                  state: features[0].properties.state_abbrev,
                  heat: economicDamageData,
                });
              }
            }
          });
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
      {hover ? (
        <div className="hover-wrapper">
          <h1>{hoverData.name + ", " + hoverData.state}</h1>
          <h2>
            {name} {hoverData.heat}
          </h2>
        </div>
      ) : null}
      ;
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
