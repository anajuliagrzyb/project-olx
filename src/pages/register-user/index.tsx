import {useState,ChangeEvent, FormEvent} from "react";


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
        <form onSubmit={hadleSubmit}>
        <label>
        Nome: 
        <input type="text" value={nome} onChange={hadleNomeChange} />
        </label>
        <br />
        <label>
        Email:
        <input type="email" value={email} onChange={hadleEmailChange} />
        </label>
        <br />
        <label>
        Senha:
        <input type="passaword" value={senha} onChange={hadleSenhaChange} />
        </label>
        <br />
        <label>
        Telefone:
        <input type="tel" value={telefone} onChange={hadleTelefoneChange} />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
        </form>
        
    );
};



