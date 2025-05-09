import { useState } from 'react';
import StatusModal from './StatusModal';
import { useNavigate,Link} from 'react-router-dom';

function RegPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    idnum: ''
  });

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleItemClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setStatusMessage('Validating...');

    try {
      // Check for duplicates
      const checkResponse = await fetch(
        `https://67f50ba7913986b16fa2f9ff.mockapi.io/api/v1/users?phone=${formData.email}`
      );
      const phoneUsers = await checkResponse.json();
      
      if (Array.isArray(phoneUsers)) {
        if (phoneUsers.some(user => user.email === formData.email)) {
          throw new Error('Email is already used.');
        }
      }

      // Submit if no duplicates
      const response = await fetch('https://67f50ba7913986b16fa2f9ff.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Registration failed');
      
      setStatus('success');
      setStatusMessage('Registration successful!');
      setFormData({ name: '', phone: '', idnum: '' });
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.message);
    }
  };

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <form className="registration-form" onSubmit={handleSubmit}>
            <h2>Register User</h2>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoFocus
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="pass">Password :</label>
              <input
                type="text"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
  <label>Choose your role:</label>
  <div>
    <label>
      <input
        type="radio"
        name="role"
        value="interviewer"
        checked={formData.role === 2}
        onChange={handleChange}
      />
      Recruiter
    </label>
  </div>
  <div>
    <label>
      <input
        type="radio"
        name="role"
        value="interviewee"
        checked={formData.role === 1}
        onChange={handleChange}
      />
      Applicant
    </label>
  </div>
</div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="register-btn"
              >Register</button>
              <button 
                type="reset" 
                className="cancel-btn"
                onClick={() => setFormData({ name: '', phone: '', idnum: '' })}
              >
                Cancel
              </button>
            </div>
          </form>
          <small><Link to="/">Already have an account?</Link></small>
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

export default RegPage;