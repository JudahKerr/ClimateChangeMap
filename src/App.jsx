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
  const [grow1, setGrow1] = useState(true);
  const [grow2, setGrow2] = useState(false);
  const [grow3, setGrow3] = useState(false);
  const [grow4, setGrow4] = useState(false);
  const [grow5, setGrow5] = useState(false);
  const [grow6, setGrow6] = useState(false);
  const [load, setLoad] = useState(true);

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
      // "mapbox://styles/jkerr772/cl5fi0zwz000214p39rnnx0vt"
      style: "mapbox://styles/jkerr772/cl5shmj1j000414mqdubrdpq8",
      center: [lng, lat],
      zoom: zoom,
      minZoom: 4.5,
      maxZoom: 9,
    });

    map.current.on("load", () => {
      map.current.setMaxBounds([[-48,-24],[38,15]])
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

  let imgString = "https://cdn-icons-png.flaticon.com/512/2316/2316581.png";
  if (layer === 1) {

  } else if (layer === 2) {
    imgString = "https://cdn-icons-png.flaticon.com/512/4888/4888486.png"
  } else if (layer === 3) {
   imgString = "https://cdn-icons.flaticon.com/png/512/1061/premium/1061825.png?token=exp=1658270032~hmac=b7e959d0e225e862ae07fadf21984b4f"
  } else if (layer === 4) {
    imgString = "https://cdn-icons.flaticon.com/png/512/3618/premium/3618822.png?token=exp=1658270069~hmac=5c4c5ad4c7935f843ded518a5a3056d5"
  } else if (layer === 5) {
   imgString = "https://cdn-icons-png.flaticon.com/512/2985/2985511.png"
  } else if (layer === 6) {
    imgString = "https://cdn-icons.flaticon.com/png/512/3642/premium/3642178.png?token=exp=1658270139~hmac=e5cc8df65cd78d256ff7f57b4a6db04a"
  }

  function onClick1(e) {
    setLayer(1);
   
    if (grow2 || grow3 || grow4 || grow5 || grow6) {
      setGrow1(true);
      setGrow3(false);
      setGrow4(false);
      setGrow5(false);
      setGrow6(false);
      setGrow2(false);
    }
  }
  function onClick2(e) {
    setLayer(2);
    
    if (grow1 || grow3 || grow4 || grow5 || grow6) {
      setGrow1(false);
      setGrow3(false);
      setGrow4(false);
      setGrow5(false);
      setGrow6(false);
      setGrow2(true);
    }
  }
  function onClick3(e) {
    setLayer(3);
    if (grow1 || grow2 || grow4 || grow5 || grow6) {
      setGrow1(false);
      setGrow3(true);
      setGrow4(false);
      setGrow5(false);
      setGrow6(false);
      setGrow2(false);
    }
  }
  function onClick4(e) {
    setLayer(4);
    if (grow1 || grow2 || grow3 || grow5 || grow6) {
      setGrow1(false);
      setGrow3(false);
      setGrow4(true);
      setGrow5(false);
      setGrow6(false);
      setGrow2(false);
    }
  }
  function onClick5(e) {
    setLayer(5);
    if (grow1 || grow3 || grow4 || grow2 || grow6) {
      setGrow1(false);
      setGrow3(false);
      setGrow4(false);
      setGrow5(true);
      setGrow6(false);
      setGrow2(false);
    }
  }
  function onClick6(e) {
    setLayer(6);
    if (grow1 || grow3 || grow4 || grow5 || grow2) {
      setGrow1(false);
      setGrow3(false);
      setGrow4(false);
      setGrow5(false);
      setGrow6(true);
      setGrow2(false);
    }
  }

function handleClick() {
  setLoad(false);
}


  return (
    <div>
    
    
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div className="main-wrapper">
        <div className={load ? "title-wrapper blur" : "title-wrapper"}>
          <h1>Climate Change Visualizer</h1>
          <h3>These numbers are modeled from the RCP 8.5 projections, for the years 2040-2060. Data ranges from <span className="spanClass">1</span> (lowest) to <span className="spanClass">10</span> (highest). <br></br><br></br> Source is from <a href="https://projects.propublica.org/climate-migration/">ProPublica</a> and the Rhodium Group.</h3>
          
        </div>
        {load ? <div className="popup-wrapper"><div className="popup">
      <h1>Click and drag to move and scroll in to zoom! Hover over each county to get more information.</h1>
      <button onClick={handleClick}>Okay!</button>
      <p>Made with <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png"></img> by Judah Kerr</p>
    </div></div> : null }
        <div className={load ? "layer-picker blur" : "layer-picker"}>
          <h2>Switch Datasets</h2>
          <hr className="hard-rule"></hr>
          <div className="switch">
            <div
              onClick={(e) => onClick1(e)}
              className={grow1 ? "grow" : "shrink"}
            >
              Heat
              {grow1 ? <p>Increase in average temperature. Most of the South and South West becomes uninhabitable.</p> : null}
            </div>
            <div
              onClick={(e) => onClick2(e)}
              className={grow2 ? "grow" : "shrink"}
            >
              Wet Bulb
              {grow2 ? <p>Wet Bulb is the combination of excessive heat and humidity, where the human body is unable to cool itself. Increasing the risk of heat stroke and death.</p> : null}
            </div>
            <div
              onClick={(e) => onClick3(e)}
              className={grow3 ? "grow" : "shrink"}
            >
              Crop Yield Decline
              {grow3 ? <p>Rising temperatures will make it more difficult to grow food. Staple crops for livestock such as corn and soy will take a big hit, creating more food insecurity.</p> : null}
            </div>
            <div
              onClick={(e) => onClick4(e)}
              className={grow4 ? "grow" : "shrink"}
            >
              Sea Level Rise
              {grow4 ? <p>As sea levels rise, costal communites will be damaged and forced to either leave or invest heavily in counter measures. </p> : null}
            </div>
            <div
              onClick={(e) => onClick5(e)}
              className={grow5 ? "grow" : "shrink"}
            >
              Very Large Fires
              {grow5 ? <p>Average number of very large fires over 12,000 acres.</p> : null}
            </div>
            <div
              onClick={(e) => onClick6(e)}
              className={grow6 ? "grow" : "shrink"}
            >
              Economic Damage
              {grow6 ? <p>The financial toll all of these increases will have on each county, as a share of their GDP.</p> : null}
            </div>
          </div>
        </div>
        
      </div>
      <div ref={mapContainer} className={load ? "map-container blur" : "map-container" }></div>
      {hover ? (
        <div className="hover-wrapper">
          <h1>{hoverData.name + ", " + hoverData.state}</h1>
          <img src={imgString} className="icon"></img>
          <h2>
            {name}: {hoverData.heat}
          </h2>
        </div>
      ) : null}
    </div>
  );
}
