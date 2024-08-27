import logo from '/src/assets/Login/logo.png';
import Spinner from '../Spinner/Spinner'; 

function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171717]">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="mb-28 w-32 h-32" />
        <Spinner />
      </div>
    </div>
  );
}

export default Login;
