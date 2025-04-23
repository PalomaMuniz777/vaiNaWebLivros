import Logo2 from "../../assets/img/Logo2.png"
import lupa from "../../assets/img/lupa.png"
import {BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Inicio from "../../Pages/Inicio/Inicio"
import Doados from "../../Pages/Doados/Doados"
import QueroDoar from "../../Pages/QueroDoar/QueroDoar"
import S from './header.module.scss'    //quando esta na mesma pasta so chamar o aquivo



export default function header(){

    return(
<BrowserRouter>

<header>

<section className={S.boxLogo}>
    <img src={Logo2} alt="imagem de um livro"/>
    <h1>Livros Vai na Web</h1>
    </section>
        <nav className={S.boxMenu}>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/Doados">Livros Doados</Link></li>
                <li><Link to="/QueroDoar">Quero Doar</Link></li>
            </ul>
        </nav>
        <div className={S.boxInput}>
            <input type="text" placeholder="O que você procura?"/>
            <img src={lupa} alt="imagem lupa de busca" />
        </div>




</header>

<Routes>
    <Route  path="/" element={<Inicio/>}/>
    <Route  path="/Doados" element={<Doados/>}/>
    <Route  path="/QueroDoar" element={<QueroDoar/>}/>
</Routes>
</BrowserRouter>
    )

}
