import React from 'react'

function Login2() {
  return (
    <div className='login-area2'>
        <div className="container">
             <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="intro-box">
                        <div className="intro-logo">
                            <img src='assets/img/logo/logo.png' alt=''/>
                            <ul className='login-socials'>
                                <li className='facebook'><a href=" #"><img src='assets/img/logo/1.png' alt=''/></a></li>
                                <li className='google'><a href=" #"><img src='assets/img/logo/2.png' alt=''/></a></li>
                                <li className='freeplay'><a href=" #"><img src='assets/img/logo/3.png' alt=''/></a></li>
                                <li className='xbox'><a href=" #"><img src='assets/img/logo/4.png' alt=''/></a></li>
                                <li className='redbox'><a href=" #"><img src='assets/img/logo/5.png' alt=''/></a></li>
                            </ul>
                        </div>
                        <div className="login-from login2-form">
                            <h3>INICIAR SESSÃO</h3>
                            <input type="email" class="form-control" defaultValue="Nome de usuárlo ou e-mall" id="email"/>
                            <input type="text" class="form-control" defaultValue='Senha' id="text"/>
                            <ul>
                                <li>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="check1" name="option1" value="something"/>
                                         <label class="form-check-label" for="check1">Lembre de mim</label>
                                    </div>
                                </li>
                                <li><a href=' #'>Esqueceu a senha</a></li>
                            </ul>
                            <a className='button' href=' #'>FAZER LOGIN AGORA</a>
                        </div>
                        <div className="form-bottom-content">
                            <h2>Politica de Privacidade</h2>
                            <p>Não tem uma conta Epic Games?<span> Inscrever-se </span> ou <span>Entrar mais tarde</span></p>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login2