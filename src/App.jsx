import Navbar from "./components/Navbar";
import About from "./components/About";
import Technologies from "./components/Technologies";

function App() {
	return (
		<>
			<Navbar />
			<div class="content">
				<About />
				<Technologies />
			</div>
		</>
	);
}

export default App;
