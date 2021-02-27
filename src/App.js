import './App.css';
// import Slidercar from './Carousel/SliderCarousel';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Services from './components/Services'
import Home from './components/Home'
import Lists from './components/Lists'
import Products from './components/Products'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import ImageSlider from './componentSlider/ImageSlider';
import {SliderData} from './componentSlider/SliderData';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <Navbar/>
          <Route exact path='/home' component={Home}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/lists' component={Lists}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        <ImageSlider slides ={SliderData}/>
        <Footer/>
      </Router>
      
  );
}

export default App;
