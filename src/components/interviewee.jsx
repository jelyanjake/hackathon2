import { useEffect, useRef } from 'react';

function Interviewee() {
  const intervieweeRef = useRef(null);
  const interviewerRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (intervieweeRef.current) {
          intervieweeRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();
  }, []);

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Left Section: Camera Boxes */}
      <div>
        <div style={{ background: '#5c6ef8', padding: '20px', borderRadius: '20px', marginBottom: '20px', width: '320px', height: '180px' }}>
          <p>interviewer</p>
          <video ref={interviewerRef} autoPlay playsInline muted width="100%" height="100%" />
        </div>

        <div style={{ background: '#5c6ef8', padding: '20px', borderRadius: '20px', width: '320px', height: '180px' }}>
          <p>interviewee</p>
          <video ref={intervieweeRef} autoPlay playsInline width="100%" height="100%" />
        </div>
      </div>

      {/* Right Section: Chatbox or File Drop */}
      <div
        style={{
          background: '#5c6ef8',
          padding: '20px',
          borderRadius: '20px',
          width: '300px',
          height: '380px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <p>chatbox<br />or for<br />dropping<br />files</p>
      </div>
    </div>
  );
}

export default Interviewee;
