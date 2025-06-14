import { Outlet} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from "./routes/AppRoutes";

function App() {

   return (
    <>
      <Header>
      </Header>

      <AppRoutes/>
      <Outlet/>

      <Footer></Footer>
    </>

   
   );
}

export default App;
