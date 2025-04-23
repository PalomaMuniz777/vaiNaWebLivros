import Header from './components/Header/header'
// importar a footer aqui igual a header acima
import './global.scss'
// OBS: o ilport do scss nao aparece , tem que digitar o nome quando entrar na pasta onde ele esta
import Footer from './components/Footer/footer'



export default function App(){

  return(

    <>
      <Header/>
      {/* footer chamar aqui e importar acima */}
      {/* a main é a pasta components obs a main que esta nos arquivos é apenas de configuração */}
      <Footer/>
    </>
    
  )
}
