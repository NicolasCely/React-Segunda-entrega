import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <h1>Cosecha de Amor</h1>
            <ul>
            <li><Link to='/'>Ver todo</Link></li>
            <li><Link to='/category/Café'>Café</Link></li>
            <li><Link to='/category/Accesorios'>Accesorios</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar