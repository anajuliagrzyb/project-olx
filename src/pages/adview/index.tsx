import {useEffect, useState, ChangeEvent} from "react";
import {produtos as IProdutos} from "../../../src/types/produtos"
import olxIMG from './assets/olx.png'
import './styles.css';

const Adview = () => {
    const [id, setId] = useState('');

    const [search, setSearch] = useState('');

    const hadleTituloChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

const [produtos, setProdutos] = useState <IProdutos[]>([]);
useEffect(() => {
setProdutos([{
    id: 1,
    productName: "Iphone 11",
    price: 3500.00,
    productImage: 'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Picture.png',
    description: 'Iphone 11 64GB'
    

},
])
},[])



return (
    <div className="container-adview">
       <header>
       <img src={olxIMG} alt="Logo OLX"  />
       <button type="submit" className="button-adview"><b>Desapegar</b></button>

       </header>

       <label> 
             <input type="text" value={search} onChange={hadleTituloChange} className="adview-search" placeholder="Buscar" />
             
            </label>
       
       
        <div>{produtos.map(produto => (
        <div className="products-adview"> 
         <img src={produto.productImage} alt={'Imagem ' + produto.productName} />
            
        <div className="dados-adview">
            <span>R$ {produto.price}</span>
            <span id="middle">{produto.productName}</span>
            <hr   />
            <p id="descricao">Descrição: </p>
            <span>
                {produto.description}
                </span>
            
            </div>               
        </div>
            
        ))}</div>

        <footer>
            © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359, Flamengo - 22220-001 - Rio de Janeiro, RJ
        </footer>
        </div>
        
    );

};
export default Adview;