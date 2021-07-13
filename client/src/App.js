import React, { Component } from 'react'
import Video from './components/Video/Video'
import Home from './components/Home/Home'
// import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/Login/App'
import WhiteBoard from './components/WhiteBoard/Container/Container'
// import MainPage from './components/MainPage/Mainpage'

class App extends Component {
	componentWillMount(){
		if(window.location.hostname!=="localhost"&&window.location.protocol==="http:"){
			window.location.replace("https://"+window.location.hostname+(window.location.path||"")+(window.location.search||""))
		}
	}
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						{/* <Route path="/login" exact component={Login} /> */}
						<Route path="/login" >
							<MainPage />
						</Route>
						<Route path="/meet/:url" component={Video} />
						<Route path="/whiteBoard/:url" component={WhiteBoard} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;