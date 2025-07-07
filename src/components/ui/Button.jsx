import PropTypes from 'prop-types';

// Reusable button component with customizable styles
function Button({ children, onClick, variant = 'primary', type = 'button' }) {
  // Define button styles based on variant
  const baseStyles = {
    padding: '8px 16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
  };

  const variants = {
    primary: { background: '#007bff', color: '#fff' },
    danger: { background: '#ff4d4f', color: '#fff' },
    secondary: { background: '#6c757d', color: '#fff' },
  };

  const buttonStyles = { ...baseStyles, ...variants[variant], transition: 'opacity 0.2s' };

  return (
    <button type={type} style={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
}

// Prop types for type checking
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'danger', 'secondary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;