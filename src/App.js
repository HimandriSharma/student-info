import "./App.css";
import Pages from "./pages";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Pages />
				</Router>
			</Provider>
		</div>
	);
}

export default App;
