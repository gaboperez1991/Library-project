import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

export default function Page404 () {
    return (
        <div className='container'>
            <h1>404 Not Found</h1>
            <img src="https://imgs.search.brave.com/BohLLlseirHl5IXH57WxbXjAaNwm4C8O7wZbWaCoyOs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81My84NC80/MDQtcGFnZS1ub3Qt/Zm91bmQtaHR0cC1l/cnJvci1tZXNzYWdl/LXZlY3Rvci0yMzMy/NTM4NC5qcGc" sizes="400" width="450" />
            <br />
            <Button variant='outline-primary' style={{marginTop:'10px'}}>{<Link to="/">Ir a la Home</Link>}</Button>
        </div>
    )
}