import CampoTexto from '../campoTexto'
import './formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
            </form>
        </section>
    )
}

export default Formulario