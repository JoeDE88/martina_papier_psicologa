export default function NavBar(){
    return (
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">Logo MPP</a>
            </div>
            <div className="navbar-center">
                <ul className="navbar-links">
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Acerca de mí</a></li>
                    <li><a href="">Mis servicios</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            </div>
            <div className="navbar-right">Hamburger</div>
        </nav>
        </>
    )
}