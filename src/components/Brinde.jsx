import "./Brinde.css"
function Brinde() {
    return (
        <div className="brinde">
            <h3>Insira seus dados de contato abaixo para receber um brinde:</h3>
            <form id="cadastroForm">
                <input type="text" placeholder="Nome" minLength="3" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Telefone" minLength="11" pattern="[0-9]+" required />
                <button type="submit">Enviar</button>
            </form>
            <div id="mensagemCadastro" className="mensagem-cadastro">
                Obrigado pelo cadastro! Em breve você receberá o brinde.
            </div>
        </div>
    );
}

export default Brinde;