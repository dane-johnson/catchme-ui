const defaultState = {
  feed: [],
  target: null
}
const ingame = (state=defaultState, action) => {
  switch (action.type) {
    case "ADD_FEED_EVENT": {
      const feed = state.feed.slice(); //For immutability
      const event = action.payload;
      feed.unshift(event) //Put the important stuff first
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
