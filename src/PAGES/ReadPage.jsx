import { Link } from "../Link";
import axios from "axios";
import { useState, useEffect } from "react";

const ReadPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://stephen-king-api.onrender.com/api/books"
        );
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Lista de Libros de Stephen King</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
      <Link to="/">Ir a la Home</Link>
    </div>
  );
};

export default ReadPage;
