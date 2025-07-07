import PropTypes from 'prop-types';

// Reusable card component for content presentation
function Card({ children, title }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px',
    }}>
      {title && <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>{title}</h3>}
      {children}
    </div>
  );
}

// Prop types for type checking
Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Card;