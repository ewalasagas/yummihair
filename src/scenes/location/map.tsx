import GoogleMapReact from 'google-map-react';

type Props = {
}

//TO GENERATE API KEY: 
//https://developers.google.com/maps/documentation/maps-static/get-api-key

//FOR MAPS:
//https://www.npmjs.com/package/google-map-react
//https://blog.logrocket.com/integrating-google-maps-react/

const Map = (props: Props) => {
    const location = {
        address: '7315 W Warm Springs Rd Ste 130, Las Vegas, NV 89113',
        lat: 36.05549708055063,
        lng: -115.25171191749692,
    };

    const zoomLevel = 10;

  return (
    <GoogleMapReact
        bootstrapURLKeys={{ key: ""}}
        defaultCenter={location}
        defaultZoom={zoomLevel}
    >

    </GoogleMapReact>
  )
}

export default Map;