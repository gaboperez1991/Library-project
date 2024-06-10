import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css'
import './footer.css'
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
  `https://imgs.search.brave.com/TT3h6dDQlq60Xah3s93hKmEe9urQxPIsFi-PphslQjg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDc2/MzM1NjcyL2VzL2Zv/dG8vaG9tYnJlLWxl/eWVuZG8tbGlicm8t/ZW4tdW5hLXRpZW5k/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9SXV5dVhpNXlL/dHFkLWMxU2NoZHQx/Z1dNc2Rfbm9adVRO/elpzcW1iRGM2az0`,
  `https://imgs.search.brave.com/eoKc4wblRV5iBhIxNHt4YK6y18dYtc-yWGexpgEqZxU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/MTA5NDcxNi9lcy9m/b3RvL3BhZHJlcy1l/LWhpam9zLWxleWVu/ZG8tbGlicm9zLWp1/bnRvcy1lbi1sYS1i/aWJsaW90ZWNhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1R/c05qQXRpMUU0TXlh/T1k0MUtheXBSelJw/QkpnVUhuOWxkY2dL/QkZyQUNNPQ`,
  `https://imgs.search.brave.com/p9ShjWJNPYLC6EP9YQY9NFjA-UQ2VfHnlCD_YV-P1tw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQx/NzkyMTg3NC9lcy9m/b3RvL211amVyLWpv/dmVuLWVuLWxhLWJp/Ymxpb3RlY2EtZGUt/bGEtZXNjdWVsYS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SkJGZWJmX1ZaOUw5/S0JpQVRfVEJtTG9m/OVJ4SzZDZkpOaUdn/cGp3eXItOD0`,
  `https://imgs.search.brave.com/W1j2NWHme30Vw9xM4rCY22VaJjcFYK3gpS-YzK0KHtk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODIyODQz/NTM0ODQtNGUxNjAw/MWM1OGViP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVRkOGZHSnBZbXhw/YjNSbFkyRnpmR1Z1/ZkRCOGZEQjhmSHd3.jpeg`,
  `https://imgs.search.brave.com/ju59k6CHiojlRVuThC9D2NA-FkYpC4ozU0ddCkNPlVc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/NDM1NzkxOC9lcy9m/b3RvL2J1c2NhbmRv/LWxpYnJvcy1wYXJh/LWVsLXByb3llY3Rv/LWRlLXRhcmVhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1W/ZXd2aVhYeWM0Zmx6/azlPd0RWcWlpd0hn/YkRwaVJDQ1FqN2dU/NmRhYVZZPQ`,
  `https://imgs.search.brave.com/Zx1lQRp2OSbMFabAS_jOkmsR-QtgAl_FOZh7NX155ek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/YmFzdGFudGUtam92/ZW4tYmlibGlvdGVj/YV8yMy0yMTQ4NzI3/ODM4LmpwZz9zaXpl/PTYyNiZleHQ9anBn`,
]

const HomePage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval)
  }, [])

  const visibleImages = [
    images[current],
    images[(current + 1 ) % images.length],
    images[(current + 2 ) % images.length]
  ]
  
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
                <Button variant="light" onClick={() => navigate('/readpage')} className="button-tags">Biblioteca</Button>
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
              </div>
              
            </div>
          </div>
        </div>
        <div className='carousel'>
          <AnimatePresence>
            {visibleImages.map((src, index) => (
              <motion.img
              key={src}
              src={src}
              alt={`Imagen ${index + 1}`}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              exit={{ opacity: 0}}
              transition={{ duration: 1}}
              className='carousel-image'
              />
            ))}
          </AnimatePresence>
        </div>
      </main>
      <footer className="footer-homepage">
        <div>
        <h4 className='h4-footer-homepage'>Library Project</h4>
        <p className='p-footer-homepage'>¹Junio 2024 <br />
           Version: 1.0.0</p>
        </div>
          <div className='button-container'>
        <Button variant='outline-primary' className='footer-button'>{<Link to="/about" style={{ textDecoration: 'none', color: 'inherit'}}>Conoce Sobre Nosotros!</Link> }</Button> 
          </div>
      </footer>
    </div>
  );
};

export default HomePage;

