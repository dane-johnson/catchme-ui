import { updatePosition } from '../actions'

const registerListener = (dispatch) => {
  navigator.geolocation.watchPosition((position) => {
    dispatch(updatePosition(position))
  }, null, {enableHighAccuracy: true});
}

export default registerListener;
