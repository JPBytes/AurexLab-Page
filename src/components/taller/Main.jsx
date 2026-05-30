import { Link, BrowserRouter } from "react-router";

export default function Main() {
  const RoutesPath = [
    { nombre: "Dashboard", path: "/taller", icon: "fa-chart-column" },
    { nombre: "Equipos", path: "/taller/equipos", icon: "fa-desktop" },
    { nombre: "Clientes", path: "/taller/clientes", icon: "fa-users" },
    { nombre: "Ordenes", path: "/taller/ordenes", icon: "fa-list" },
    { nombre: "Calendario", path: "/taller/calendario", icon: "fa-calendar" },
    { nombre: "Inventario", path: "/taller/inventario", icon: "fa-boxes" },
    { nombre: "Reportes", path: "/taller/reportes", icon: "fa-file-alt" },
    { nombre: "Configuración", path: "/taller/configuracion", icon: "fa-cog" },
  ];

  return (
    <BrowserRouter>
      <div>
        <nav className="w-[15dvw] bg-ContainerBG flex flex-col h-dvh">
          <div className="flex items-center justify-center">
            <img
              src="/IMGS/Logos/Letra.png"
              alt="Letra AurexLab"
              className="invert w-24"
            />
            <img
              src="/IMGS/Logos/Texto.png"
              alt="Texto AurexLab"
              className="invert w-24"
            />
          </div>

          <hr className="w-full h-1 bg-White border-none" />

          <section className="flex flex-col justify-between h-full mb-4">
            <ul className="text-White flex flex-col gap-2 items-center mt-4">
              {RoutesPath.map((route) => (
                <li className="w-[95%]  p-2 rounded-lg hover:bg-White hover:text-ContainerBG duration-300">
                  <Link to={route.path} className="flex items-center">
                    <i className={`fa-solid ${route.icon} w-1/7`}></i>{" "}
                    {route.nombre}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <hr className="w-full h-1 bg-White border-none" />
              <div className="flex gap-2 items-center  justify-center text-White my-2">
                <img
                  src="/IMGS/Opinion/Andres.jpg"
                  alt="Imagen de Andres"
                  className="rounded-full w-12 h-12 object-center object-cover"
                />
                <p className="flex flex-col">
                  <span className="text-LightBlue">Técnico</span> Andres Esteban
                </p>
              </div>
              <hr className="w-full h-1 bg-White border-none" />
              <button className="text-White flex gap-2 justify-center items-center w-full mt-2">
                <i className="fa-solid fa-arrow-right-from-bracket"></i> Cerrar
                sesión
              </button>
            </div>
          </section>
        </nav>
      </div>
    </BrowserRouter>
  );
}
