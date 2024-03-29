import React from 'react';

import * as Geo from './geo';
import * as T from './type';

const Loading = () => <p><i>Loading</i></p>

export default (props: T.Props) => {
  const {
    address,
    LoadingComponent = <Loading/>,
    width = 600,
    height = 450,
    zoomLevel = 14,
    lang = 'en',
    frameBorder = 0,
    style = {border:0},
    tabIndex = 0
  } = props;
  const [ geoUrl, setUrl ] = React.useState<string | null>(null);
  const [ notFound, setNotFound ] = React.useState<boolean>(false);

  try {
    Geo.latLonFromAddress(address).then(x => {
  
      if (x.length === 0) {
        setNotFound(true);
      } 

      const { lat, lon } = x[0];

      const url = Geo.mapFromLatLon(lat, lon, zoomLevel, props.apiKey, lang);
      setUrl(url)
    })
  } catch (err) {
    console.warn(err);
  }
  
  if (notFound) {
    return <p><i>Address could not be placed on map</i></p>
  }

  if (!geoUrl) {
    return LoadingComponent
  }

  return<iframe
    src={geoUrl}
    width={width}
    height={height}
    frameBorder={frameBorder}
    style={style} 
    aria-hidden="false"
    tabIndex={tabIndex}
  ></iframe>
}
