
import './App.css';
import Head from "./Components/Head"
import Body from "./Components/Body"
import {Provider} from "react-redux"
import store from "./Components/utils/store"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import WatchPage from './Components/WatchPage';
import Music from './Components/Music';
import News from "./Components/News"
import Sports from "./Components/Sports"
import SearchResults from './Components/SearchResults';
import Maincomponent from "./Components/Maincomponent";


// const appRouter=createBrowserRouter([{
//   path:"/",
//   element:<Body/>,
//   children:[{
//     path:"/",
//     element:<Maincomponent/>},
//     {
//     path:"/watch",
//     element:<WatchPage/>
//   },{
//     path:"/music",
//     element:<Music/>
//   },{
//     path:"/news",
//     element:<News/>
//   },{
//     path:"/searchResults",
//     element:<SearchResults/>
//   }]

// }])

function App() {
  return (
    <Provider store={store}>
      <Router>
       <Head />
        <Routes>
          <Route path="/" element={<Body />}>
            <Route index element={<Maincomponent />} />
            <Route path="/watch" element={<WatchPage />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/searchResults" element={<SearchResults />} />
            <Route path="/sports" element={<Sports/>}/>
          </Route>
        </Routes>
      </Router>
    </Provider>
    );
}

export default App;
