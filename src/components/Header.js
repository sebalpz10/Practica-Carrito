import NavBar from "./NavBar";

const Header = () => {

    const isHeader = true;

    return (
        <header className="header">
            <a href="#">
                <img src="/img/logo/logo.png" alt="Logo" className="header_logo" />
            </a>
            <h1 className="none">#</h1>
            <NavBar isHeader={isHeader}></NavBar>
            <span className="material-icons shop_cart">shopping_cart</span>
        </header>
    );
}

export default Header;