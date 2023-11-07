import "./Contato.css"
function Contato() {
    return (
        <div className="contato">
            <h3>Entre em contato conosco para mais informações:</h3>
            <div className="informacoes-contato">

                <ul>
                    <li>
                        <i className="fas fa-phone"></i> Telefone: (11) 1234-5678
                    </li>
                    <li>
                        <i className="fas fa-envelope"></i> Email:{" "}
                        <a href="mailto:contato@glamourcosmeticos.com">
                            contato@glamourcosmeticos.com
                        </a>
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt"></i> Endereço: Rua Cosméticos,
                        123 - São Paulo, SP
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Contato;


