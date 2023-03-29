import React from 'react';

type Props = {
    children: React.ReactNode;
}

const TitleText = ({children}: Props) => {
  return (
    <div>
    <h1 className="font-family: font-playfair text-3xl font-bold pb-10">
        {children}
    </h1>
    </div>
  )
}

export default TitleText;