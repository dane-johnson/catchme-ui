import React from 'react'
import { Map, Marker, TileLayer, Circle } from 'react-leaflet'
import '../css/map.css'

const CENTER_RESET_DELAY = 6000

const getLatLng = (position) => [position.coords.latitude, position.coords.longitude]

class NavScreen extends React.Component{
  constructor(props) {
    super(props);
    const { position } = props;
    this.state = {
      center: getLatLng(position),
      followMarker: true
    }
    this.handleMoveend = this.handleMoveend.bind(this);
    this.returnToMarker = this.returnToMarker.bind(this);
    this.handleMove = this.handleMove.bind(this);
  }
  handleMove() {
    const { timeoutId } = this.state
    if (!timeoutId) return
    window.clearTimeout(timeoutId)
    this.setState({timeoutId: null})
  }
  handleMoveend(ev) {
    const center = ev.target.getCenter()
    const timeoutId = window.setTimeout(this.returnToMarker, CENTER_RESET_DELAY)
    this.setState({center, timeoutId, followMarker: false})
  }
  returnToMarker() {
    const { position } = this.props
    this.setState({center: getLatLng(position), followMarker: true})
  }
  render() {
    const { position, size } = this.props;
    const { center, followMarker } = this.state;
    if (!position) return null;
    const me = getLatLng(position);
    const mapCenter = (followMarker ? me : center)
    return (
      <Map
        center={mapCenter}
        zoom={20}
        onMove={this.handleMove}
        onMoveend={this.handleMoveend}
        useFlyTo={true}
        >
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
