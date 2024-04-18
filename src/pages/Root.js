import Footer from "../components/Footer";
import NavBar from "../components/NavBar"
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <NavBar />
      
      <div className="container mx-auto">
        
        <Outlet />
      </div>
      <Footer/>
    </>
  )
}

export default Root
