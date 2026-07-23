import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { sagaMiddleware, store } from './store/index.js'
import handleMessage from './saga/index.js'
import setupSocket from './socket/index.js'
const socket=setupSocket(store.dispatch,username);
sagaMiddleware.run(handleMessage,{socket,username});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
