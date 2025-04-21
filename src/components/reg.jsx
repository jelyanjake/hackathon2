import { useState } from 'react';
import StatusModal from './StatusModal';

function RegPage() {

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <h2>lokhhhhhh</h2>
          <p>awdawd</p>
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