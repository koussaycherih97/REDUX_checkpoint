/* import logo from './logo.svg'; */
import './App.css';
import { connect } from 'react-redux';
import ToDo from './Todo/ToDo';


function App() {

  return (
    <div className="App">
      
      <ToDo></ToDo>
    </div>
  );
}
const mapStateToProps = (state)=>{
  return{
    Add: state.Reducers
  }
}
export default connect (mapStateToProps)(App);
