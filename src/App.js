import React from 'react';
import { connect } from 'react-redux';

import Splash from './components/Splash';
import Join from './components/Join';
import Lobby from './components/Lobby';

const App = ({ context }) => {
  switch (context) {
    case 'SPLASH': {
      return <Splash />;
    }
    case 'JOIN': {
      return <Join />;
    }
    case 'LOBBY': {
      return <Lobby />;
    }
    default: {
      return null;
    }
  }
}

const mapStateToProps = (state) => ({
  context: state.context
})

export default connect(mapStateToProps)(App);
