import * as G from './geo'
import * as T from './type'

test('latLonFromAddress', async () => {
  const e:T.Nominatim[] = [{"place_id":171457980,"licence":"Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright","osm_type":"way","osm_id":371206578,"boundingbox":["46.3843884","46.3851206","6.214201","6.2152684"],"lat":"46.384754599999994","lon":"6.21473356357032","display_name":"7, Route de Crassier, Petit Eysins, Eysins, District de Nyon, Vaud, 1262, Switzerland","class":"building","type":"yes","importance":0.411}]
  const r = await G.latLonFromAddress('rte+de+crassier+7+eysins')
  expect(r).toEqual(e)
})

test('mapFromLatLon', () => {
  const r = G.mapFromLatLon('mylat', 'mylon', 10, 'mykey')
  const e = 'https://maps.google.com/maps?q=mylat%2Cmylon&hl=en&z=10&output=embed&key=mykey'
  expect(r).toEqual(e)
})

