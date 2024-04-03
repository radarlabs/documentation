"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5338],{970:function(a,e,t){t.d(e,{Z:function(){return d}});var n=t(7294),r="alert_19nB",o="alertWarning_1tiz",i="alertInfo_1EfW",l="alertTip_1W6d",p="alertSuccess_7EZp",d=function(a){var e=a.children,t=a.alertType;return"warning"===t?n.createElement("div",{className:"alert "+r+" "+o,role:"alert"},e):"info"===t?n.createElement("div",{className:"alert "+r+" "+i,role:"alert"},e):"tip"===t?n.createElement("div",{className:"alert "+r+" "+l,role:"alert"},e):"success"===t?n.createElement("div",{className:"alert "+r+" "+p,role:"alert"},e):null}},6718:function(a,e,t){var n=t(1721),r=t(7294),o=t(8621),i=function(a){function e(){return a.apply(this,arguments)||this}(0,n.Z)(e,a);var t=e.prototype;return t.componentDidMount=function(){o.Z.initialize("org_test_pk_7e1e22718af02cb9ed4a01233556999c2c02c947");var a=new o.Z.ui.map({container:"map",center:[-73.9911,40.7342],zoom:14});o.Z.ui.marker({text:"Radar HQ"}).setLngLat([-73.9910078,40.7342465]).addTo(a)},t.render=function(){return r.createElement("div",{id:"map-container",style:{height:"20rem",margin:"1rem 0 1.5rem",position:"relative",width:"95%"}},r.createElement("div",{id:"map",style:{bottom:0,position:"absolute",top:0,width:"100%"}}))},e}(r.Component);e.Z=i},9285:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var n=t(7462),r=t(3366),o=(t(7294),t(3905)),i=t(970),l=t(6718),p={title:"Maps"},d=void 0,s={unversionedId:"maps/maps",id:"maps/maps",isDocsHomePage:!1,title:"Maps",description:"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox.",source:"@site/docs/maps/maps.mdx",sourceDirName:"maps",slug:"/maps/maps",permalink:"/documentation/maps/maps",editUrl:"https://github.com/radarlabs/docs/edit/main/docs/maps/maps.mdx",tags:[],version:"current",frontMatter:{title:"Maps"},sidebar:"defaultSidebar",previous:{title:"Routing APIs",permalink:"/documentation/maps/routing"},next:{title:"Static Maps",permalink:"/documentation/maps/static-maps"}},m=[{value:"How it works",id:"how-it-works",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Styles",id:"styles",children:[]}]},{value:"Quickstart",id:"quickstart",children:[{value:"JavaScript",id:"javascript",children:[]},{value:"React",id:"react",children:[]},{value:"Vue",id:"vue",children:[]},{value:"React Native",id:"react-native",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]}]},{value:"Coverage",id:"coverage",children:[]},{value:"Support",id:"support",children:[]}],u={toc:m};function c(a){var e=a.components,p=(0,r.Z)(a,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Radar Maps is a cost-effective alternative to Google Maps Platform and Mapbox."),(0,o.kt)("p",null,"For example, here's a Radar Map displaying a marker for Radar HQ:"),(0,o.kt)(l.Z,{mdxType:"Map"}),(0,o.kt)("p",null,"You can also check out the ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/dashboard/maps/maps-explorer/maps"},"maps explorer")," in the dashboard, or check out a full-page ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/demo/maps"},"maps demo")," and ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/demo/locator"},"store locator demo"),"."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"To use Radar Maps, simply initialize the Radar SDK with your publishable key and specify the container to render the map into."),(0,o.kt)("p",null,"Radar Maps is an extension of the ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org"},"MapLibre GL JS")," library. See their ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/API/"},"docs")," for more customization info."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"You can configure a map with any MapLibre ",(0,o.kt)("a",{parentName:"p",href:"https://maplibre.org/maplibre-gl-js/docs/API/types/MapOptions/"},"MapOptions"),"."),(0,o.kt)("p",null,"The minimum recommended options are the following:"),(0,o.kt)("div",{className:"full-width-table"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Possible values"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"container")),(0,o.kt)("td",{parentName:"tr",align:null},"none (required)"),(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," HTMLElement"),(0,o.kt)("td",{parentName:"tr",align:null},"The container to render the map into. You can specify an ",(0,o.kt)("inlineCode",{parentName:"td"},"id")," of an HTML element or a DOM element. The width and height of this element will determine the size of the map.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"style")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radar-default-v1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"radar-default-v1"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"radar-light-v1"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"radar-dark-v1")),(0,o.kt)("td",{parentName:"tr",align:null},"The style of the map. See below for more details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"center")),(0,o.kt)("td",{parentName:"tr",align:null},"none (IP geolocation)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[longitude, latitude]")),(0,o.kt)("td",{parentName:"tr",align:null},"The center of the map. If not specified, the map will  automatically be centered based on the client's ",(0,o.kt)("a",{parentName:"td",href:"/documentation/api#ip-geocode"},"IP geolocation"),".")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"zoom")),(0,o.kt)("td",{parentName:"tr",align:null},"11"),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"The zoom level of the map, a number between 0 (fully zoomed out) and 23 (fully zoomed in)."))))),(0,o.kt)("h3",{id:"styles"},"Styles"),(0,o.kt)("p",null,"Radar provides several out-of-the box map styles:"),(0,o.kt)("table",{className:"full-width-table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{className:"no-wrap"},"Style"),(0,o.kt)("th",{style:{width:"400px"}},"Preview"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{className:"no-wrap"},(0,o.kt)("code",null,"radar-default-v1")),(0,o.kt)("td",{style:{width:"400px"}},(0,o.kt)("img",{width:"400",src:"https://images.ctfassets.net/f2vbu16fzuly/1wBEmydpkmmP5eI23nHD6s/1a628636b92095173b946da3a3e6204e/radar-default-theme.png?w=1200"})),(0,o.kt)("td",null,"Radar's default map style, showcasing detailed street-level information about roads and nearby places. A general purpose map suitable for most use cases.")),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"no-wrap"},(0,o.kt)("code",null,"radar-light-v1")),(0,o.kt)("td",{style:{width:"400px"}},(0,o.kt)("img",{width:"400",src:"https://images.ctfassets.net/f2vbu16fzuly/39PJYbWntW8cK4NnP33cWK/ae8ad63d9e300a3c8d61ce47f7323914/radar-light-theme.png?w=1200"})),(0,o.kt)("td",null,"A light monochrome map style, useful for highlighting your own information or visualizations.")),(0,o.kt)("tr",null,(0,o.kt)("td",{className:"no-wrap"},(0,o.kt)("code",null,"radar-dark-v1")),(0,o.kt)("td",{style:{width:"400px"}},(0,o.kt)("img",{width:"400",src:"https://images.ctfassets.net/f2vbu16fzuly/UhZJgEo57528CJRQCj0fT/3a2e2dc29205da1a9ea8e60b52dcafa6/radar-dark-theme.png?w=1200"})),(0,o.kt)("td",null,"A dark monochrome map style, useful for highlighting your own information or visualizations in dark mode.")))),(0,o.kt)("h2",{id:"quickstart"},"Quickstart"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://radar.com/signup"},"sign up")," for Radar and get an API key."),(0,o.kt)("p",null,"Then, get started with the sample code below."),(0,o.kt)("p",null,"Happy mapping!"),(0,o.kt)("h3",{id:"javascript"},"JavaScript"),(0,o.kt)("p",null,"To create a simple web page with a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />\n    <link href="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.css" rel="stylesheet">\n    <script src="https://js.radar.com/$RADAR_WEB_SDK_VERSION$/radar.min.js"><\/script>\n  </head>\n\n  <body>\n    <div id="map" style="width: 100%; height: 500px;" />\n\n    <script type="text/javascript">\n      Radar.initialize(\'prj_live_pk_...\');\n\n      // create a map\n      const map = Radar.ui.map({\n        container: \'map\',\n        style: \'radar-default-v1\',\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      });\n\n      // add a marker to the map\n      const marker = Radar.ui.marker({ text: \'Radar HQ\' })\n        .setLngLat([-73.9910078, 40.7342465])\n        .addTo(map);\n    <\/script>\n  </body>\n</html>\n')),(0,o.kt)("h3",{id:"react"},"React"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev"},"React")," component with a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js maplibre-gl\n")),(0,o.kt)("p",null,"The SDK has a dependency on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-gl-js"},"maplibre-gl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Radar from 'radar-sdk-js';\n\nimport 'radar-sdk-js/dist/radar.css';\n\nclass RadarMap extends React.Component {\n  componentDidMount() {\n    Radar.initialize('prj_live_pk_...');\n\n    // create a map\n    const map = new Radar.ui.map({\n      container: 'map',\n      style: 'radar-default-v1',\n      center: [-73.9911, 40.7342], // NYC\n      zoom: 14,\n    });\n\n    // add a marker to the map\n    Radar.ui.marker({ text: 'Radar HQ' })\n      .setLngLat([-73.9910078, 40.7342465])\n      .addTo(map);\n  }\n\n  render() {\n    return (\n      <div id=\"map-container\" style={{ height: '100%', position: 'absolute', width: '100%' }}>\n        <div id=\"map\" style={{ height: '100%', position: 'absolute', width: '100%' }} />\n      </div>\n    );\n  }\n};\n\nexport default RadarMap;\n")),(0,o.kt)("h3",{id:"vue"},"Vue"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"https://vuejs.org"},"Vue")," component with a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save radar-sdk-js maplibre-gl\n")),(0,o.kt)("p",null,"The SDK has a dependency on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-gl-js"},"maplibre-gl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"<template>\n  <div id=\"map-container\">\n    <div id=\"map\" ref=\"mapRef\" />\n  </div>\n</template>\n\n<script>\nimport Radar from 'radar-sdk-js';\nimport { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';\n\nexport default {\n  name: 'RadarMap',\n  setup () {\n    const mapRef = shallowRef(null);\n    const map = shallowRef(null);\n\n    onMounted(() => {\n      Radar.initialize('prj_live_pk_...');\n\n      // create a map\n      map.value = markRaw(Radar.ui.map({\n        container: mapRef.value,\n        style: 'radar-default-v1',\n        center: [-73.9911, 40.7342], // NYC\n        zoom: 11\n      }));\n\n      // add a marker to the map\n      Radar.ui.Marker({ color: '#007aff' })\n        .setLngLat([-73.9911, 40.7342]) // Radar HQ\n        .addTo(map.value);\n    }),\n\n    onUnmounted(() => {\n      map.value?.remove();\n    })\n\n    return {\n      map, mapRef\n    };\n  }\n};\n<\/script>\n\n<style>\n@import 'radar-sdk-js/dist/radar.css';\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n#map-container {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n#map {\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n</style>\n")),(0,o.kt)("h3",{id:"react-native"},"React Native"),(0,o.kt)("p",null,"To create a ",(0,o.kt)("a",{parentName:"p",href:"https://react.dev"},"React Native")," component with a map:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-native-radar @maplibre/maplibre-react-native\n")),(0,o.kt)("p",null,"The SDK has a dependency on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-react-native"},"maplibre-react-native"),"."),(0,o.kt)("p",null,"Next, complete any required ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-react-native/blob/main/docs/GettingStarted.md#review-platform-specific-info"},"platform-specific installation steps"),"."),(0,o.kt)("p",null,"Finally, initialize the Radar SDK and add a ",(0,o.kt)("inlineCode",{parentName:"p"},"<Map>")," component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { View } from 'react-native';\nimport Radar, { Map } from 'react-native-radar';\nimport MapLibreGL from '@maplibre/maplibre-react-native';\n\n// NOTE: MapLibre requires setting their deprecated access token to null\nMapLibreGL.setAccessToken(null);\n\nRadar.initialize('prj_live_pk_...');\n\nexport const App = () => (\n  <View style={{ width: '100%', height: '95%' }}>\n    <Map />\n  </View>\n);\n")),(0,o.kt)("p",null,"Optionally, add assets for a marker. You can download assets ",(0,o.kt)("a",{target:"_blank",href:t(2426).Z},"here"),"."),(0,o.kt)("p",null,"To add a marker to the map and control the camera:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"  const [cameraConfig, setCameraConfig] = useState({\n    triggerKey: Date.now(),\n    centerCoordinate: [-73.9911, 40.7342],\n    animationMode: 'flyTo',\n    animationDuration: 600,\n    zoomLevel: 12,\n  });\n\n  const onRegionDidChange = (event) => {\n    // do something on region change\n  }\n\n  const onSelect = (address) => {\n    // do something with selected address\n  }\n\n  const pointsCollection = {\n    type: 'FeatureCollection',\n    features: [\n      {\n        type: 'Feature',\n        properties: {\n          _id: '123',\n        },\n        geometry: {\n          type: 'Point',\n          coordinates: [-73.9911, 40.7342]\n        }\n      }\n    ]\n  }; \n  \n  const onPress = (event) => {\n    // do something on press\n  }\n    \n  return (\n    <View style={{ width: '100%', marginTop: '10%', height: '90%' }}>\n      <Map mapOptions={{\n        onRegionDidChange,\n      }}>\n        <MapLibreGL.Camera\n          {...cameraConfig}\n        />\n        <MapLibreGL.Images\n          images={{\n            icon: require('./assets/marker.png'),\n          }}\n        />\n        <MapLibreGL.ShapeSource\n          id=\"points\"\n          shape={pointsCollection}\n          onPress={onPress}\n        >\n        <MapLibreGL.SymbolLayer\n            id=\"symbol\"\n            style={{\n              iconImage: 'icon',\n              iconSize: [\n                'interpolate',\n                ['linear'],\n                ['zoom'],\n                0, 0.2, // adjust the icon size for zoom level 0\n                12, 0.4, // adjust the icon size for zoom level 12\n                22, 0.8, // adjust the icon size for zoom level 22\n              ],\n              iconAllowOverlap: true,\n            }}\n          />\n        </MapLibreGL.ShapeSource>\n      </Map>\n    </View>\n  );\n")),(0,o.kt)("h3",{id:"ios"},"iOS"),(0,o.kt)("p",null,"To create a map on iOS, add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-native"},"MapLibre Native")," to your Xcode project."),(0,o.kt)("p",null,"Then, add assets for the Radar logo and optionally for a marker. You can download assets ",(0,o.kt)("a",{target:"_blank",href:t(2426).Z},"here"),"."),(0,o.kt)("p",null,"Finally, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapView")," to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ViewController")," with a Radar style URL that includes your publishable key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'import SwiftUI\nimport Mapbox // NOTE: MapLibre is imported as Mapbox\n\nstruct MapView: UIViewRepresentable {\n    \n    func makeCoordinator() -> MapView.Coordinator {\n        Coordinator(self)\n    }\n    \n    func makeUIView(context: Context) -> MGLMapView {\n        // create a map\n\n        let style = "radar-default-v1"\n        let publishableKey = "prj_live_pk..."\n        let styleURL = URL(string: "https://api.radar.io/maps/styles/\\(style)?publishableKey=\\(publishableKey)")\n\n        let mapView = MGLMapView(frame: .zero, styleURL: styleURL)\n        mapView.autoresizingMask = [.flexibleWidth, .flexibleHeight]\n        mapView.logoView.isHidden = true\n\n        mapView.setCenter(\n          CLLocationCoordinate2D(latitude: 40.7342, longitude: -73.9911),\n          zoomLevel: 11,\n          animated: false\n        )\n        \n        // add the Radar logo\n\n        let logoImageView = UIImageView(image: UIImage(named: "radar-logo"))\n        logoImageView.translatesAutoresizingMaskIntoConstraints = false\n        mapView.addSubview(logoImageView)\n\n        NSLayoutConstraint.activate([\n            logoImageView.bottomAnchor.constraint(equalTo: mapView.safeAreaLayoutGuide.bottomAnchor, constant: -10),\n            logoImageView.leadingAnchor.constraint(equalTo: mapView.safeAreaLayoutGuide.leadingAnchor, constant: 10),\n            logoImageView.widthAnchor.constraint(equalToConstant: 74),\n            logoImageView.heightAnchor.constraint(equalToConstant: 26)\n        ])\n\n        mapView.delegate = context.coordinator\n\n        return mapView\n    }\n    \n    func updateUIView(_ uiView: MGLMapView, context: Context) {\n\n    }\n    \n    // add a marker on map load\n\n    class Coordinator: NSObject, MGLMapViewDelegate {\n        var control: MapView\n\n        init(_ control: MapView) {\n            self.control = control\n        }\n\n        func mapView(_ mapView: MGLMapView, didFinishLoading style: MGLStyle) {\n            addMarker(style: style, coordinate: CLLocationCoordinate2D(latitude: 40.7342, longitude: -73.9911))\n        }\n\n        func addMarker(style: MGLStyle, coordinate: CLLocationCoordinate2D) {\n            let point = MGLPointAnnotation()\n            point.coordinate = coordinate\n\n            let shapeSource = MGLShapeSource(identifier: "marker-source", shape: point, options: nil)\n\n            let shapeLayer = MGLSymbolStyleLayer(identifier: "marker-style", source: shapeSource)\n\n            if let image = UIImage(named: "default-marker") {\n                style.setImage(image, forName: "marker")\n            }\n\n            shapeLayer.iconImageName = NSExpression(forConstantValue: "marker")\n\n            style.addSource(shapeSource)\n            style.addLayer(shapeLayer)\n        }\n    }\n}\n')),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Adding a Radar logo to the map is required in our ",(0,o.kt)("a",{href:"https://radar.com/terms"},"Terms of Use"),"."),(0,o.kt)("h3",{id:"android"},"Android"),(0,o.kt)("p",null,"To create a map on Android, add ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/maplibre/maplibre-native"},"MapLibre Native")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dependencies")," section of your app's ",(0,o.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n    implementation 'org.maplibre.gl:android-sdk:10.2.0'\n}\n")),(0,o.kt)("p",null,"Import assets for the Radar logo and optionally for a marker. You can download assets ",(0,o.kt)("a",{target:"_blank",href:t(2426).Z},"here"),"."),(0,o.kt)("p",null,"Then, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapView")," with the Radar logo to your layout:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:app="http://schemas.android.com/apk/res-auto"\n    xmlns:tools="http://schemas.android.com/tools"\n    android:layout_width="match_parent"\n    android:layout_height="match_parent"\n    tools:context=".MainActivity">\n\n    <com.mapbox.mapboxsdk.maps.MapView\n        android:id="@+id/mapView"\n        android:layout_width="match_parent"\n        android:layout_height="match_parent"\n        />\n\n    <ImageView\n        android:id="@+id/overlayImageView"\n        android:layout_width="wrap_content"\n        android:layout_height="wrap_content"\n        android:src="@drawable/radar_logo"\n        app:layout_constraintBottom_toBottomOf="@id/mapView"\n        app:layout_constraintStart_toStartOf="@id/mapView"\n        android:layout_marginBottom="10dp"\n        android:layout_marginStart="10dp" />\n\n</androidx.constraintlayout.widget.ConstraintLayout>\n')),(0,o.kt)("p",null,"Finally, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"MapView")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"Activity")," with a Radar style URL that includes your publishable key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'import android.os.Bundle\nimport android.view.Gravity\nimport android.view.LayoutInflater\nimport androidx.appcompat.app.AppCompatActivity\nimport androidx.core.content.res.ResourcesCompat\nimport androidx.core.graphics.drawable.toBitmap\n\n// NOTE: MapLibre is imported as Mapbox\nimport com.mapbox.mapboxsdk.Mapbox\nimport com.mapbox.mapboxsdk.annotations.IconFactory\nimport com.mapbox.mapboxsdk.annotations.MarkerOptions\nimport com.mapbox.mapboxsdk.camera.CameraPosition\nimport com.mapbox.mapboxsdk.geometry.LatLng\nimport com.mapbox.mapboxsdk.maps.MapView\nimport com.mapbox.mapboxsdk.maps.MapboxMap\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var mapView: MapView\n    private lateinit var mapboxMap: MapboxMap\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        super.onCreate(savedInstanceState)\n\n        // create a map\n\n        val style = "radar-default-v1"\n        val publishableKey = "prj_live_pk_..."\n        val styleURL = "https://api.radar.io/maps/styles/$style?publishableKey=$publishableKey"\n\n        Mapbox.getInstance(this)\n\n        val inflater = LayoutInflater.from(this)\n        val rootView = inflater.inflate(R.layout.activity_main, null)\n        setContentView(rootView)\n\n        mapView = rootView.findViewById(R.id.mapView)\n\n        mapView.getMapAsync { map ->\n            mapboxMap = map\n\n            // add the Radar logo\n\n            map.uiSettings.isLogoEnabled = false\n\n            map.uiSettings.attributionGravity = Gravity.RIGHT + Gravity.BOTTOM\n            map.uiSettings.setAttributionMargins(0, 0, 24, 24)\n\n            map.setStyle(styleURL)\n\n            // add a marker on map load\n\n            addMarker(LatLng(40.7342, -73.9911))\n            map.cameraPosition = CameraPosition.Builder().target(LatLng(40.7342, -73.9911)).zoom(11.0).build()\n        }\n\n    }\n\n    private fun addMarker(coordinate: LatLng) {\n        val infoIconDrawable = ResourcesCompat.getDrawable(\n            this.resources,\n            R.drawable.default_marker,\n            null\n        )!!\n\n        val bitmapMarker = infoIconDrawable.toBitmap()\n        val icon = IconFactory.getInstance(this)\n            .fromBitmap(bitmapMarker)\n\n        val markerOptions = MarkerOptions()\n            .position(coordinate)\n            .icon(icon)\n        mapboxMap.addMarker(markerOptions)\n    }\n\n    override fun onStart() {\n        super.onStart()\n        mapView.onStart()\n    }\n\n    override fun onResume() {\n        super.onResume()\n        mapView.onResume()\n    }\n\n    override fun onPause() {\n        super.onPause()\n        mapView.onPause()\n    }\n\n    override fun onStop() {\n        super.onStop()\n        mapView.onStop()\n    }\n\n    override fun onLowMemory() {\n        super.onLowMemory()\n        mapView.onLowMemory()\n    }\n\n    override fun onDestroy() {\n        super.onDestroy()\n        mapView.onDestroy()\n    }\n\n    override fun onSaveInstanceState(outState: Bundle) {\n        super.onSaveInstanceState(outState)\n        mapView.onSaveInstanceState(outState)\n    }\n}\n')),(0,o.kt)(i.Z,{alertType:"info",mdxType:"Alert"},"Adding a Radar logo to the map is required in our ",(0,o.kt)("a",{href:"https://radar.com/terms"},"Terms of Use"),"."),(0,o.kt)("h2",{id:"coverage"},"Coverage"),(0,o.kt)("p",null,"Radar map data comes from ",(0,o.kt)("a",{parentName:"p",href:"https://www.openstreetmap.org"},"OpenStreetMap"),"."),(0,o.kt)("p",null,"The following table describes data coverage for maps, by country, for consumer use cases (e.g., store locators) and logistics use cases (e.g., ride sharing, delivery)."),(0,o.kt)("h4",{id:"legend"},"Legend"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Icon"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24"),(0,o.kt)("td",{parentName:"tr",align:null},"Great data quality and availability")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0")),(0,o.kt)("td",{parentName:"tr",align:null},"Good data quality and availability")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"120%"}},"\u25ef")),(0,o.kt)("td",{parentName:"tr",align:null},"Approximate data quality and availability")))),(0,o.kt)("h4",{id:"coverage-1"},"Coverage"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("th",{parentName:"tr",align:null},"Maps"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddfa\ud83c\uddf8 US (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udde8\ud83c\udde6 CA (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\uddec\ud83c\udde7 UK (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (consumer)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2b24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\ud83c\udf0e Other (logistics)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("span",{style:{"font-size":"125%"}},"\u25d0"))))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"Have questions? We're here to help! Email us at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@radar.com"},"support@radar.com"),"."))}c.isMDXComponent=!0},2426:function(a,e,t){e.Z=t.p+"assets/files/radar-map-assets-10a2451b64cea4d72fffe99b24b208e8.zip"}}]);