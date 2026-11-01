import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import { AuthContext } from '../../../context/AuthContext';
import { auth, provider } from '../../../firebase/firebase.config';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(AuthContext);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential?.accessToken) {
          sessionStorage.setItem('token', credential.accessToken);
        }

        setLoggedInUser(result.user);

        const from = location.state?.from;
        const destination = from?.pathname
          ? {
              pathname: from.pathname,
              search: from.search,
              hash: from.hash,
            }
          : '/';
        navigate(destination, { replace: true });
      })
      .catch((error) => {
        console.error('Failed to sign in with Google:', error);
      });
  };
  return (
    <main className="vh-100">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 align-self-center justify-content-center">
            <div class="card w-75 mb-3 p-4 shadow border border-light">
              <div class="card-body">
                <h5 class="card-title text-center mb-5 text-secondary">Login</h5>
                <form>
                  <div class="form-floating mb-3 border-bottom">
                    <input
                      type="text"
                      class="form-control border border-0"
                      id="floatingInput"
                      placeholder="Please enter user name"
                    />
                    <label for="floatingInput">User Name</label>
                  </div>
                  <div class="form-floating mb-5 border-bottom">
                    <input
                      type="password"
                      class="form-control border border-0"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                </form>
                <div className="d-grid ">
                  <button class="btn linearButton">Sign In</button>
                  <hr className="my-4" />
                  <button class="btn linearButton" onClick={() => signInWithGoogle()}>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end align-items-end">
            {/* <div className="d-flex "> */}
            <img
              src={loginImg}
              alt=""
              className="img-fluid"
              style={{ height: '85%' }}
              // width={658}
            />
            {/* </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
