import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import cardData from "./components/data";
import jokesData from "./components/jokesData";
import Jokes from "./components/Jokes";

function App() {
	// const jokes = jokesData.map((joke) => {
	// 	return <Jokes Setup={joke.setup} Punchline={joke.punchline} />;
	// });

	const data = cardData.map((data) => {
		return <Card key={data.id} {...data} />;
	});

	return (
		<>
			{/* {jokes} */}
			<Navbar />
			<Hero />
			<section className="card-list">{data}</section>
		</>
	);
}

export default App;
