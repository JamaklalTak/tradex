import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import appReducer from '../pages/App/store/reducers';

const history = createBrowserHistory();

const combinedAppReducers = combineReducers({
  router: connectRouter(history),
  appReducer,
});

export default combinedAppReducers;
