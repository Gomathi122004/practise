import logo from './logo.svg';
import './App.css';
import { Usercard } from './component';
import { Route,Routes } from 'react-router-dom';
import { Home } from './component/home';
import { About } from './component/about';
import { Blog } from './component/blog';
import { Dashboard } from './component/products/dashboard';
import { Productlist } from './component/products/productlist';
import { Productreview } from './component/products/productreview';
import { General, GeneralL } from './component/general';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path= "/products"element={<Dashboard/>}>
        <Route path='productlist' element={<Productlist/>}/>
        <Route path='productreview' element={<Productreview/>}/></Route>
        <Route path='/general' element= {<General />}/>

      </Routes>=

      {/* <a href='/about'>about</a> <br /> */}
      {/* <a href='/blog'>blog</a> <br />
      <a href='/home'>home</a>  */}

      {/* <link to="about">about</link> */}

    </div>
  );
}



    /* /* <Usercard  name={'john doe'} email= {'john.doe@example.com'} /> */
    /* <Usercard name={'Gomathi'} email= {'gomathigomathi1030@gmail.com'} />
    <Usercard name={'Gomathi'} email= {'hasini@gmail.com'}/>
    <Usercard name={'Gomz'} email= {'gomz1030@gmail.com'}/> */ 

export default App;


