import React,{useState} from "react";
// import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L, {LatLngTuple, LeafletMouseEvent} from "leaflet";


delete ((L.Icon.Default)as any).prototype._getIconUrl;


L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

// L.Icon.Default.imagePath = "../../../../../assets/images/";
const position = [35.64961, 51.166359] as LatLngTuple;
 export const CompanyMap: React.FC = () => {
	 const [state , setState] = useState<LatLngTuple> (position)
	 const handleClick = (e :LeafletMouseEvent) => {
		 const newPosition = [e.latlng.lat ,e.latlng.lng] as LatLngTuple
		 setState(newPosition)
	 }

  return (
	<React.Fragment>

		<Map onClick={handleClick}  center={position} zoom={13}>
		<TileLayer
		  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		/>
		<Marker position={state}>
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

export default CompanyMap
