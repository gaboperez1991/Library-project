import { Link} from "../Link"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Una libreria es una de las pocas evidencias que tenemos en la actualidad de que la gente sigue pensando.</p>
      <Link to='/about'>Ir a Sobre Nosotros</Link>
    </div>
  )
}

export default HomePage
