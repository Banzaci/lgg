import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './style';

const Input = ({ onFocus, onBlur, value, label, placeholder }) => {
  return (
    <Fragment>
      { label && <Label >{ label }</Label>}
      <Input
        { ...(placeholder ? { placeholder } : {} ) }
        { ...(value ? { value } : {} ) }
        { ...(onFocus ? { onFocus } : {} ) }
        { ...(onBlur ? { onBlur } : {} ) }
      />
    </Fragment>
  )
}

Input.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
}

export default Input
