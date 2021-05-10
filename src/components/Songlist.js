import {Link} from 'react-router-dom'
function Songlist(props) {	
let data = props.data;
let i = 1;
  return (
    <div>
	
	<table>
		<tr>
			<th>#</th>
			<th>Song</th>
			<th>Details</th>
			
		</tr>
		{
			data.map((item)=>
			<tr>
				<td>{i++}</td>
				<td>{item.title}</td>
				<td><Link className="slist" to={"/songdetails/"+item.id}><button>View Details</button></Link></td>
			</tr>
			)
		}
	</table>
    </div>
  );
}
export default Songlist;