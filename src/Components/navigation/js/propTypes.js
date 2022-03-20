import PropTypes from 'prop-types';

export const propTypes = {
    navigationLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired
        }).isRequired
    )
};