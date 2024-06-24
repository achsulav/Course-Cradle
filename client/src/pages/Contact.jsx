import { useState } from "react";
import { useAuth} from "../store/auth";

const defaultContactFormData = {
  username: "",
  email: "",
  message: "",
};


export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData, setUserData] = useState(true);
  const {user} = useAuth();

if (userData && user) {
  setContact({
    username: user.username,
    email: user.email,
    message: "",
  });
  setUserData(false);
}

  const handleInput= (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
     [name]: value,

    });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   try {
    const response = await fetch("http://localhost:5001/api/form/contact", {
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify(contact),
    });
    if(response.ok){
      setContact(defaultContactFormData);
      const data= await response.json();
      console.log(data);
      alert("Message sent successfully");
    }
   } catch (error) {
    console.log(error);
   }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* <h1>Contact Page</h1> */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/preview.png" alt="always ready to help you" />
          </div>

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
                   value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  //autoCapitalize="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea 
                  type="message"
                  name="message"
                  id="message" 
                  autoComplete="off" 
                  value={contact.message} 
                  onChange={handleInput}
                  required 
                  cols="30" 
                  rows="10"></textarea>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>

            </form>
          </section>
        </div>
        <section className="mb-3">
<iframe
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7063.691632646764!2d85.3163373426045!3d27.722046404696275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1919f7dd0685%3A0xc59baa0caae9c83d!2sLazimpat%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1718975120282!5m2!1sen!2snp" width="100%" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
      </section>
    </>
  );
};