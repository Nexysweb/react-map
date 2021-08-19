import * as T from './type'

const addressToString = (a:Partial<T.Address>) :string=> [a.street, a.postalcode, a.city, a.county, a.state, a.country]
  .map(x => x ? x : '')
  .join(',')

const getAddressString =  (address: string | Partial<T.Address>):string => {
  if (typeof address === 'string') {
    return address;
  }

  return addressToString(address);
}

export const latLonFromAddress = async (address: string | Partial<T.Address>):Promise<T.Nominatim[]> => {
  const addressString = getAddressString(address)
  const uAddress = encodeURI(addressString)
  const url = `https://nominatim.openstreetmap.org/search.php?q=${uAddress}&format=json`
  const r = await fetch(url).then(x => x.json())

  if (r === []) {
    throw Error('No address could be found')
  }

  return r;
  //https://nominatim.openstreetmap.org/search.php?street=Rte+de+Crassier+7&city=Eysins&county=&state=&country=Switzerland&postalcode=&format=json
}

export const mapFromLatLon = (lat: string, lon: string, zoomLevel: number, apiKey?: string, lang: string = 'en'):string => {
  const q = lat + ',' + lon

  const cs = {
    q,
    hl: lang,
    z: zoomLevel,
    output: 'embed',
    key: apiKey
  }
  
  const params:string = Object.entries(cs).map(([k,v]) => k + '=' + encodeURIComponent(v)).join('&');

  return'https://maps.google.com/maps?' + params
}
