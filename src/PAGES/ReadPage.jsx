import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
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
    <div className='container'>
      <h2>Lista de Libros El Señor de los Anillos</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book.title}</li>
          ))}
        </ul>
      )}
      <Button variant='outline-primary' style={{marginTop:'10px'}}>{<Link to='/'>Ir a la Home</Link>}</Button>
    </div>
  );
};

export default ReadPage;
