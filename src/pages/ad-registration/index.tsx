import {useState,ChangeEvent, FormEvent} from "react";
import olxIMG from './assets/olx.png'
import './styles.css';


export const AdRegistration = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [usuario, setUsuario] = useState('');
    const [preco, setPreco] = useState('');
    const [cor, setCor] = useState('');
    
    const hadleTituloChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value);
    }

    const hadleDescricaoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescricao(event.target.value);
    }

    const hadleUsuarioChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsuario(event.target.value);
    }

    const hadlePrecoChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPreco(event.target.value);
    }

    const hadleCorChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCor(event.target.value);
    }

    const hadleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados do usuário: ', {titulo, descricao, usuario, preco, cor})
        setTitulo('');
        setDescricao('');
        setUsuario('');
        setPreco('');
        setCor('');
    }

    return (
        <div className="container-ad">
            <div className="container-ad-registration">
                <div className="wrap-registration">
                    <div>
                        <header className="header-ad">
                            <img src={olxIMG} alt="Logo OLX"  />
                            <hr />
                        </header>
                        <span className="register-ad-title"><b>O que você está anunciando?</b></span>
                        </div>
                            <form onSubmit={hadleSubmit} className="ad-registration-form">
                            <label>
                            Título
                            <input type="text" value={titulo} onChange={hadleTituloChange} className="ad-title" />
                            </label>
                            <br />
                            <label>
                            Descrição
                            <input type="text" value={descricao} onChange={hadleDescricaoChange} className="ad-description"  />
                            </label>
                            <br />
                            <label>
                            Usuário
                            <input type="text" value={usuario} onChange={hadleUsuarioChange} className="ad-user" />
                            </label>
                            <br />
                            <label>
                            Preço
                            <input type="number" value={preco} onChange={hadlePrecoChange} className="ad-price" />
                            </label>
                            <br />
                            <label>
                            Cor
                            <input type="text" value={cor} onChange={hadleCorChange} className="ad-color" />
                            </label>
                            <br />
                            <button type="submit" className="button-ad"><b>Enviar anúncio</b></button>

                        
                        </form>
                </div>   
            </div>
        </div>
            
            
            
        
    );
};

export default AdRegistration;



