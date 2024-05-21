import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Table, Modal, Form } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
import { Link } from "../Link";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdAddToPhotos, MdEdit, MdOutlineDeleteForever } from "react-icons/md";

const ReadPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20;

  const [customEntries, setCustomEntries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({ title: "", content: "" });
  const [editIndex, setEditIndex] = useState(null);

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
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(books.length / booksPerPage); i++) {
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
    setCurrentEntry({ title: "", first_publish_year: "", author_name: "" });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setShowModal(true);
    setCurrentEntry(customEntries[index]);
    setEditIndex(index);
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updateEntries = customEntries.map((entry, index) =>
        index === editIndex ? currentEntry : entry
      );
      setCustomEntries(updateEntries);
    } else {
      setCustomEntries([...customEntries, currentEntry]);
    }
    setShowModal(false);
  };

  const handleDelete = (index) => {
    setCustomEntries(customEntries.filter((_, i) => i !== index));
  };

  const paginationBasic = (
    <div>
      <Pagination>{pageNumbers}</Pagination>
      <br />
    </div>
  );

  return (
    <div className="aling-middle juantify-content-center">
      <Container
        style={{
          backgroundColor: "lightblue",
          color: "navy",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h1 style={{ color: "darkblue" }}>
          Lista de Libros El Señor de los Anillos
        </h1>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <form>
            {currentBooks.map((book, index) => (
              <Table striped bordered hover variant="dark" key={index}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th className="text-center">Título</th>
                    <th className="text-center">Año de Publicación</th>
                    <th className="text-center">Autor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{indexOfFirstBook + index + 1}</td>
                    <td className="text-center">{book.title}</td>
                    <td className="text-center">{book.first_publish_year}</td>
                    <td className="text-center">{book.author_name}</td>
                  </tr>
                </tbody>
              </Table>
            ))}
          </form>
        )}
        {paginationBasic}
      </Container>

      <Container
        style={{
          backgroundColor: "lightblue",
          color: "navy",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <h2 style={{ color: "darkblue" }}>Agrega tu libro aquí!</h2>
        <Button variant="primary" onClick={handleAdd}>
          Agrega tu Libro <MdAddToPhotos />
        </Button>
        <Table
          striped
          borderer
          hover
          variant="dark"
          style={{ marginTop: "20px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Título</th>
              <th className="text-center">Año de Publicación</th>
              <th className="text-center">Autor</th>
            </tr>
          </thead>
          <tbody>
            {customEntries.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td className="text-center">{entry.title}</td>
                <td className="text-center">{entry.first_publish_year}</td>
                <td className="text-center">{entry.author_name}</td>
                <Button variant="danger" onClick={() => handleEdit(index)}>
                  <MdEdit />
                </Button>
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  <MdOutlineDeleteForever />
                </Button>
              </tr>
            ))}
          </tbody>
        </Table>
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
                value={currentEntry.title}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, title: e.target.value})
                }
              />
              <Form.Label>Año de Lanzamiento</Form.Label>
              <Form.Control
                type="text"
                value={currentEntry.first_publish_year}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, first_publish_year: e.target.value})
                }
              />
              <Form.Label>Autor</Form.Label>
              <Form.Control
                type="text"
                value={currentEntry.author_name}
                onChange={(e) =>
                  setCurrentEntry({ ...currentEntry, author_name: e.target.value})
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Button variant="outline-primary" style={{ marginTop: "10px" }}>
        {<Link to="/">Ir a la Home</Link>}
      </Button>
    </div>
  );
};

export default ReadPage;
