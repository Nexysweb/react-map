export interface Nominatim {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
  display_name: string;
  class: string;
  type: string;
  importance: number;
}

export interface Address {
  street: string,
  postalcode: string,
  city: string,
  county: string,
  state: string
  country: string
}

export interface Props {
  address: string | Partial<Address>,
  LoadingComponent?: JSX.Element,
  width?: string | number,
  height?: string | number,
  lang?: string,
  frameBorder?: string | number,
  style?: React.CSSProperties,
  tabIndex?: number,
  zoomLevel?: number,
  apiKey?: string
}