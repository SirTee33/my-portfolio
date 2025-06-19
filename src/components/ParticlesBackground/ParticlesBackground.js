import React, { useCallback } from 'react';
import { loadSlim } from 'tsparticles-slim';
import Particles from 'react-tsparticles';

const ParticlesBackground = ({ theme }) => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    particles: {
      number: { value: 5 },
      color: { value: theme === 'dark' ? '#ffffff' : '#1e3a8a' },
      shape: { type: 'star' },
      opacity: { value: 0.3 },
      mode: 'grab', // or 'attract', 'bubble', 'remove'
      size: { value: 24 },
      move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
    },
    background: {
      color: {
        value: theme === 'dark' ? '#121212' : '#f9f9f9',
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
