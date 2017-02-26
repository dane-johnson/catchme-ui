import React from 'react';
import { connect } from 'react-redux';

import { PregameContainer } from './containers'
import { JoinContainer } from './containers'

const App = ({ context }) => {
  switch (context) {
    case 'PRE_GAME': {
      return <PregameContainer />;
    }
    case 'JOIN': {
      return <JoinContainer />;
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
