import footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <div>
            <Navbar />
            {children}
            <footer />
        </div>
     );
}
 
export default Layout;
