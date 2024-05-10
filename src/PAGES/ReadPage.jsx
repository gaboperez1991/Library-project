import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from "../Link";
import axios from "axios";
import { useState, useEffect } from "react";

const ReadPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);
  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
      );
      setBooks(response.data.docs);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Container style={{ backgroundColor: 'lightblue', color: 'navy', padding: '20px'}}>
      <h1 style={{color: 'darkblue'}}>Lista de Libros El Señor de los Anillos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <form>
          {books.map((book, index) => (
            <Table key={index}>
              <h2>{book.title}</h2>,
            <h4>Año de Publicación: {book.first_publish_year}</h4>
            <p>Autor/es: {book.author_name}</p>
            </Table>
          ))}
        </form>
      )}

      </Container>
      <Button variant='outline-primary' style={{marginTop:'10px'}}>{<Link to='/'>Ir a la Home</Link>}</Button>
    </div>
  );
};

export default ReadPage;
