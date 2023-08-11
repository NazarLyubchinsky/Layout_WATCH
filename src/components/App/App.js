import UserForm from "../Auth";
import Footer from "../Footer/Footer";
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
				<Footer />
		<UserForm />


	</div>
}

export default App;
