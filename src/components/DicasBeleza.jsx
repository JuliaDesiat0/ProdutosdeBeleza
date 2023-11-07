import "./DicasBeleza.css"
function DicasBeleza (){
    return(
        <div className="dicas-beleza">
            <h2>DICAS DE BELEZA</h2>
            <div className="lista-dicas">
                <div className="dica">
                    <h3>Proteja-se do sol</h3>
                    <p>Use protetor solar diariamente, mesmo em dias nublados. A exposição excessiva ao sol pode causar danos à pele, como manchas e envelhecimento precoce.</p>
                </div>
                <div className="dica">
                    <h3>Esfolie sua pele regularmente</h3>
                    <p> A esfoliação ajuda a remover as células mortas da pele, deixando-a mais suave e radiante. Use um esfoliante suave e faça o procedimento uma ou duas vezes por semana, dependendo do seu tipo de pele.</p>
                </div>
                <div className="dica">
                    <h3>Cuide dos seus cabelos</h3>
                    <p>Para manter os cabelos saudáveis, evite o uso excessivo de ferramentas de calor, como chapinhas e secadores. Opte por deixar os cabelos secarem naturalmente sempre que possível.</p>
                </div>
                <div className="dica">
                    <h3>Cuide dos seus lábios</h3>
                    <p>Mantenha seus lábios hidratados aplicando um bálsamo labial regularmente. Esfoliar os lábios suavemente uma vez por semana também pode ajudar a remover a pele seca.</p>
                </div>
            </div>
        </div>
    )
}
export default DicasBeleza;
