import React from 'react'
import { Map, Marker, TileLayer, Circle } from 'react-leaflet'
import '../css/map.css'

const CENTER_RESET_DELAY = 15000

const getLatLng = (position) => [position.coords.latitude, position.coords.longitude]

class NavScreen extends React.Component{
  constructor(props) {
    super(props);
    const { position } = props;
    this.state = {
      center: getLatLng(position)
    }
    this.handleMoveend = this.handleMoveend.bind(this);
    this.returnToMarker = this.returnToMarker.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.startResetDaemon = this.startResetDaemon.bind(this);
    this.stopResetDaemon = this.stopResetDaemon.bind(this);
  }
  handleMove() {
    this.stopResetDaemon()
  }
  handleMoveend(ev) {
    const center = ev.target.getCenter()
    this.startResetDaemon()
  }
  returnToMarker() {
    const { position } = this.props
    this.setState({center: getLatLng(position)})
  }
  startResetDaemon() {
    const intervalId = window.setInterval(this.returnToMarker, CENTER_RESET_DELAY)
    this.setState({intervalId})
  }
  stopResetDaemon() {
    const { intervalId } = this.state
    if (!intervalId) return
    window.clearInterval(intervalId)
    this.setState({intervalId: null})
  }
  render() {
    const { position, size } = this.props;
    const { center } = this.state;
    if (!position) return null;
    const me = getLatLng(position);
    return (
      <Map
        center={center}
        zoom={20}
        onMove={this.handleMove}
        onMoveend={this.handleMoveend}
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
