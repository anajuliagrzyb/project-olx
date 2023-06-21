import React, {useSatet} from "react";

const User = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const hadleNomeChange = (event) => {
        setNome(event.target.value);
    }

    const hadleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const hadleSenhaChange = (event) => {
        setSenha(event.target.value);
    }

    const hadleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    }

    const hadleSubmit = (event) => {
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
        <input type="email" value={email} onChange={handleEmailChange} />
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



