import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";
export const AdminUpdate = () => {

    const [data, setData] = useState({

        username:"",
        email:"",
        phone:"",
    });
    const params = useParams();
    console.log("params single user:",params);
    const {authorizationToken} = useAuth();
    const getSingleUserData= async (id) => {
        try {
          const response = await fetch(`http://localhost:5001/api/admin/users/${params.id}`,
            {
             method: "GET",
             headers: {
                Authorization: authorizationToken ,
             },
            }
          );
          const data = await response.json();
          console.log(`users single data: ${data}`);
          setData(data);
        //   if(response.ok){
        //     getAllUserData();
        //   }
        }catch (error) {
          console.log(error);
        }
      };
    useEffect(() => {
        getSingleUserData();

    },[]);
    const handleInput = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setData({
        ... data,
      [name]:value,

      })
    };

const handleSubmit = async(e) => {
  e.preventDefault();
  try {
  const response = await fetch(`http://localhost:5001/api/admin/users/update/${params.id}`,
            {
              
             method: "PATCH",
             
              headers: {
                "Content-Type": "application/json",
              
                Authorization: authorizationToken ,
             },
             body: JSON.stringify(data),
            }
          );

          if(response.ok){
          toast.success("Update Successful");
          }else {
          toast.error("Update Successful ");

          }
  }catch (error){
  console.log(error);
}
};

return (
    <section className="section-data">
<div className="data-content container">
  <h1 className="main-heading">Update User Data</h1>
</div>
{/* <h1>data Page</h1> */}
<div className="container grid grid-two-cols">
  
  <section className="section-form">
    <form onSubmit={handleSubmit}> 
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          // {
          //   user?? <> value = {} </>
          // }
           value={data.username}
           onChange={handleInput}
          // autoCapitalize="off"
          required
        />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          // {
          //   user?? <> value = {} </>
          // }
          autocomplete="off"
          value={data.email}
          onChange={handleInput}
          //autoCapitalize="off"
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Mobile</label>
        <textarea 
          type="phone"
          name="phone"
          id="phone" 
          autoComplete="off" 
          value={data.phone} 
          onChange={handleInput}
          required 
          cols="30" 
          rows="10"></textarea>
      </div>
      <div>
        <button type="submit">Update</button>
      </div>

    </form>
  </section>
</div>

</section>
)};