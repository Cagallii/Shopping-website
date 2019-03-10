import styled from 'styled-components';
import T from 'prop-types';

const getHeight = size => {
  if (size === 'medium') {
    return 'auto';
  } else if (size === 'small') {
    return '28px';
  } else {
    return 'auto';
  }
};

const getFontSize = props => {
  if (props.size === 'medium') {
    return props.theme.fontSizes.button;
  } else if (props.size === 'small') {
    return '12px';
  } else {
    return props.theme.fontSizes.button;
  }
};

const getLineHeight = props => {
  if (props.size === 'medium') {
    return '1.6';
  } else if (props.size === 'small') {
    return '0.8';
  } else {
    return '1.6';
  }
};

const Button = styled.button`
  height: ${props => getHeight(props.size)};
  font-size: ${props => getFontSize(props)};
  line-height: ${props => getLineHeight(props)};
  box-sizing: border-box;
  margin: 0px;
  padding: 8px 16px;
  color: ${props => props.color};
  background-color: ${props => props.bg};
  -moz-appearance: none;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 0px none;
  border-radius: 4px;
  cursor: pointer;
`;

Button.propTypes = {
  size: T.oneOf(['small', 'medium', 'large']),
  bg: T.string,
  color: T.string,
};

Button.defaultProps = {
  size: 'medium',
  bg: '#4caf50',
  color: 'white',
};

export default Button;
