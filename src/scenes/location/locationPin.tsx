import { Icon } from '@iconify/react';

export type Location = {
  lat: number;
  lng: number;
  text: string;
}

const LocationPin = ({text, lat, lng}: Location) => {
  return (
    <div className="pin">
      <Icon icon="topcoat:location" className="pin-icon"/>
      <p className="pin-text">{text}</p>
    </div>
  )
}

export default LocationPin;