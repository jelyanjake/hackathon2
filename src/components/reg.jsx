import { useState, useEffect, useRef } from 'react';
import StatusModal from './StatusModal';
import { color } from 'framer-motion';

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
    <div className='interview-dashboard' style={dashboardStyle}>
      <div style={wrapperStyle}>
        <div style={layoutStyle}>
          {/* Video Boxes Column */}
          <div style={videoColumnStyle}>
            <div style={videoBoxStyle}>
              <p style={labelStyle}>Interviewer</p>
              <video 
                ref={interviewerRef} 
                autoPlay 
                playsInline 
                style={videoStyle}
              />
            </div>
            <div style={videoBoxStyle}>
              <p style={labelStyle}>Interviewee</p>
              <video 
                ref={intervieweeRef} 
                autoPlay 
                playsInline 
                style={videoStyle}
              />
            </div>
          </div>
          
          {/* Resume Box */}
          <div style={resumeBoxStyle}>
            <p style={resumeTitleStyle}>Resume</p>
            <div style={resumeContentStyle}>
              {/* Placeholder for resume content */}
              <p style={placeholderTextStyle}>Upload or view candidate's resume here</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div style={actionsColumnStyle}>
            <button style={actionButtonStyle}>👍 Like</button>
            <button style={actionButtonStyle}>👎 Dislike</button>
            <button style={actionButtonStyle}>💬 Chat</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const dashboardStyle = {
  backgroundColor: '#f0f2f5',
  minHeight: '100vh',
  padding: '20px',
};

const wrapperStyle = {
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '20px',
};

const layoutStyle = {
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
  justifyContent: 'center',
};

const videoColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
};

const videoBoxStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '25px',
  width: '350px',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#fff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
  ':hover': {
    transform: 'translateY(-5px)'
  }
};

const videoStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  objectFit: 'cover',
};

const labelStyle = {
  fontSize: '24px',
  marginBottom: '15px',
  fontWeight: '600',
  color: '#333',
};

const resumeBoxStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: '25px',
  width: '500px',
  height: '400px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
};

const resumeTitleStyle = {
  fontSize: '24px',
  fontWeight: '600',
  marginBottom: '20px',
  color: '#333',
  textAlign: 'center',
};

const resumeContentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  border: '2px dashed #ddd',
};

const placeholderTextStyle = {
  fontSize: '18px',
  color: '#888',
  textAlign: 'center',
};

const actionsColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
};

const actionButtonStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: '#ffffff',
  border: 'none',
  fontSize: '18px',
  fontWeight: '500',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':hover': {
    transform: 'scale(1.05)',
    backgroundColor: '#f0f0f0'
  },
  ':active': {
    transform: 'scale(0.98)'
  }
};

export default IntPage;