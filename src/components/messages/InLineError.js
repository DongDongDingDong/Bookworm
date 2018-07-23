import React from "react";
import PropTypes from '../../../node_modules/prop-types';

const InLineError = ({ text }) => (
    <span style ={{ color:"#ae5756"}}>{ text }</span>
);

InLineError.prototype = {
    text: PropTypes.string.isRequired
};
export default InLineError