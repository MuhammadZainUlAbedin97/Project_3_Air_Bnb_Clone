import "../App.css";

function Jokes(props) {
	return (
		<>
			{props.Setup && <h4>Setup: {props.Setup}</h4>}
			<h2>Punchline: {props.Punchline}</h2>
			<br />
		</>
	);
}

export default Jokes;
