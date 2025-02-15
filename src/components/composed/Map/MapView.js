import React, {useState} from "react";
import {MapContainer, TileLayer, Rectangle} from "react-leaflet";
import data from "assets/data.json";
import MapMarkers from "./MapMarkers";
import "leaflet/dist/leaflet.css";
import "./MapView.css";

const MapView = () => {
	const outer = [
		[43.26544319441563, -5], //bilbao
		[39.48299617133865, 5], //valencia
	];

	const [bounds, setBounds] = useState(outer);

	const onClickOuter = () => {
		setBounds({bounds: outer});
	};
	// eslint-disable-next-line
	const [state, setState] = useState({
		currentLocation: {lat: 40.34572785994146, lng: -1.106286485224387}, //teruel
		zoom: 6,
		data,
	});

	return (
		<MapContainer
			className="Container-View"
			center={state.currentLocation}
			zoom={state.zoom}
			bound={bounds}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<Rectangle
				bounds={outer}
				color={bounds === outer ? "blue" : "blue"}
				onClick={onClickOuter}
			/>
			<MapMarkers apartments={state.data.apartments} />
		</MapContainer>
	);
};

export default MapView;
