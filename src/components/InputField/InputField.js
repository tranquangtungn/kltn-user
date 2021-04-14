import React from 'react'
import PropTypes from 'prop-types'

import { FormGroup, Label, Input } from 'reactstrap'

function InputField(props) {
    const { field,
        type, label, placeholder, disabled, } = props;
    const { name } = field;
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                {...field}
                id={name}
                type={type}
                disabled={disabled}
                placeholder={placeholder} />
        </FormGroup>
    )
}

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,

}
InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

export default InputField

