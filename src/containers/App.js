import './App.css';
import { Route } from "react-router-dom";
import Card from '../components/Card'
import Nav from '../components/Nav'
import Ciudad from '../components/Ciudad'

function App() {
  return (
    <div> 
      <Route  path="/app_weather" component={Nav} />
      <Route exact path="/app_weather" component={Card} />
      <Route exact path="/ciudad/:id" component={Ciudad} />
    </div>
  );
}

export default App;
