import { useState } from 'react';
import StatusModal from './StatusModal';
import ivimg from '../assets/interview.png';
import './home.css';

function HomePage() {
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <section className="hero">
          <div class="hero-content1">
            <div class="imgdiv"><h2>Looking for Jobs?</h2></div>
            <div class="menu3">
              <form className='form-group2'>
                <h2>Register Now</h2>
              <input type='text'></input>
              </form>
            </div>
          </div>
          </section>
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