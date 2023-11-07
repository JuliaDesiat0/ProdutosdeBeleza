import "./OfertasEspeciais.css"
function OfertasEspeciais(){
    return(
        <div className="ofertas-especiais">
            <h2>OFERTAS ESPECIAIS</h2>
            <div className="lista-ofertas">
                <div className="oferta">
                    <img src="/Oferta1.png" alt="Oferta 1" />
                    <h3>Kit L'Oréal Professionnel</h3>
                    <p>Pro Longer & Lancôme Teint Idole Ultra</p>
                    <p><span>R$ 655,70</span> - 11%</p>
                    <h3>R$ 582,70</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>
                <div className="oferta">
                    <img src="/Oferta2.png" alt="Oferta 2" />
                    <h3>Floratta Red o Boticário</h3>
                    <p>Desodorante Colônia Feminino 75ml</p>
                    <p><span>R$ 139,90</span> - 12%</p>
                    <h3>R$123,11</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>

                </div>
                <div className="oferta">
                    <img src="/Oferta3.png" alt="Oferta 3" />
                    <h3>Kit o Boticário</h3>
                    <p>Kit Cuide-se Bem Pessegura Body Care</p>
                    <p><span>R$132,80</span> - 10%</p>
                    <h3>R$ 119,52</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>

                </div>
                <div className="oferta">
                    <img src="/Oferta4.png" alt="Oferta 4" />
                    <h3>Hidramais Drenagem Linfática</h3>
                    <p>Creme para Massagem 1Kg</p>
                    <p><span>R$152,24</span> - 10%</p>
                    <h3>R$125,90</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OfertasEspeciais;