import { Link } from "../Link";

export function NotFound () {
    return (
        <div>
            <h1>404 Not Found</h1>
            <img src="https://imgs.search.brave.com/BohLLlseirHl5IXH57WxbXjAaNwm4C8O7wZbWaCoyOs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC81My84NC80/MDQtcGFnZS1ub3Qt/Zm91bmQtaHR0cC1l/cnJvci1tZXNzYWdl/LXZlY3Rvci0yMzMy/NTM4NC5qcGc" sizes="400" width="450" />
            <br />
            <Link to="/">Ir a la Página Principal</Link>
        </div>
    )
}