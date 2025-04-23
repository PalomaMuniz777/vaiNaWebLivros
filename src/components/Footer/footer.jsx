import face from '../../assets/img/face.png'
import twitter from'../../assets/img/twitter.png'
import insta from '../../assets/img/insta.png'
import linkedin from '../../assets/img/linkedin.png'
import youtube from '../../assets/img/youtube.png'
import S from './footer.module.scss'

export default function footer (){

return(
    <footer>
        <section className={S.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
            <a href=""><img src={face} alt="logo do facebook" /></a>
            <a href=""><img src={twitter} alt="logo do twitter" /></a>
            <a href=""><img src={youtube} alt="logo do youtube" /></a>
            <a href=""><img src={linkedin} alt="logo do linkedin" /></a>
            <a href=""><img src={insta} alt="logo do instagram" /></a>
        </nav>
        </section>

        <section className={S.boxEnd}>
            <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024.</p>
        </section>
    </footer>
)
}




