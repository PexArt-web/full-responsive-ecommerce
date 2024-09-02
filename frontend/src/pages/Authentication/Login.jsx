import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const { login , error, isLoading } = useLogin()
  const navigate = useNavigate()

  const handleClick = async (e) => {
    e.preventDefault()
    await login(email, password)
      navigate('/')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Log In
        </h2>

        <form className="space-y-4" onSubmit={handleClick}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
              required
              name="email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember_me"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>

            <div>
              <Link 
                to="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled= {isLoading}
          >
            {isLoading ? 'connecting' : 'Log in'}
          </button>
          {error && (
            <div className="mt-4 text-red-600 text-center">{error}</div>
          )}
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/create-account" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
