import _ from 'lodash'
import { updatePosition } from '../actions'

const registerListener = (dispatch) => {
  //At most, dispatch once a second.
  const throttledDispatch = _.throttle(dispatch, 1000) //At most, dispatch once a second.
  navigator.geolocation.watchPosition((position) => {
    throttledDispatch(updatePosition(position))
  }, null, {enableHighAccuracy: true});
}

export default registerListener;
