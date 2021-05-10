import {useState} from "react" 
import About from './About'
import Songlist from './Songlist'
import Songdetails from './Songdetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios = require('axios');

export default function Layout() {
	
let [titledata,settitledata] = useState([])
let [aboutdata,setaboutdata] = useState([])
let [songdata,setsongdata] = useState([])

async  function GetRequest() {
	var titleresult = null;
	var aboutresult = null;
	var songlistresult = null;
	
	await axios.get('http://localhost:3000/title')
	.then(function (response) {titleresult = response.data;	})
	.catch(function (error) {titleresult = error;});
		settitledata(titleresult)
		
		
	await axios.get('http://localhost:3000/about')
	.then(function (response) {	aboutresult = response.data;	})
	.catch(function (error) { aboutresult = error;	});
		setaboutdata(aboutresult)
		
	await axios.get('http://localhost:3000/songlist')
	.then(function (response) {	songlistresult = response.data;	})
	.catch(function (error) { songlistresult = error;	});
		setsongdata(songlistresult)
	 
	 }
	 
	 if(titledata.length === 0){	GetRequest() }
  return (
    <Router>
      <div>
	  	<h1>{titledata.title}</h1>
		<h3>{titledata.subtitle}</h3>
        <nav>
          <ul>
           
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Songlist">Song List</Link>
            </li>
          </ul>
        </nav>

        <Switch>
		
          <Route path="/about"> <About data={aboutdata.title} /> </Route>
          <Route path="/Songlist"> <Songlist data={songdata} /> </Route>
		  <Route path="/songdetails/:id" ><Songdetails /></Route>
		  <Route path="/"> <About data={aboutdata.title} /> </Route>
		  <Route path="**"> <NoMatch /> </Route>
        </Switch>
      </div>
    </Router>
  );
}


function NoMatch() {
	console.log("****")
  return (
    <div><h3>No match</h3></div>
  );
}
