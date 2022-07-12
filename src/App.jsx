import {mainHeatArray, mainWetBulbArray, mainCropYieldArray, mainSeaLevelRiseArray, mainFireArray} from "./ClimateData";


import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(4.5);

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
      // mainHeatArray.map((state, index) => {
      //   return map.current.addLayer(
      //     {
      //       id: stateAbbrvArray[index],
      //       type: "fill",
      //       "source-layer": "albersusa",
      //       source: "composite",
      //       filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
      //       paint: {
      //         "fill-color": [
      //           "match",
      //           ["get", "county_name"],
      //           ...mainHeatArray[index],
      //         ],
      //       },
      //     },
      //     "county-points",
      //     "county-boundaries"
      //   );
      // });

      // mainWetBulbArray.map((state, index) => {
      //   return map.current.addLayer(
      //     {
      //       id: stateAbbrvArray[index],
      //       type: "fill",
      //       "source-layer": "albersusa",
      //       source: "composite",
      //       filter: ["in", ["get", "state_abbrev"], stateAbbrvArray[index]],
      //       paint: {
      //         "fill-color": [
      //           "match",
      //           ["get", "county_name"],
      //           ...mainWetBulbArray[index],
      //         ],
      //       },
      //     },
      //     "county-points",
      //     "county-boundaries"
      //   );
      // });
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
  });

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

      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
