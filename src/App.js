import React from 'react';
import { connect } from 'react-redux';

import { Welcome } from './containers'
import { Pregame } from './containers'

const App = ({ context }) => {
  switch (context) {
    case 'WELCOME': {
      return <Welcome />;
    }
    case 'PREGAME': {
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
