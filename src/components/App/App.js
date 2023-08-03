import UserForm from "../Auth";
import Header from "../Header";
import AppRoutes from "../Routes/Routes";
import Sidebar from "../Sidebar/Sidebar";

function App() {
	return <div className='app'>
		<div className='container'>
			<Sidebar />
			<div className='wrapper'>
				<Header />
				<AppRoutes />
			</div>
		</div>
		<UserForm />


	</div>
}

export default App;
