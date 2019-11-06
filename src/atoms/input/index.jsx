import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './style';

const InputField = ({ onFocus, onBlur, value, label, placeholder }) => {
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

InputField.propTypes = {
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
}

export default InputField
