import Home from './Home';
import './App.css';
import Header from './Header';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateVlue } from './StateProvider';
import Payment from './Payment';





function App() {

  const [{}, dispatch] = useStateVlue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser){
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <BrowserRouter>
     
      
    <div className="App">
      
      
    </div>
    
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route exact path="/" element={[<Header/>,<Home/>]}/>
      <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
      <Route path="/payment" element={[<Header/>,<Payment/>]}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
