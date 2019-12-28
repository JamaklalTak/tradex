import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router';

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
            <Route path='' component={} />
          </Switch>
        </Suspense>
    );
}

export default Routes;