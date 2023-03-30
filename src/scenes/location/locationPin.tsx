import { Icon } from '@iconify/react';

type Props = {
    text: string;
}

const LocationPin = ({text}: Props) => {
  return (
    <div>
        <Icon icon="topcoat:location" />
        <p>{text}</p>
    </div>
  )
}

export default LocationPin;