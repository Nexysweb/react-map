import React from 'react';

import {Map, Type} from './lib';

function App() {
  const addressDefault:Partial<Type.Address> = {street:'Champ de Mars 5', country: 'France', postalcode: '75007' , city: 'Paris'}
  const [ address, setAddress ] = React.useState<string>('La Tour Eiffel')
  const [ addressMap, setAddressMap ] = React.useState<string | Partial<Type.Address>>(addressDefault)

  const handleClick = () => {
    setAddressMap(address)
  }

  return (
    <>
    <h3>Address shown on map</h3>
    <input type="text" value={address} onChange={x => setAddress(x.target.value)}/>
    <button onClick={handleClick}>Update</button>
    <br/>
    <Map address={addressMap}/>
    </>
  );
}

export default App;
