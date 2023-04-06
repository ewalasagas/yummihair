import { SelectedPage } from "@/shared/types";
import { useRef, useState } from "react";
import GoogleMap from "google-maps-react-markers";
import LocationPin from "./locationPin";

//TO GENERATE API KEY: 
//https://developers.google.com/maps/documentation/maps-static/get-api-key

//FOR MAPS:
//https://github.com/giorgiabosello/google-maps-react-markers
const YUMMI_HAIR_LOCATION = {
  lat: 36.0553366,
  lng: -115.2538577,
  zoom: 13,
  label: 'YUMMI HAIR',
  address: '7315 W Warm Springs Rd Ste 130, Las Vegas, NV 89113',
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const DisplayMap = ({setSelectedPage}: Props) => {
  const mapOptions = {} // TODO: Fill this out to customize Example: https://developers.google.com/maps/documentation/javascript/examples/style-array
    return (
      <>
        <GoogleMap
          apiKey="AIzaSyCrOx4Pu77nCrav85qUJUI7Uldj-SALPC8"
          defaultCenter={{
            lat: YUMMI_HAIR_LOCATION.lat,
            lng: YUMMI_HAIR_LOCATION.lng,
          }}
          defaultZoom={YUMMI_HAIR_LOCATION.zoom}
          mapMinHeight="100vh"
          options={mapOptions}
          
        > 
          <LocationPin lat={YUMMI_HAIR_LOCATION.lat} lng={YUMMI_HAIR_LOCATION.lng} text={YUMMI_HAIR_LOCATION.label} />
        </GoogleMap>
      </>
    )
} 

export default DisplayMap;