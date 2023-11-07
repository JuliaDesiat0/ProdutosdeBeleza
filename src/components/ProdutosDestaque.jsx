import "./ProdutosDestaque.css"
function ProdutosDestaque(){
    return(
        <div className="produtos-destaque">
            <h2>PRODUTOS EM DESTAQUE</h2>

            <div className="lista-produtos">
                <div className="produto">
                    <img src="/Destaque1.png" alt="Produto 1" />
                    <h3>Maybelline Lifter Gloss Petal </h3>
                    <p>Gloss Labial 5,4ml</p>
                    <h3>R$80,90</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>

                <div className="produto">
                    <img src="/Destaque2.png" alt="Produto 2" />
                    <h3>B.Tavares by Marble Rose Gold</h3>
                    <p>Hidratante Iluminador 35g</p>
                    <h3>R$ 72,90</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>

                <div className="produto">
                    <img src="/Destaque3.png" alt="Produto 3" />
                    <h3>Kit Maybelline</h3>
                    <p>Sky High Superstay Matte Ink 15 Lover</p>
                    <h3>R$ 134,80</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>

                <div className="produto">
                <img src="/Destaque4.png" alt="Produto 4" />
                <h3>Boca Rosa Beauty by Payot</h3>
                <p> 1 Mármore - Pó Solto 20g</p>
                <h3>R$169,00</h3>
                    <div className="botao">
                        <button className="botao-efeito">Comprar agora</button>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default ProdutosDestaque;