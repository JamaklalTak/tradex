import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './pages/App';
import { store, history } from './store';

import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';

import * as serviceWorker from './serviceWorker';

class Root extends Component {
  render(){
    return(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App history={history}/>
          </ThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
