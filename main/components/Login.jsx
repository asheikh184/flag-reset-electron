import React from 'react'

function Login() {
  return (
    <div className='login-area'>
        <div className="container">
             <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-12">
                    <div className="intro-box">
                        <div className="intro-logo">
                            <img src='assets/img/images/intro-logo.png' alt=''/>
                            <ul>
                                <li className='title'>Heroic</li>
                                <li className='launcher'>Games Launcher</li>
                            </ul>
                        </div>
                        <div className="intro-content">
                            <h1>Welcomel</h1>
                            <p>In order for you to be able to log in and install your games, you first need you to follow the steps below.</p>
                            <ul>
                                <li>Open <a href=' #'>Epic Store here</a>, log in your account and copy your <span>SID information number.</span></li>
                                <li>Paste the <a href=' #'>SID number</a> in the input box below, click on the login button and wait.</li>
                                <li></li>
                            </ul>

                        </div>
                        {/* <div className="language">
                            <select class="form-control" id="sel1">
                            <option><img src="assets/img/images/uk.png" alt="uk"/> English</option>
                            <option>Portuguese</option>
                        </select>
                        </div> */}
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="login-from">
                        <h3>Paste the SID number here</h3>
                        <input type="text" class="form-control" id="text"/>
                        <button>Login</button>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login