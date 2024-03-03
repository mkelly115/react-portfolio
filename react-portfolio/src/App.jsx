// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import AboutMe from './pages/About';
import Form from './pages/Contact';

// const App = () => {
//   return (
//     // <Router>
//       <div>
//         <Header />
//         <AboutMe />
//         {/* <Switch>
//           <Route exact path="/" component={AboutMe} />
//           <Route path="/about" component={AboutMe} />
//         </Switch> */}
//         <Footer />
//       </div>
//     // </Router>
//   );
// };

const App = () => {
  return (
    <div>
      <Form />
      <footer>
      <Footer />
    </footer>
    </div>

  )
};

export default App;