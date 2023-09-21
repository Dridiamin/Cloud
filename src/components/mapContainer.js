import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const item = {
    name: "Location 1",
    location: {
      lat: 36.8065, 
      lng: 10.1815, 
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 36.8065, 
    lng: 10.1815, 
  };

  return (
    <div className="aboutUsElement">
    <LoadScript googleMapsApiKey="AIzaSyARVZnHOEfnLogWxs9tKH-qa78pNjxmAE4">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
        <Marker key={item.name} position={item.location} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};
export default MapContainer;
