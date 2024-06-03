import "bootstrap/dist/css/bootstrap.min.css";
import "./readpage.css"
import { Link } from "react-router-dom";
import { Button, Container, Table, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import { useState, useEffect } from "react";
import { MdAddToPhotos, MdEdit, MdOutlineDeleteForever } from "react-icons/md";

const ReadPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;

  const [customEntries, setCustomEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({ description: "", year: "" , author: ""});
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    axios.get('https://openlibrary.org/search.json?q=the+lord+of+the+rings')
      .then(response => {
        const mappedBooks = response.data.docs.map((book,index)=> ({
          key : index,
          year: book.first_publish_year,
          description: book.title, 
          author: book.author_name ? book.author_name.join(', ') : 'Desconocido'
        }));
        setBooks(mappedBooks);
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const allBooks = [...books, ...customEntries]
  const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allBooks.length / booksPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => paginate(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  const handleAdd = () => {
    setShowModal(true);
    setCurrentEntry({ description: "", year: "", author: ""});
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const apiIndex = index + indexOfFirstBook
      setShowModal(true);
      setCurrentEntry(allBooks[apiIndex]);
      setEditIndex(apiIndex);
    
}

  const handleSave = () => {
    if (editIndex !== null && editIndex >= books.length) {
      const customIndex = editIndex - books.length
      const updateEntries = customEntries.map((entry, index) =>
        index === customIndex ? currentEntry : entry
      );
      setCustomEntries(updateEntries);
    } else {
      setCustomEntries([...customEntries, currentEntry]);
    }
    setShowModal(false);
  };

  const handleDelete = (index) => {
    const apiIndex = index + indexOfFirstBook
    if (apiIndex >= books.length) {
      const customIndex = apiIndex - books.length
      setCustomEntries(customEntries.filter((_, i) => i !== customIndex));
    }
    };

  const paginationBasic = (
    <div>
      <Pagination>{pageNumbers}</Pagination>
      <br />
    </div>
  );

  return (
    <div className="align-middle justify-content-center">
      <Container className="container-custom">
        <h1>Lista de Libros El Señor de los Anillos</h1>
        <Button className="btn-custom-primary" onClick={handleAdd}>
          Agrega tu Libro <MdAddToPhotos />
        </Button>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <form>
            <Table className="table-custom" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th className="text-center">Título</th>
                  <th className="text-center">Año de Publicación</th>
                  <th className="text-center">Autor</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {currentBooks.map((entry, index) => {
                  return (
                    <tr key={index}>
                      <td>{indexOfFirstBook + index + 1}</td>
                      <td className="text-center" style={{ verticalAlign: "middle" }}>
                        {entry.description}
                      </td>
                      <td className="text-center" style={{ verticalAlign: "middle" }}>
                        {entry.year}
                      </td>
                      <td className="text-center" style={{ verticalAlign: "middle" }}>
                        {entry.author}
                      </td>
                      <td className="text-center" style={{ verticalAlign: "middle" }}>
                        <Button className="btn-custom-primary" onClick={() => handleEdit (index)}>
                          <MdEdit />
                        </Button> {" "}
                        <Button className="btn-custom-danger" onClick={() => handleDelete(index)}>
                          <MdOutlineDeleteForever />
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </form>
        )}
        <div className="pagination-custom">
          <Pagination>{paginationBasic}</Pagination>
        </div>
      </Container>
  
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editIndex !== null ? "Editar Libro" : "Agregar Nuevo Libro"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                value={currentEntry.description}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, description: e.target.value })
                }
              />
              <Form.Label>Año de Lanzamiento</Form.Label>
              <Form.Control
                type="text"
                value={currentEntry.year}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, year: e.target.value })
                }
              />
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                value={currentEntry.author}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, author: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button className="btn-custom-primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
  
      <Button variant="outline-primary" style={{ marginTop: "10px" }}>
        {<Link to="/" style={{ textDecoration: 'none', color: 'inherit'}}>Ir a la Home</Link>}
      </Button>
    </div>
  );
  
};

export default ReadPage;
