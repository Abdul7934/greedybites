import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';

const DiningIcon = ({ size = '1.5rem' }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.3))',
        '&:hover': {
          '& .plate': {
            transform: 'scale(1.05)',
            transition: 'all 0.3s ease'
          },
          '& .napkin': {
            transform: 'translate(-70%, -50%) rotate(-12deg) scale(1.05)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          },
          '& .utensils': {
            transform: 'translate(-40%, -50%) rotate(25deg) scale(1.1)',
            filter: 'drop-shadow(3px 3px 4px rgba(0,0,0,0.4))',
          }
        }
      }}
    >
      {/* White plate */}
      <FontAwesomeIcon 
        className="plate"
        icon={faCircle} 
        style={{ 
          fontSize: size,
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F0F0 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.2))',
          transition: 'all 0.3s ease'
        }}
      />

      {/* Plate rim */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '94%',
          height: '94%',
          border: '2px solid rgba(0,0,0,0.08)',
          borderRadius: '50%',
          zIndex: 2,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '2px',
            left: '2px',
            right: '2px',
            bottom: '2px',
            border: '1px solid rgba(255,255,255,0.5)',
            borderRadius: '50%'
          }
        }}
      />

      {/* Green napkin on plate, extending to left */}
      <Box
        className="napkin"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '45%',
          width: '85%',
          height: '85%',
          background: 'linear-gradient(135deg, #38A169 0%, #276749 100%)',
          transform: 'translate(-70%, -50%) rotate(-12deg)',
          borderRadius: '4px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
          zIndex: 3,
          transition: 'all 0.3s ease',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(45deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: 'inherit'
          }
        }}
      />

      {/* Single Fork and Knife Combined - Slightly Right of Center */}
      <Box
        className="utensils"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          transform: 'translate(-40%, -50%) rotate(25deg)',
          display: 'flex',
          gap: '1px',
          alignItems: 'center',
          zIndex: 4,
          transition: 'all 0.3s ease'
        }}
      >
        <FontAwesomeIcon 
          icon={faUtensils} 
          style={{ 
            fontSize: `calc(${size} * 0.75)`,
            color: '#E53E3E',
            filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3))',
            background: 'linear-gradient(135deg, #FF4B2B 0%, #C53030 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        />
      </Box>

      {/* Plate shine */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: '25%',
          height: '25%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%)',
          borderRadius: '50%',
          transform: 'rotate(-45deg)',
          zIndex: 5,
          filter: 'blur(1px)'
        }}
      />
    </Box>
  );
};

export default DiningIcon; 