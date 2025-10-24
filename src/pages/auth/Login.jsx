import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { alertaGeneral, alertaRedireccion } from "../../helpers/alertas";
import { GenerarToken } from "../../helpers/funciones";
console.log (GenerarToken ())

function Login() {
  /* AQUI SE DEFINEN LOS HOOKS */
  const [Usuario, setUsuario] = useState("");
  const [Password, setPassword] = useState("");
  let redireccion = useNavigate();
  function iniciarSesion() {
    if (Usuario == "admin" && Password == "1234") {
      alertaRedireccion("welcome to the system", "success", "/dashboard", redireccion);
    } else {
      alertaGeneral("incorrect username or password", "error");
    }
  }
  return (
    <div className="loging-container">
      <form>
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <p class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Login
              </p>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-1000">
                  Your username
                </label>
                <input
                  placeholder=""
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  id="username"
                  type="text"
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-gray-900">
                  Password
                </label>
                <input
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  placeholder=""
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="flex items-start">
                <div class="flex items-center h-5"></div>
              </div>
              <button
                class="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white"
                type="submit"
                onClick={() => iniciarSesion()}
              >
                Login
              </button>
              <Link to="/registro">¿No tienes una cuenta? ¡Registrese!</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
