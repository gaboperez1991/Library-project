import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { Link, navigate } from "../Link";


const HomePage = () => {
  return (
    <div className="container">
      <header>
        <nav className="nav-home">
          <ul className="ul-home">
            <div className="div-home">
              <h1 className="h1-home" title="LibroWeb-home">
                LibroWeb
                <img
                  className="img-home"
                  width="50"
                  height="25"
                  src="https://cdn-icons-png.flaticon.com/512/2780/2780068.png"
                  alt="LibroWeb-logo"
                />
              </h1>
            </div>
            <div className="tags">
              <div className="div-tags">
                <Button variant='primary' onClick={() => navigate('/readpage')} className="button-tags">Biblioteca</Button>
              </div>
            </div>
          </ul>
        </nav>
      </header>

      <main>
        <div className="div-body">
          <div className="div-portada">
            <div className="div-presentacion">
              <div>
                <h2 className="h2-home">Hola, somos tu librería online.</h2>
                <h3 className="h3-home">Explora y encuentra tus libros favoritos</h3>
                <h4 className="h4-home">
                  La lectura es un viaje maravilloso, que nos transporta a otros
                  mundos sin fin. Entre las páginas de un libro, encuentro magia
                  y devoción sin fin. Las letras saltan y bailan, mientras
                  crecen mis alas en la imaginación. Cada palabra es un susurro
                  al oído, que despierta el alma y la inspiración. Un libro es
                  un tesoro invaluable, que enriquece mi mente y mi corazón.
                  Palabras que encienden la luz del saber, y alimentan mi sed de
                  conocimiento y pasión. En cada historia encuentro un refugio,
                  donde mis pensamientos pueden descansar. Un libro es mi
                  confidente más fiel, que me enseña a soñar y a volar. Cierro
                  los ojos y me dejo llevar, por las letras que cobran vida en
                  mi mente. La lectura me brinda alegría y consuelo, y me
                  acompaña en cada paso de mi sendero. Por eso, mi amor por los
                  libros, nunca dejará de crecer y brillar. Pues en cada página
                  encuentro un mundo nuevo, donde puedo perderme y siempre
                  regresar.
                </h4>
                <p>¹Abril 2024</p>
              </div>
              <div>
                <img
                  alt="imagen-portada"
                  src="https://img.freepik.com/vector-premium/pequenas-personas-leyendo-volando-sobre-libro-concepto-educacion-estudiantes-escolares-o-universitarios-banner-ciencia_3482-7098.jpg"
                  width="450"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-homepage">
      <Button variant='outline-primary' style={{marginTop: '10px'}}>{<Link to="/about">Conoce sobre Nosotros</Link>}</Button> 
        
      </footer>
    </div>
  );
};

export default HomePage;
