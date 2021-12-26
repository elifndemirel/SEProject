import NavBar from "../components/NavBar";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.firstname.value);
    console.log(e.target.lastname.value);
    console.log(e.target.email.value);
    console.log(e.target.oldPassword.value);
    console.log(e.target.newPassword.value);
    console.log(e.target.confirmPassword.value);
  };

  if(sessionStorage.getItem("response")!=200){
    return <Navigate to="/"/>
  }
  
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-8 mx-auto">
            <div className="my-4">
              <form onSubmit={onSubmit}>
                <hr className="my-4" />
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="firstname" className="mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="lastname" className="mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control mb-2"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="userName" className="mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control mb-2"
                      id="userName"
                      name="username"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="city" className="mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      className="form-control mb-2"
                    />
                  </div>
                </div>
                <hr className="my-5" />
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label for="oldPassword" className="mb-2">
                        Old Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="oldPassword"
                        name="oldPassword"
                      />
                    </div>
                    <div className="form-group">
                      <label for="newPassword" className="mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="newPassword"
                        name="newPassword"
                      />
                    </div>
                    <div className="form-group">
                      <label for="confirmPassword" className="mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-2"
                        id="confirmPassword"
                        name="confirmPassword"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary mt-2 mb-5">
                    Save Change
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
