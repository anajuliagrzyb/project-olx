import {useState,ChangeEvent, FormEvent} from "react";
import olxIMG from './assets/olx.png'
import './styles.css';


export const RegisterUser = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const hadleNomeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNome(event.target.value);
    }

    const hadleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const hadleSenhaChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSenha(event.target.value);
    }

    const hadleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTelefone(event.target.value);
    }

    const hadleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Dados do usuário: ', {nome, email, senha, telefone})
        setNome('');
        setEmail('');
        setSenha('');
        setTelefone('');
    }

    return (
        <div className="container">
            <div className="container-register-user">
                <div className="wrap-user">
                    <div>
                        <span className="register-user-title">
                        <img src={olxIMG} alt="Logo olx" />
                        </span>
                        <span className="register-user-title">Crie a sua conta!</span>
                        </div>
                            <form onSubmit={hadleSubmit} className="register-user-form">
                            <label>
                            Nome
                            <input type="text" value={nome} onChange={hadleNomeChange} className="register-user-name" placeholder="Nome"/>
                            </label>
                            <br />
                            <label>
                            E-mail
                            <input type="email" value={email} onChange={hadleEmailChange} className="register-user-email" placeholder="E-mail" />
                            </label>
                            <br />
                            <label>
                            Senha
                            <input type="passaword" value={senha} onChange={hadleSenhaChange} className="register-user-password" placeholder="Senha com até 8 caracteres"/>
                            </label>
                            <br />
                            <label>
                            Telefone
                            <input type="tel" value={telefone} onChange={hadleTelefoneChange} className="register-user-telefone" placeholder="(00) 00000-0000" />
                            </label>
                            <br />
                            <button type="submit" className="button">Cadastrar</button>

                            <div>
                                <span className="txt">Já tem uma conta?</span>
                                <a className="txt2" href="#">Entrar</a>
                            </div>
                        </form>
                </div>   
            </div>
        </div>
            
            
            
        
    );
};



