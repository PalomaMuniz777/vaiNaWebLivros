
import S from './doados.module.scss'
import livro from '../../assets/img/livro.png'
import axios from 'axios'
import  {useState, useEffect } from 'react'



export default function Doados(){

    const [livros, setLivros] = useState([])

    const getLivros = async () => {
        const response = await axios.get("https://api-livros-t3-o5pv.onrender.com/livros")  //recebendo os dados entao tem que guardar em algum lugar no 'response'
        setLivros(response.data) //'.data' onde estao os dados da API filtrados armasenados no response
        console.log(response)
    }

    useEffect(()=>{
        getLivros()
    },[])

// o ',[] ' é para iniciar o get livors quando a pagina for atualizada



    return(
        <section className={S.boxDoados}>
            <h2>Livos Doados</h2>
            <section className={S.boxBooks}>
                <article>
                    <img src={livro} alt="imagem do livro o protagonista" />
                    <h3>O protagonista</h3>
                    <p>Susanne Andrade</p>
                    <p>Ficção</p>
                </article>
                {/* map para exibir os livros e organiza-los e o nov 'alt' do img - essa a forma de utilizar o tilulo no alt */}
                {livros.map((item)=>(
                    <article key={item.id}> 
                        <img src={item.imagem_url} alt={`imagem do livro: ${item.titulo}`} />  
                        <h3>{item.titulo}</h3>   
                        <p>{item.categoria}</p>
                        <p>{item.autor}</p>
                    </article>

                ))}
                

            </section>
        </section>
    )
}

