import { Eye, EyeClosed } from "lucide-react";
import { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContexts/AuthContext";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user, updateUserProfile } = use(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleUpdateProfile = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    const photoUrl = e.target.photoUrl.value;
    setError("");
    updateUserProfile(name, photoUrl)
      .then(() => {
        toast.success("Profile updated successfully", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        console.log("Profile update error is : ", err);
        toast.error("Profile update failed", {
          position: "top-left",
          autoClose: 5000,
        });
      });
  };
  return (
    <div className="hero bg-black mt-2 min-h-screen w-11/12 mx-auto mb-2 rounded-xl">
      <div className="hero-content flex-col lg:min-w-[400px] lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Update the profile!</h1>
            <form onSubmit={handleUpdateProfile}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo url</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input"
                  placeholder="Photo URL"
                />

                <p className="font-bold">{error}</p>
                <button className="btn btn-neutral mt-4">Update Profile</button>
              </fieldset>
            </form>
            <div>
              <p className=" text-blue-400">
                <Link to={"/"} className="text-blue font-bold">
                  {" "}
                  Go to home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UpdateProfile;
