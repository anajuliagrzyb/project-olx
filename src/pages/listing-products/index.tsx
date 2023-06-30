import {useEffect, useState} from "react";
import {produtos as IProdutos} from "../../../src/types/produtos"
import olxIMG from './assets/olx.png'
import './styles.css';

const Listing = () => {
    const [id, setId] = useState('');

const [produtos, setProdutos] = useState <IProdutos[]>([]);
useEffect(() => {
setProdutos([{
    id: 1,
    productName: "Iphone 11",
    price: 3500.00,
    productImage: 'https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Picture.png'

},

{
    id: 2,
    productName: "Iphone 12",
    price: 4500.00,
    productImage: 'https://images.tcdn.com.br/img/img_prod/1154447/iphone_12_apple_64gb_roxo_tela_de_6_1_e_camera_dupla_de_12_mp_lacrado_645_1_9ec0c09feb8b020fb47575e36a16c9aa.png'
},

{
    id: 3,
    productName: "Iphone 13",
    price: 5500.00,
    productImage: 'https://pngimg.com/d/iphone_13_PNG29.png'
}
])
},[])



return (
    <div className="container-listing">
       <header>
       <img src={olxIMG} alt="Logo OLX"  />
       <button type="submit" className="button-ad-register"><b>Desapegar</b></button>

       </header>
       
       
       
       
            
        <div>{produtos.map(produto => (
        <div className="products-listing"> 
         <img src={produto.productImage} alt={'Imagem ' + produto.productName} />
            
            <div className="conteudo">
            <span>{produto.productName}</span>
            <span>{produto.price}</span>
            </div>               
        </div>
            
        ))}</div>

        <footer>
            © Bom Negócio Atividades de Internet Ltda. Rua do Catete, 359, Flamengo - 22220-001 - Rio de Janeiro, RJ
        </footer>
        </div>
        
    );

};
export default Listing;