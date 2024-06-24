import { NavLink, Outlet ,Navigate} from "react-router-dom";
import {FaUser, FaHome, FaRegListAlt} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth} from "../../store/auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("Admin Layout", user);

    if(isLoading) {
        return <h1> Loading ...</h1>;
    }

    if(!user.isAdmin) {
        return <Navigate to="/"/>
    }
    return (
      <>
          <header>
            <div classNAme="container">
                <nav>
                    <ul>


                    <li>
                        <NavLink to="/admin"><Fa-Home/><b>Dashboard</b></NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/admin/users"><FaUser/><b>Users</b></NavLink>
                        </li>
                        <li>
                        <NavLink to="/admin/contacts"><FaMessage/><b>Contacts</b></NavLink>
                            
                        </li>
                        
                        
                       
                        
                    </ul>
                </nav>
            </div>
          </header>
          <Outlet />
          </>
    );

};