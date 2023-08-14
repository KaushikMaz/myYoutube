
import './App.css';
import Head from "./Components/Head"
import Body from "./Components/Body"
import {Provider} from "react-redux"
import store from "./Components/utils/store"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import WatchPage from './Components/WatchPage';
import Music from './Components/Music';
import Maincomponent from "./Components/Maincomponent"

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<Maincomponent/>},
    {
    path:"/watch",
    element:<WatchPage/>
  },{
    path:"/music",
    element:<Music/>
  }]

}])

function App() {
  return (
    <Provider store={store}>
      <Head/>
      <RouterProvider router={appRouter}/>
    </Provider>
     );
}

export default App;
