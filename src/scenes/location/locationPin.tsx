import { Icon } from '@iconify/react';

export type Location = {
    lat: number;
    lng: number;
    text: string;
}

const LocationPin = ({text, lat, lng}: Location) => {
  return (
    <div>
        <Icon icon="topcoat:location" />
        <p>{text}</p>
        <div>{lat}</div>
        <div>{lng}</div>
    </div>
  )
}

export default LocationPin;