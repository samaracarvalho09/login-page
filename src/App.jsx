import { useState } from "react";
import { User, Key, Eye, EyeSlash } from "@phosphor-icons/react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [valueLogin, setValueLogin] = useState("");
  const [valueSenha, setValueSenha] = useState("");

  return (
    <>
      <div className="wrapper-page">
        <form action="">
          <div className="input">
            <label>E-mail</label>
            <div className="input-container">
              <User size={24} className="userIcon" />
              <input
                type="text"
                placeholder="Insira seu CPF, E-mail ou Código"
                onChange={(e) => setValueLogin(e.target.value)}
                value={valueLogin}
              />
            </div>
          </div>
          <div className="input">
            <label>Senha</label>
            <div className="input-container">
              <Key size={24} className="userIcon" />
              {showPassword ? (
                <input
                  type="text"
                  placeholder="Insira sua senha"
                  onChange={(e) => setValueSenha(e.target.value)}
                  value={valueSenha}
                />
              ) : (
                <input
                  type="password"
                  placeholder="Insira sua senha"
                  onChange={(e) => setValueSenha(e.target.value)}
                  value={valueSenha}
                />
              )}
              <div>
                {showPassword ? (
                  <EyeSlash
                    size={24}
                    className="useIconEye"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <Eye
                    size={24}
                    className="useIconEye"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="senhaContainer">
            <div className="checkBoxContainer">
              <input type="checkbox" className="inputCheckBox" />
              <label htmlFor="">Lembrar-me</label>
            </div>
            <a href="#" target="_blank">
              Esqueci minha senha
            </a>
          </div>
          <button
            type="submit"
            className="buttomEntrar"
            disabled={!valueLogin || !valueSenha}
          >
            Entrar
          </button>
          <button type="submit" className="buttonPrimeiroAcesso">
            Primeiro Acesso
          </button>
        </form>
      
      </div>

    
    </>
  );
}

export default App;
