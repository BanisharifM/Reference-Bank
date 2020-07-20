import React from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet-universal";
import Head from "next/head";
import L from "leaflet";
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('../../node_modules/leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('../../node_modules/leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('../../node_modules/leaflet/dist/images/marker-shadow.png')
// });
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//   iconUrl: icon,
//   shadowUrl: iconShadow
// });
// L.Marker.prototype.options.icon = DefaultIcon;
L.Icon.Default.imagePath = "/images/";
const position = [35.64961, 51.166359];
export const CompanyMap: React.FC = () => {
  // React.useEffect(() => {

  //   const L = require("leaflet");

  //   delete L.Icon.Default.prototype._getIconUrl;

  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  //     iconUrl: require("leaflet/dist/images/marker-icon.png"),
  //     shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  //   });
  // }, []);
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        />
      </Head>
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </React.Fragment>
  );
};

export default CompanyMap;
