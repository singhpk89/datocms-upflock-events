

export default function LeaderBoard(){

    const data = [
        { userId: 3405462, userName: "Vishal", earnings: 1000 },
        { userId: 203, userName: "Nipun", earnings: 500 },
        { userId: 203, userName: "Akshay", earnings: 500 },
        { userId: 203, userName: "Madhur", earnings: 500 },
        { userId: 203, userName: "Harsh", earnings: 500 },
        { userId: 203, userName: "Sachin", earnings: 500 },
        { userId: 203, userName: "Shashank", earnings: 500 },
        { userId: 203, userName: "Robot", earnings: 500 },
        { userId: 203, userName: "Saurbh", earnings: 500 },
        { userId: 203, userName: "Shubham", earnings: 500 }
    ];



    function getRows(){
        let rows = new Array(data.length > 10 ? 10 : data.length)
			.fill(0)
			.map((z, i) => {
				
				return (
					<li key={i}>
						<img
							src={"http://www.rewards1.com/uploads/avatar/" + data[i].userId + ".jpg"}
							
						/>
						<mark>{data[i].userName}</mark>
						<small>{data[i].earnings.toFixed(2)}</small>
					</li>
				);
			});
            return rows;
    }

    return (
		


            <div className="leaderboard">
				<ol>{getRows()}</ol>
			</div>

		

    )
}





// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			data: []
// 		};
// 		setTimeout(
// 			() =>
// 				this.update([
// 			
// 				]),
// 			500
// 		);
// 		/*var socket = this.connect('wss://r1-contest-api.herokuapp.com', event => {
// 			this.update(JSON.parse(event.data));
// 		});*/
// 	}

// 	connect(uri, messageHandler, tries) {
// 		tries = tries || 0;
// 		var socket = new WebSocket(uri);
// 		socket.addEventListener("open", (event) => {
// 			tries = 0;
// 			console.log("Connected to wss!");
// 		});
// 		socket.addEventListener("message", messageHandler);
// 		socket.addEventListener("close", (event) => {
// 			tries < 8 && tries++;
// 			var delay = Math.floor((Math.random() + 0.5) * Math.pow(1.5, tries));
// 			console.log(
// 				"Disconnected from socket. Reconnecting with random exponential backoff (" +
// 					delay +
// 					" seconds)..."
// 			);
// 			setTimeout(
// 				this.connect.bind(this, uri, messageHandler, tries),
// 				1000 * delay
// 			);
// 		});
// 		return socket;
// 	}

// 	update(data) {
// 		this.setState({ data: data });
// 	}

// 	render() {
// 		return <Leaderboard title="Leaderboard" data={this.state.data} />;
// 	}

// 	componentDidUpdate() {
// 		var loader = document.getElementsByClassName("loader")[0];
// 		loader.classList.remove("initial");
// 		loader.style.opacity = 0;
// 		loader.style.visibility = "hidden";
// 	}
// }

// ReactDOM.render(<App />, document.getElementById("app"));
