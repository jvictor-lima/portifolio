import "./css/Cabecalho.css"
import './css/Responsive.css'
import Hamburguer_menu from '../assets/svg/hamburguer.svg'
import { useState } from "react";
import Close from '../assets/svg/Close.svg'



export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(Hamburguer_menu); // Inicialmente, use a imagem do ícone do menu hamburguer

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Altere a URL da imagem com base no estado do menu
    setMenuIcon(menuOpen ? Hamburguer_menu : Close);
  };
  
  return (
    <>
  <header>
      <nav className="box_conteudo">
      <h2 className="logo_header">Vi<span className="perso_ctor">ctor</span>Si<span className="perso_silva">lva</span> !</h2>
      <div className="mobile-menu">
        <img className={`mobile-menu ${menuOpen ? 'open' : ''}`} src={menuIcon} onClick={toggleMenu} />
      </div>
        <ul className={`navegacao_lista ${menuOpen ? 'active' : ''}`}>
          <li className="competencies" ><a className="conteudo_lista" href="#Competencia">Competencies</a></li>
          <li className="projetos" ><a className="conteudo_lista" href="#Projetos">Project</a></li>
          <li className="sobre-mim" ><a className="conteudo_lista" href="#Apresentação">
            About me</a></li>
        </ul>
      </nav>
  </header>
    </>
  )
}