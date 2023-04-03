import GoogleMapReact from "google-map-react";
import LocationPin from "./locationPin";

//TO GENERATE API KEY: 
//https://developers.google.com/maps/documentation/maps-static/get-api-key

//FOR MAPS:
//https://www.npmjs.com/package/google-map-react
//https://blog.logrocket.com/integrating-google-maps-react/
const DisplayMap = () => {
    const defaultProps = {
      center: {
        lat: 36.05549708055063,
        lng: -115.25171191749692,
      },
      zoom: 11
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCrOx4Pu77nCrav85qUJUI7Uldj-SALPC8'}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <LocationPin
            lat={59.955413}
            lng={30.337844}
            text='7315 W Warm Springs Rd Ste 130, Las Vegas, NV 89113'
          />
        </GoogleMapReact>
      </div>
    )
} 

export default DisplayMap;