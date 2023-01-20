import "../App.css";

function Card(props) {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "ONLINE";
	}

	return (
		<div className="card">
			<div className="card-badge">{badgeText}</div>
			<img
				src={`./images/${props.coverImg}`}
				alt={props.title}
				title={props.title}
				width="230px"
				height="300px"
			/>
			<div>
				⭐ {props.stats.rating}{" "}
				<span className="gray">
					({props.stats.reviewCount}).{props.location}
				</span>
			</div>
			<div>
				<p>{props.title}</p>
			</div>
			<div>
				<span className="bold">From ${props.price}</span> /person
			</div>
		</div>
	);
}

export default Card;
