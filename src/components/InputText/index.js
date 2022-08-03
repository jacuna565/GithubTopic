import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "./inputText.styles";

const InputText = (props) => {
	const { type, name, onChange, value, onKeyUp, placeholder } = props;
	return (
		<StyledInput
			type={type}
			name={name}
			onChange={onChange}
			value={value}
			onKeyUp={onKeyUp}
			aria-label={name}
			placeholder={placeholder}
		/>
	);
};

InputText.propTypes = {
	onChange: PropTypes.func.isRequired,
	onKeyUp: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
};
InputText.defaultProps = {
	type: "text",
	placeholder: "",
	value: "",
};

export default InputText;
