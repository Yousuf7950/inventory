import './App.css';
import react from 'react'
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddInventory from './components/classComponent';
import AddProduct from './components/funcComponent';
import { Header } from './components/Header';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
       <Header/>
      <div id="page-wrap" style={{margin:"1%"}}>
        <h1 style={{marginBottom:"30px"}}>Product Inventory form </h1>
        <AddInventory/>
        <div><hr/><hr/></div>
        <AddProduct/>
        
        </div>
    </div>
  );
}

export default App;