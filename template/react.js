export const appTemplate = (config) => {

    

    return `
    import React from 'react';
    import { Switch, HashRouter as Router, Route, IndexRoute } from 'react-router-dom';
    import RouterConfig from './router';
    import { Provider } from 'react-redux';
    import configureStore from './redux/store';
    
    const store = configureStore();
    
    const App = () => (
      <Provider store={store}>
        <Router>
            {
              Object.keys(RouterConfig).map(name => {
                const CurrentRouter = RouterConfig[name];
                return <CurrentRouter key={name}/>
              })
            }
        </Router>
      </Provider>
    );
    
    export default App;
    `
}