import axios from "axios"

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post(
        'http://localhost:3001/authenticate',
        {username: value}

      )
      .then(r => props.onAuth({ ...r.data, secret: value }))
      .catch(e => console.log('erro', e))
      
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <img src="img/logo@2x.png" alt="" />
          <div className="form-title">KATON-CHAT</div>
  
          <div className="form-subtitle">Set an admin name to get started!</div>
  
          <div className="auth">
            <div className="auth-label">Admin name</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Start Chatting
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;