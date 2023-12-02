import React from 'react'
import ReactDOM from 'react-dom'
import ApiFetch from './Components/ApiFetch'
import HorrorApiFetch from './Components/GenreApiFetch/HorrorApiFetch'
import MusicApiFetch from './Components/GenreApiFetch/MusicApiFetch'
import ThrillerApiFetch from './Components/GenreApiFetch/ThrillerApiFetch'

import './App.css'

function App() {
  return (

    <>
    <ApiFetch/>
    <HorrorApiFetch/>
    <MusicApiFetch/>
    <ThrillerApiFetch/>
    </>
  )
}

export default App

// import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { Header } from './Components/WATCHLIST/Header'
// import { Watchlist } from './Components/WATCHLIST/Watchlist'
// import { Watched } from './Components/WATCHLIST/Watched'
// import { Adddd } from './Components/WATCHLIST/Adddd'
// import './App.css'
// // import "./lib/font-awesome/css/all.min.css";

// import { GlobalProvider } from './Components/WATCHLIST/GlobalState'

// function App() {
//   return (
//     <GlobalProvider>
//       <Router>
//         <Header />

//         <Switch>
//           <Route exact path="/">
//             <Watchlist />
//           </Route>
//           <Route path="/adddd">
//             <Adddd />
//           </Route>
//           <Route path="/watched">
//             <Watched />
//           </Route>
//         </Switch>
//       </Router>
//     </GlobalProvider>
//   )
// }

// export default App
