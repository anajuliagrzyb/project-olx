import {useState,ChangeEvent, FormEvent} from "react";
import olxIMG from './assets/olx.png'
import './styles.css';


export const UserAccess = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    

    const hadleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const hadleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    }


    const hadleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados do usuário: ', { email, senha})
        setEmail('');
        setSenha('');
    }

    return (
        <div className="container">
            <div className="container-register-access">
                <div className="wrap-access">
                    <div>
                        <span className="register-access-title">
                        <img src={olxIMG} alt="Logo olx" />
                        </span>
                        <span className="register-access-title">Crie a sua conta!</span>
                        </div>
                    <form onSubmit={hadleSubmit} className="register-access-form">
                            <label>
                            E-mail
                            <input type="text" value={email} onChange={hadleEmailChange} className="register-access-email" placeholder="E-mail" />
                            </label>
                            <br />
                            <label>
                            Senha
                            <input type="password" value={senha} onChange={hadleSenhaChange} className="register-access-password" placeholder="Senha com até 8 caracteres"/>
                            </label>
                            <br />
                            <button type="submit" className="button-access"><b>Cadastrar</b></button>

                            <div>
                                <span className="txt">Não tem uma conta?</span>
                                <a className="txt2" href="#">Cadastre-se</a>
                            </div>
                    </form>
                </div>   
            </div>
        </div>
            
            
            
        
    );
};