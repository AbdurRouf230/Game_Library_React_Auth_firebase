import { use, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../AuthContexts/AuthContext";
import { toast } from "react-toastify";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const pass = e.target.password.value;
    const email = e.target.email.value;
    setError("");
    signInUser(email, pass)
      .then((result) => {
        const user = result.user;
        setError("Successfully login");
        toast.success("Successfully login", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        console.log("Login error is : ", err);
        setError(err.message);
        toast.error("Login failed", {
          position: "top-left",
          autoClose: 5000,
        });
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setError("Successfully login with google");
        toast.success("Successfully login with google", {
          position: "top-left",
          autoClose: 5000,
        });
      })
      .catch((err) => {
        console.log("Google login error is : ", err);
        setError(err.message);
        toast.error("Google login failed", {
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
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
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
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <p className="font-bold">{error}</p>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="btn bg-primary border-none text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
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

export default Login;
