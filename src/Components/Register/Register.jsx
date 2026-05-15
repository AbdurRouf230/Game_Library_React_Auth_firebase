import { Eye, EyeClosed } from "lucide-react";
import { use, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { user, createUser } = use(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  if (user) {
    navigate("/");
    return;
  }
  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const password = e.target.password.value;

    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    setError("");
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!uppercaseRegex.test(password)) {
      setError("Password must have at least one uppercase letter");
      return;
    }

    if (!lowercaseRegex.test(password)) {
      setError("Password must have at least one lowercase letter");
      return;
    }

    console.log(name, email, photoUrl, password);

    // Registration logic
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully registered", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        console.log("Registration error is : ", err);
        toast.error("Registration failed", {
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
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Photo url</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Password</label>
                <div className="relative w-full">
                  <input
                    type={`${toggle ? "text" : "password"}`}
                    name="password"
                    placeholder="Password"
                    className="input w-full pr-16"
                  />

                  <button
                    onClick={() => setToggle(!toggle)}
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2"
                  >
                    {toggle ? <EyeClosed></EyeClosed> : <Eye></Eye>}
                  </button>
                </div>
                <p className="font-bold">{error}</p>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <div>
              <p className=" text-blue-400">
                Have a Account ?
                <Link to={"/login"} className="text-blue font-bold">
                  {" "}
                  Login Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
