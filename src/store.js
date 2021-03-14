import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'


//Save state to storage, to save the details even after refreshing the browsing
function saveToLocalStorage(state) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (e) {
      console.error(e);
    }
  }
  
  //Load details from local storage and show in redux
  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (e) {
      console.error(e);
      return undefined;
    }
  }
  
  const preloadedState = loadFromLocalStorage();
  

const middleware = [thunk]

const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;