import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';

const Home = lazy(() => import('../pages/Home'));
const NoExist = lazy(() => import('../pages/NoExist'));

const Routes = (props) => {
    return(
        <Suspense
        fallback={
            <div className="loaderContainer">
              <div className="loaderWrapper">
                <div className="loader">Loading...</div>
              </div>
            </div>
          }
        >
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/*' component={NoExist} />
          </Switch>
        </Suspense>
    );
}

export default Routes;