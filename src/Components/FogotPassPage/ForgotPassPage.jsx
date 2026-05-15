import { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContexts/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeClosed } from "lucide-react";

const ForgotPassPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { user, forgotPassword } = use(AuthContext);

  const location = useLocation();

  const email = location.state?.email || "";
  console.log("Email from location state: ", email);
  if (user) {
    navigate("/");
    return;
  }

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    setError("");

    forgotPassword(email)
      .then((result) => {
        toast.success("Password reset email sent", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Password reset failed", {
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
            <h1 className="text-5xl font-bold">Reset the Password</h1>
            <form onSubmit={handlePasswordReset}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  defaultValue={email}
                />
                <div>
                  <Link to={"/login"} className="link link-hover">
                    Go to Login page
                  </Link>
                </div>
                <p className="font-bold">{error}</p>
                <button className="btn btn-neutral mt-4">Reset Password</button>
              </fieldset>
            </form>
            <div>
              <p className=" text-blue-400">
                Did not have account ?
                <Link to={"/register"} className="text-blue font-bold">
                  {" "}
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassPage;
