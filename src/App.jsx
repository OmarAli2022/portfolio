import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Contact from './components/contact/Contact';
import ProductList from './components/productList/productList';
function App() {
  return (
    <div className="App">
    <Intro/>
    <About/>
    <ProductList />
    <Contact/>
    </div>
  );
}

export default App;
