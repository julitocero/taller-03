import { useState } from 'react'
import Header from './componets/header/Header.jsx'
import Footer from './componets/footer/Footer.jsx'
import './App.css'
import CursoCard from './componets/cursoCard/CursoCard.jsx'
import { Folder, Rocket, Repeat, Plus, Minus } from "lucide-react";
import Contador from './componets/contador/contador.jsx'

const cursos = [
  {
    id: 1,
    title: "React desde cero: fundamentos",
    description: "Aprende JSX, componentes, props y crea tu primera app.",
    level: "Principiante",
  },
  {
    id: 2,
    title: "Hooks en acción",
    description: "Domina useState, useEffect y custom hooks con ejercicios prácticos.",
    level: "Intermedio",
  },
  {
    id: 3,
    title: "React Router y SPA",
    description: "Crea navegación, rutas dinámicas y layouts para apps completas.",
    level: "Intermedio",
  },
  {
    id: 4,
    title: "Rendimiento y patrones avanzados",
    description: "Optimiza con memo, lazy loading, context y arquitecturas escalables.",
    level: "Avanzado",
  },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header inicio="Inicio" cursos="Cursos" nosotros="Nosotros" />
        <main className="main-container">
          <div className="contenedor1">
            <h1>Aprende <span className="span-title">React</span> desde cero</h1>
            <p>Domina la libreria mas popular del frontend con proyectos practicos y reales.</p>
            <button>Ver cursos</button>
          </div>
          <div className="contenedor2">
            <h2>NUESTROS CURSOS</h2>
            <p>Elige el camino que mejor se adapte a ti.</p>
            <div className="contenedor-cursos">
              {cursos.map(c => <CursoCard key={c.id} image={<Rocket size={40} />} title={c.title} description={c.description} level={c.level} />)}
              </div>
            </div>
          <div className="contenedor3">
            <h2>Cuantos estudiantes van a inscribirse</h2>
            <p>Usa los botones para ajustar el numero.</p>
            <Contador Plus={Plus} Minus={Minus} sizee={10}/>

          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
