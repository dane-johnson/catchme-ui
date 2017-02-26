import React from 'react';
import { connect } from 'react-redux';

import { Welcome } from './containers'
import { Pregame } from './containers'

const App = ({ context }) => {
  switch (context) {
    case 'PRE_GAME': {
      return <Welcome />;
    }
    case 'JOIN': {
      return <Pregame />;
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
