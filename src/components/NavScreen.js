import React from 'react'
import { Map, Marker, TileLayer, Circle } from 'react-leaflet'
import '../css/map.css'

class NavScreen extends React.Component{
  constructor(props) {
    super(props);
    const { position } = props;
    this.state = {
      center: [position.coords.latitude, position.coords.longitude]
    }
  }
  render() {
    const { position, size } = this.props;
    const { center } = this.state;
    if (!position) return null;
    const me = [position.coords.latitude, position.coords.longitude]
    return (
      <Map center={center} zoom={20}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={me}/>
        <Circle center={me} radius={size}/>
      </Map>
    )
  }
}

export default NavScreen
