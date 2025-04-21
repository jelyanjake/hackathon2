import { useState,useEffect, useRef } from 'react';
import StatusModal from './StatusModal';

function IntPage() {

  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState('');

  const videoRef = useRef(null)

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    }

    startCamera()
  }, [])

  return (
    <section id="features">
      <div className="container">
        <div className="section-title">
          <h2>lokhhhhhh</h2>
          <div className='videos'>
          <video ref={videoRef} autoPlay playsInline width="1080" height="720" />
          </div>
          <div className='videos'>
          </div>
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

export default IntPage;