import S from './querodoar.module.scss'
import livro from '../../assets/img/LivroVetor.png'
import axios from "axios"
import { useState } from 'react'


export default function QueroDoar(){


    const [titulo, setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [imagem_url, setImagem_url] = useState("")

        // abaixo função asyncrona para enviar os dados para API -- ela espera resposta do await
    const enviarDados = async ()=>{

        const urlApi = "https://api-livros-t3-o5pv.onrender.com/doar"

        //objeto contendo os dados do livro -- formato a ser enviado para a api acima
        const dadosEnviar = {
            titulo,
            categoria,
            autor,
            imagem_url
        }

        
        await axios.post(urlApi, dadosEnviar) //envia os dados para a API via POST

        alert("Livro cadastrado!!") //envia um alerta com sucesso da operação

        //reseta os campos do formulario para ser preenchido novamente
        setTitulo("")
        setCategoria("")
        setAutor("")
        setImagem_url("")

    }

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
        console.log(e.target.value) // exibe o valor no console para debug - para teste
    }

    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }

    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }

    const capturaImagem = (e) =>{
        setImagem_url(e.target.value)
    }


    return(
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>
                <form onSubmit={(e)=> e.preventDefault()}>
                    <div>
                        <img src={livro} alt="imagem de um livro" /> {/*exibe a imagem do livro */}
                        <h3>Informações do Livro</h3>
                    </div>
                        <input type="text" placeholder='Titulo' onChange={capturaTitulo} value={titulo}/>
                        <input type="text" placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
                        <input type="text" placeholder='Autor' onChange={capturaAutor} value={autor}/>
                        <input type="text" placeholder='Link da Imagem' onChange={capturaImagem} value={imagem_url} />
                        <input className={S.doar}type="submit" value="Doar" onClick={enviarDados} />

                </form>
            </section>

        </section>
    )

}