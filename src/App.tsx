import React from 'react';
import {AllPost,UserShow,Home,AllUser,UserPosts} from './components'

import {BrowserRouter,Route,Link} from 'react-router-dom'
import {Navigation} from './components/styledComponents/styled'
import './App.css';

function App() {
  return (
    <div >
      <h1>learn react</h1>
    <BrowserRouter>
    <Navigation>
      <ul>
      <li> <Link to="/">Home</Link></li>
     <li><Link to="/allusers">allusers</Link></li>  
       <li><Link to="/allposts">allposts</Link></li>

       </ul>
    </Navigation>
    
 
    
      <Route path="/" component={Home} exact={true}/>
  
   
    <Route path='/users/:id' component={UserShow}/>
    <Route path="/allposts" component ={AllPost} exact ={true}/>
    <Route path="/allusers" component={AllUser}/>
    <Route path="/userposts/:id" component={UserPosts}/>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
