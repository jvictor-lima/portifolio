import Foto from '../assets/victor_silva.png'
import Linkedin from '../assets/svg/linkedin.svg'
import Github from '../assets/svg/github.svg'
import Email from '../assets/svg/mail.svg'
import HTMLeCSS from '../assets/svg/HTML-CSS.svg'
import MySql from '../assets/svg/mysql.svg'
import React from '../assets/svg/react.svg'
import Fruta_fruto from '../assets/svg/fruta-fruto.svg';
import Anti_racista from '../assets/svg/anti.svg';
import Brecho from '../assets/svg/brecho.svg';
import Alura_flix from '../assets/svg/alura-flix.svg';
import './css/Main.css'
import'./css/Responsive.css'



export default function Main() {
  return (
    <main>
      <section className="container">
        <div className="titulo_caixa">
          <h2 className="titulo_apresentacao">Hi, I'm Jose Victor</h2>
          <p className="descricao_apresentacao">
            I am a technology student looking to improve myself in the area of Front-end
          </p>
        </div>

        <div className="social_midia-apresentacao">
          <a href="https://github.com/jvictor-lima"><img src={Github} alt="Github" /></a>
          <a href="https://www.linkedin.com/in/jvictor-lima/"><img src={Linkedin} alt="LinkedIn" /></a>
          <a href="mailto:jose.vlima321@gmail.com?subject=Oi josé quer entrar em contato com você&body=Teria interesse de falar com voce"><img src={Email} alt="Email" /></a>
        </div>

        <h2 id='Apresentação' className="titulo_apresentacao">Who am I ?</h2>

        <div className="cont_quemsoueu">
          <img className="profile_imagem" src={Foto} alt="Jose Victor" />

          <p className="descricao_quemsoueu">
          I'm a student focused on creating incredible digital experiences! <br/><br/> 
          My goal is to evolve and become a highly skilled front-end developer,
          and I am committed to learning and improving my skills in HTML, CSS, and JavaScript. 
          I work at the intersection of design and development and am committed to creating attractive and functional user interfaces!
          </p>
        </div>

        <h2 id='Competencia' className="titulo_apresentacao">Competencies and Skills</h2>

        <div className="cont_skills">
          <div className="cont_competencies">
            <h2 className="titulo_competencies">My Competencies</h2>

            <ol className="cont_list-competencies">
              <li>I have experience in HTML, CSS and javascript <br /> 
              knowledge of the library React.js and also in the plataform Node.js <br />
              in order to learn more and knowledge of new technologies.</li>
              <li>I have a strong focus on achieving my goals. 
              <br/> 
                  And so it will be in any environment that requires me to do so.</li>
              <li> First of all, I always plan for everything to go out effectively.</li>
              <li> I am flexible and able to adapt to different situations <br /> and work environments. </li>
              <li>I am collaborative and enjoy working in multidisciplinary teams, <br /> contributing with different perspectives to achieve goals.</li>
            </ol>
          </div>

          <div className="cont_skill">
            <div className="cont_skills-imagem">
            <h2 className="titulo_skills">My Skills</h2>
              <div className="cont_imagem">
                <figcaption className="titulo_fig">HTML-CSS e JavaScript</figcaption>
                <img src={HTMLeCSS} alt="HTML-CSS e JavaScript" />
              </div>

              <div className="cont_imagem">
                <figcaption className="titulo_fig">React</figcaption>
                <img src={React} alt="React" />
              </div>

              <div className="cont_imagem">
                <figcaption className="titulo_fig">Banco de dados MySQL</figcaption>
                <img src={MySql} alt="MySQL" />
              </div>
            </div>
          </div>
        </div>

        <h2 id='Projetos' className="titulo_apresentacao">My Projects</h2>

        <div className="cont_project-imagens">
          <div className="cont-imagens">
            <img src={Brecho} alt="Projeto Brecho" />
          </div>

          <div className="cont-imagens">
            <img src={Alura_flix} alt="Projeto Alura Flix" />
          </div>

          <div className="cont-imagens">
            <img src={Anti_racista} alt="Projeto Anti-racista" />
          </div>

          <div className="cont-imagens">
            <img src={Fruta_fruto} alt="Projeto Fruta Fruto" />
          </div>
        </div>
      </section>
    </main>
  );
}
