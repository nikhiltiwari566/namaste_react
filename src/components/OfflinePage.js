const OfflinePage = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        background: 'linear-gradient(135deg, #f8d7da 0%, #ffe0e3 100%)',
        borderRadius: '12px',
        boxShadow: '0 4px 24px 0 rgba(248, 215, 218, 0.15)',
        margin: '40px 20px',
        padding: '40px 20px',
      }}
    >
      <svg
        width='80'
        height='80'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ marginBottom: '20px' }}
      >
        <circle cx='12' cy='12' r='10' fill='#f5c6cb' />
        <path
          d='M8 15h8M9 9h.01M15 9h.01'
          stroke='#721c24'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <h1 style={{ color: '#721c24', fontSize: '2rem', marginBottom: '10px' }}>
        You're offline
      </h1>
      <p
        style={{
          color: '#721c24',
          fontSize: '1.1rem',
          textAlign: 'center',
          maxWidth: '400px',
        }}
      >
        Oops! It looks like you have lost your internet connection.
        <br />
        Please check your network and try again.
      </p>
    </div>
  );
};

export default OfflinePage;
