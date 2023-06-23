import React from "react";
import { useState } from "react";

export default function Login() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getLoginButtonStyle = () => {
    return activeTab === 'login' ? { backgroundColor: '#41BFB3', color: '#FFFFFF' } : { backgroundColor: '#9BF2EA', color: '#FFFFFF' };
  };

  const getRegisterButtonStyle = () => {
    return activeTab === 'register' ? { backgroundColor: '#41BFB3', color: '#FFFFFF' } : { backgroundColor: '#9BF2EA', color: '#FFFFFF' };
  };

  const getSubmitButtonLabel = () => {
    return activeTab === 'login' ? 'Login' : 'Register';
  };

  const handleSubmit = () => {
    if (activeTab === 'login') {
      // Login form submission logic
    } else if (activeTab === 'register') {
      // Register form submission logic
    }
  };

  return (
    <div className="login-container">
      <div className="img-login">
        <img src="./images/logo1.jpg" className="logologin" alt="Logo"></img>
        <section className="elearing-form">
          <img src="./images/elearning.png" className="elearning-img" alt="E-Learning"></img>
          <div className="login-div">
            <div className="login-register-div">
              <button
                className={activeTab === 'login' ? 'active' : ''}
                onClick={() => handleTabChange('login')}
                style={getLoginButtonStyle()}
                id="register-button"
              >
                LOGIN
              </button>
              <button
                className={activeTab === 'register' ? 'active' : ''}
                onClick={() => handleTabChange('register')}
                style={getRegisterButtonStyle()}
                id="register-button"
              >
                REGISTER
              </button>
            </div>
            <span className="login-phrase">{activeTab === 'login' ? 'Welcome again, please enter the information to login:' : 'Please enter the information to register:'}</span>
            <div className="form-container">
              <form>
                {activeTab === 'login' && (
                  <>
                    <h5>Email</h5>
                    <input type="text" name="email" value="Enter your Email" className="input" />
                    <h5>Password:</h5>
                    <input type="password" name="password" value="Enter your Password" className="input" />
                  </>
                )}
                {activeTab === 'register' && (
                  <>
                    <h5>Email</h5>
                    <input type="text" name="email" value="Enter your Email" className="input" />
                    <h5>Username:</h5>
                    <input type="text" name="username" value="Enter your Username" className="input" />
                    <h5>Password:</h5>
                    <input type="password" name="password" value="Enter your Password" className="input" />
                  </>
                )}
                <div className="form-bottom">
                  <button onClick={handleSubmit} className="submit">
                    {getSubmitButtonLabel()}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  );
}