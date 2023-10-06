import './css/Footer.css'
import Likedin from '../assets/svg/linkedin.svg'
import Github from '../assets/svg/github.svg'
import Email from '../assets/svg/mail.svg'

export default function Footer(){
  return(
    <>
      <footer className="cont_rodape">
      <h2 className="titulo_rodape">Developed by Victor Silva</h2>
      <p className="desc_rodape">Copyright &copy;2023</p>

      <div className="social_midia-rodape">
        <a href="https://github.com/jvictor-lima"><img src={Github} alt="" /></a>
        <a href="https://www.linkedin.com/in/jvictor-lima/"><img src={Likedin} alt="" /></a>
        <a href="mailto:jose.vlima321@gmail.com?subject=Oi josé quer entrar em contato com você&body=Teria interesse de falar com voce"><img src={Email} alt="" /></a>
      </div>
    </footer>
    </>
  )

}