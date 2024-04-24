
import PropTypes from 'prop-types'; // Import PropTypes
import GLTFComponent from './totem';

const Layout = ({ children }) => {
  return (
    <div>
      <GLTFComponent />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate children prop
};

export default Layout;