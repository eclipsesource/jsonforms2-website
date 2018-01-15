import React from "react";
import { connect } from 'react-redux';
import {
  mapDispatchToFieldProps,
  mapStateToFieldProps
} from '@jsonforms/core';
import { Rating } from './Rating';

const RatingControl = ({ data, handleChange, path }) => {
  return (
    <Rating
      value={data}
      onClick={ev => handleChange(path, Number(ev.value))}
    />
  );
};

export default connect(
  mapStateToFieldProps,
  mapDispatchToFieldProps,
)(RatingControl)