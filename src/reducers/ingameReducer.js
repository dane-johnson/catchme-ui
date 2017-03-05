const defaultState = {
  feed: [],
  target: null
}
const ingame = (state=defaultState, action) => {
  switch (action.type) {
    case "FEED_EVENT": {
      const feed = state.feed.slice(); //For immutability
      feed.unshift(action.payload) //Put the important stuff first
      state = {...state, feed}
      break;
    }
    case "SET_TARGET": {
      const target = action.payload;
      state = {...state, target};
      break;
    }
    default: {
      state = {...state}
    }
  }
  return state;
}

export default ingame
