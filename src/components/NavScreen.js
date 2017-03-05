import React from 'react'
import { Map, Marker, TileLayer } from 'react-leaflet'
import '../css/map.css'

class NavScreen extends React.Component{
  render() {
    const { position } = this.props;
    if (!position) return null;
    const center = [position.coords.latitude, position.coords.longitude]
    return (
      <Map center={center} zoom={20}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}/>
      </Map>
    )
  }
}

export default NavScreen
