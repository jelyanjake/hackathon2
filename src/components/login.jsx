import { useState } from 'react';
import StatusModal from './StatusModal';
import { useNavigate,Link} from 'react-router-dom';

function HomePage() {
  const [formData, setFormData] = useState({
    phone: '',
    idnum: ''
  });

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('Logging in...');

    try {
      // Check if user exists with provided credentials
      const response = await fetch(
        `https://67f50ba7913986b16fa2f9ff.mockapi.io/api/v1/users?phone=${formData.phone}&idnum=${formData.idnum}`
      );
      const users = await response.json();
      
      if (!Array.isArray(users) || users.length === 0) {
        throw new Error('Invalid phone number or ID');
      }

      const user = users[0]; // Get the first matching user
      
      setStatus('success');
      setStatusMessage(`Welcome back, ${user.name || 'User'}!`);
      setFormData({ phone: '', idnum: '' });
      
      // Here you would typically set user authentication state or redirect
      // For example: authContext.login(user);
      
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.message);
    }
  };

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            
            <div className="form-group">
              <label htmlFor="phone">Email : </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                autoFocus
              />
            </div>

            <div className="form-group">
              <label htmlFor="idnum">Password :</label>
              <input
                type="password"
                id="idnum"
                name="idnum"
                autoComplete='off'
                value={formData.idnum}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="login-btn"
              >Login</button>
            </div>
          </form>
          <small><Link to="/registration">Don't have an account?</Link></small>
        </div>
      </div>
      <StatusModal
        status={status}
        message={statusMessage}
        onClose={() => setStatus(null)}
      />
    </section>
  );
}

export default HomePage;