import { useState, useEffect, useRef } from 'react';
import StatusModal from './StatusModal';

function IntPage() {
  const interviewerRef = useRef(null);
  const intervieweeRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (interviewerRef.current) {
          interviewerRef.current.srcObject = stream;
        }
        if (intervieweeRef.current) {
          intervieweeRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();
  }, []);

  return (
    <div style={wrapperStyle}>
      <div style={layoutStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={boxStyle}>
            <p style={labelStyle}>Interviewer</p>
            <video ref={interviewerRef} autoPlay playsInline width="200" height="150" />
          </div>
          <div style={boxStyle}>
            <p style={labelStyle}>Interviewee</p>
            <video ref={intervieweeRef} autoPlay playsInline width="200" height="150" />
          </div>
        </div>
        <div style={{ ...boxStyle, width: '400px', height: '320px' }}>
          <p style={{ fontSize: '20px', textAlign: 'center' }}>Resume box for interviewee</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center' }}>
          <button style={circleButton}>👍 Like</button>
          <button style={circleButton}>👎 Dislike</button>
          <button style={circleButton}>💬 Chat</button>-
        </div>
      </div>
    </div>
  );
}

const wrapperStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
};

const layoutStyle = {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  padding: '20px',
};

const boxStyle = {
  backgroundColor: '#4e6cff',
  borderRadius: '15px',
  padding: '10px',
  width: '200px',
  height: '150px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
};

const labelStyle = {
  fontSize: '18px',
  marginBottom: '5px',
};

const circleButton = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#eee',
  border: 'none',
  fontSize: '12px',
  cursor: 'pointer',
};

export default IntPage;
