import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useOutletContext();
  return (
    <div className="min-h-[calc(100vh-96px)] flex items-center justify-center py-10 w-full">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden grid lg:grid-cols-2">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-[#fece51] p-12">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Welcome Back
          </h1>

          <p className="text-lg text-gray-800 leading-8">
            Sign in to explore verified properties, connect with trusted agents,
            and manage your real estate journey easily.
          </p>

          <img src="/bg.png" alt="" className="mt-10 w-full max-w-md mx-auto" />
        </div>

        {/* Right Side */}
        <div className="p-8 sm:p-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Sign In</h2>

          <p className="text-gray-500 mb-8">Access your SidhaaMakan account</p>

          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setUser(true);
              navigate("/");
            }}
          >
            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Email
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#fece51] transition-colors">
                <Mail size={20} className="text-gray-400 mr-3" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-[#fece51] transition-colors">
                <Lock size={20} className="text-gray-400 mr-3" />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full outline-none"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-[#fece51] hover:bg-[#ebae11] transition-colors duration-300 py-4 rounded-xl font-semibold text-lg"
            >
              Sign In
            </button>
          </form>

          <p className="text-gray-500 mt-8 text-center">
            Don&apos;t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#d69e00] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
