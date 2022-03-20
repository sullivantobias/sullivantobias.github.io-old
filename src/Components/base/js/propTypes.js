import PropTypes from 'prop-types';

export const propTypes = {
    flexDisplay: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};