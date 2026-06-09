import React from "react";
import { createClient } from "@supabase/supabase-js";

export default function Login() {
  const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  return (
    <div>
      <section
        style={{
          "background-image":
            "linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),  url(/IMGS/Fondo.jpg);",
        }}
        className="bg-center bg-cover bg-no-repeat h-dvh"
      >
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-3xl font-bold mb-6 text-White">Iniciar Sesión</h1>
          <form className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Correo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Ingrese su correo"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Ingrese su contraseña"
              />
            </div>
            <div className="flex">
              <button className="cursor-pointer bg-Blue hover:bg-Blue/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
