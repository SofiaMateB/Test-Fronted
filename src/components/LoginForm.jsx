// src/components/LoginForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

const LoginForm = ({ onSubmit, err, succ }) => {
  const [showMessages, setShowMessages] = useState(false);
  const validationSchema = Yup.object({
    email: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });
  const resetMessages = () => {
    setShowMessages(false);
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    setShowMessages(true);
    try {
      await onSubmit(values);  // 👈 aquí espera tu handleLogin
    } finally {
      setSubmitting(false);    // 👈 asegura que isSubmitting vuelva a false
    }
  };
  return (
    <div class="bg-white dark:bg-gray-800 flex justify-center items-center w-screen h-screen p-5 bg-gradient-to-b from-white via-green-50 to-emerald-100
">

      <div className="min-h-screen flex items-center justify-center ">
        <div className="flex w-[90vw] min-h-[80vh] max-w-5xl shadow-2xl rounded-2xl overflow-hidden">
          {/* Left Side */}
          <div className="w-1/2 bg-gradient-to-br from-[#4ACF76] to-[#007A33] text-white flex flex-col justify-center items-center p-10 relative">
            <div className="text-center">
              {/* Logo IKUSI */}
              <div className="relative mb-8 -mt-8 flex justify-start items-start">
                <div className="absolute bg-white/80 rounded-full w-10 h-10"></div>
                <img
                  src="https://www.ikusi.com/wp-content/uploads/2025/05/logo-ikusi-01.svg"
                  alt="Ikusi Logo"
                  className="h-12 relative"
                />
              </div>

              {/* Shield SVG */}
              <div className="flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="420"
                  height="170"
                  fill="none"
                  stroke="#007A33"  
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="mb-2 transition-colors duration-300 hover:stroke-[#3AC953]">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />

                </svg>



              </div>
              <h2 className="text-xl font-semibold mb-2">Acceso Seguro Ikusi</h2>
              <p className="text-sm">
                Plataforma interna protegida con los más altos estándares de seguridad.
              </p>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              </div>
            </div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 border-4 border-white/20 rounded-full"></div>
            <div className="absolute -bottom-28 -left-10 w-60 h-60 border-4 border-white/30 rounded-full"></div>
            <div className="absolute top-0 -right-10 w-40 h-40 border-4 border-white/30 rounded-full"></div>
          </div>


          {/* Right Side */}
          <div className="w-1/2 bg-white flex flex-col justify-center p-10">
            <h2 className="text-2xl font-bold mb-4">Bienvenida de nuevo</h2>
            <p className="text-sm mb-6 text-gray-500">Accede a tu cuenta</p>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="flex flex-col gap-4">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    onChange={() => { resetMessages(); formik.handleChange(event) }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                  <Field
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={() => { resetMessages(); formik.handleChange(event) }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

                  <label className="flex items-center gap-2 text-gray-600 text-sm">
                    <Field type="checkbox" name="remember" className="w-4 h-4 text-green-600 rounded" />
                    Recordarme
                  </label>
                  {(err && showMessages) && <p className="text-red-500 mt-4">{err}</p>}
                  {(succ && showMessages) && <p className="text-blue-600 mt-4">{succ}</p>}

                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-300"
                  >
                    {formik.isSubmitting ? "Ingresando..." : "Iniciar sesión"}
                  </button>
                </Form>
              )}
            </Formik>

            <p className="text-center text-sm text-gray-500 mt-4">
              ¿No tienes una cuenta?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;