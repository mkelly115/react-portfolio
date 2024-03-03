// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import AboutMe from './pages/About';
import ResumeDownload from './pages/Resume';
// import Form from './pages/Contact';
// import Nav from './components/Navigation'


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
      <header>
        < Header />
      </header>
      <ResumeDownload />
      <footer>
      <Footer />
    </footer>
    </div>

  )
};

// const App = () => {
//   return (
//     <div>
//       <Nav />
//     </div>
//   )
// }

export default App;