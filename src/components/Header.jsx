import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="pagina-inicial bg">
            <div className="cabeçalho">
                <section className="barra-info">
                    <img src="/logo.png" alt="Logo" />
                    <h2>Glamour Cosméticos</h2>
                </section>

                <div className="bar-pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                    <button type="submit">Buscar</button>
                </div>

                <nav className="navbar">
                    <a href="#">Início</a>
                    <a href="#">Sobre</a>
                    <a href="#">Contato</a>
                </nav>
            </div>

            <img src="/BANNER%20(1).png" alt="Banner" />
        </div>
    );
}

export default Header;