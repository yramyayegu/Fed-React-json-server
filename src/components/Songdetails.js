import {useState} from "react" 
import {withRouter} from 'react-router-dom'
const axios = require('axios');
function Songdetails(props)
{
	let [songdata,setsongdata] = useState([])
	async  function GetRequest() {
	var result = null;
	var url = 'http://localhost:3000/songdetails/'+props.match.params.id
	await axios.get(url)
	.then(function (response) {result = response.data; })
	.catch(function (error) {result = error;});
		setsongdata(result)
	}
    if(songdata.length === 0){	GetRequest() }
    return(
	<div className="container">
		<h3>Song Number : {props.match.params.id}</h3>
		<table>
		  <tr>
			<th>Song</th>
			<th>Details</th>
		  </tr>
		  <tr>
			<td>Title</td>
			<td>{songdata.title}</td>
		  </tr>
		  <tr>
			<td>Language</td>
			<td>{songdata.language}</td>
		  </tr>
		  <tr>
			<td>Movie</td>
			<td>{songdata.movie}</td>
		  </tr>
		  <tr>
			<td>Singer</td>
			<td>{songdata.singer}</td>
		  </tr>
		  <tr>
			<td>Song Length</td>
			<td>{songdata.song_length}</td>
		  </tr>
		</table>
	</div>

    )
}

export default withRouter(Songdetails);