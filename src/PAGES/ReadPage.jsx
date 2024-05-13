import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Table } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { Link } from "../Link";
import axios from "axios";
import { useState, useEffect } from "react";



const ReadPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;


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
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook)

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
        {i}
      </Pagination.Item>
    )
  }
  const paginationBasic = (
    <div>
      <Pagination>{pageNumbers}</Pagination>
      <br />
    </div>
  );


  return (
    <div>
      <Container style={{ backgroundColor: 'lightblue', color: 'navy', padding: '20px', marginTop: '20px'}}>
      <h1 style={{color: 'darkblue'}}>Lista de Libros El Señor de los Anillos</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <form>
          {currentBooks.map((book, index) => (
            <Table striped bordered hover variant='dark' key={index}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                  <th>Año de Publicación</th>
                  <th>Autor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{indexOfFirstBook + index + 1}</td>
                  <td>{book.title}</td>
                  <td>{book.first_publish_year}</td>
                  <td>{book.author_name}</td>
                </tr>
              </tbody>
            </Table>

          ))}
        </form>
      )}
        {paginationBasic}
      </Container>
      <Button variant='outline-primary' style={{marginTop:'10px'}}>{<Link to='/'>Ir a la Home</Link>}</Button>
    </div>
  );
};



export default ReadPage;
