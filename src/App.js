import Header from "./components/Header";
import ProdutosDestaque from "./components/ProdutosDestaque";
import OfertasEspeciais from "./components/OfertasEspeciais";
import DicasBeleza from "./components/DicasBeleza";
import Contato from "./components/Contato";
import Brinde from "./components/Brinde";
function App() {
    return (
        <div className="App">
            <Header></Header>
            <ProdutosDestaque></ProdutosDestaque>
            <OfertasEspeciais></OfertasEspeciais>
            <DicasBeleza></DicasBeleza>
            <Contato></Contato>
            <Brinde></Brinde>
        </div>
    )
}

export default App;
