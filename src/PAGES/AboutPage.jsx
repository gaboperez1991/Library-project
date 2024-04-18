import { Link } from "../Link"

const AboutPage = () => {

  return (
    <>
   <h1>Conocenos!</h1>
      <div>
        <img
          src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/06/install-react.jpg" width="480" height="240"
          alt="React foto"
        />
        <p>
          Soy Gabriel, el creador de la app para leer libros, soy un estudiante
          de programación de React JS. Este es un prototipo de página web para
          aplicar mis conocimientos. <br />
          Con la ayuda de el profesional Fernando Ayala Semi-Senior en React JS estamos logrando que ésta pagina funcione.
        </p>
      </div>
    <Link to='/'>Ir a la Home</Link>
    </>
  )
}

export default AboutPage
