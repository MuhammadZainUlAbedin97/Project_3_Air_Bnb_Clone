import "../App.css";

function Hero() {
	return (
		<div className="hero">
			<div className="hero-img">
				<img
					src={`./images/Group 77.png`}
					alt="logo"
					title="Air Bnb"
					width="800px"
					height="500px"
				/>
			</div>
			<div className="hero-desc">
				<h1>Online Experiences</h1>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</div>
	);
}

export default Hero;
