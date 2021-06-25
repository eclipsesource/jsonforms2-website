import React from 'react';
import { person } from '@jsonforms/examples';
import { Demo } from '../common';

const Person = () => {
  return (
    <Demo
      data={person.data}
      schema={person.schema}
      uischema={person.uischema}
    />
  );
};

export default Person;
