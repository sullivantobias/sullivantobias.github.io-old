import PropTypes from 'prop-types';

export const propTypes = {
    marker: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    flexDisplay: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};