import 'bootstrap/dist/css/bootstrap.min.css';
import './aboutpage.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const AboutPage = () => {
  return (
    <main className='container'>
      <h1 className="about-header">¡Conócenos!</h1>
      <div className="about-content">
        <img
          src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/06/install-react.jpg"
          width="480"
          height="240"
          alt="React foto"
        />
        <p>
          Soy Gabriel, el creador de la app para leer libros, soy un estudiante
          de programación de React JS. Este es un prototipo de página web para
          aplicar mis conocimientos. <br />
          Con la ayuda del profesional Fernando Ayala Semi-Senior en React JS, estamos logrando que esta página funcione.
        </p>
        <Button variant='outline-primary' className="button-home">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Ir a la Home</Link>
        </Button>
      </div>
    </main>
  );
}

export default AboutPage;
