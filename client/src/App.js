import logo from './logo.svg';
import './App.css';
import AddPost from './AddPost';
import EditPost from './EditPost';

import Postlist from './Postlist';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:'teal', color:'white' , padding:'10px'}}>MERN  STACK  CRUD Application</h1>
      <BrowserRouter><Routes>

      <Route path='/' Component={Postlist} exact />
      <Route path='/addpost' Component={AddPost} exact/>
      <Route path='/editpost/:postid'  Component={EditPost} exact />
      

      </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
