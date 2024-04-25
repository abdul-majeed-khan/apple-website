import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}

export default App

// App.js
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Layout from './components/layout';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar'
// import Highlights from './components/Highlights';

// const App = () => {
//   return (
//     <Router>
//       <Layout>
//         <Navbar />
//         <Switch>
//           <Route path="/" exact>
//             <Hero />
//           </Route>
//           <Route>
//             <Highlights />
//           </Route>
//         </Switch>
//       </Layout>
//     </Router>
//   );
// };

// export default App;
