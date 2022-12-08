import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function SignIn() {
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const checkSignup = (username, password) => {
    // for (let account of backendData) {
    //   if (account.username === username && account.password === password) {
    //     alert('Sign in successfully!');
    //     sessionStorage.setItem('username', username);
    //     navigate(route);
    //     return;
    //   }
    // }
    alert('Your username or password incorrect');
    return navigate('/signup');
  };
  const ContinueAsGuest = () => {
    return navigate('/home');
  };
  return (
    <div className="flex min-h-full items-center mb-80 justify-center py-12 pt-36 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-7xl font-bold tracking-tight text-orange-500">Sport Now</h2>
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-700">Sign up</h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <input
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
                type="text"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
                type="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <input
                onChange={(event) => {
                  setRetypePassword(event.target.value);
                }}
                value={retypePassword}
                type="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                placeholder="Retype Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div> */}
          </div>

          <div>
            <button
              onClick={() => checkSignup(username, password)}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-orange-400 group-hover:text-orange-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign up
            </button>
            <button
              type="submit"
              className="mt-4 group relative flex w-full justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-sm font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
              <Link to="/signin">Sign in</Link>
            </button>
            <p className="flex justify-center text-md  mt-2 hover:underline cursor-pointer text-orange-700" onClick={() => ContinueAsGuest()}>
              Continue as Guest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
