import 'babel-polyfill'
import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import configureStore from '../common/store/configureStore'
// import App from '../common/containers/App'
import PC_APP from '../react/PC_App'

// const preloadedState = window.__PRELOADED_STATE__
// const store = configureStore(preloadedState)
const rootElement = document.getElementById('app');

render(
    '<PC_APP/>',
    rootElement
);
// render(
//   <Provider store={store}>
//     <App/>
//   </Provider>,
//   rootElement
// )
