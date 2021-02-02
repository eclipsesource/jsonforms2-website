import React, { useState } from 'react';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import Button from '@material-ui/core/Button';
import { JsonForms } from '@jsonforms/react';

const schema = {
  type: 'object',
  properties: {
    firstname: {
      type: 'string'
    },
    lastname: {
      type: 'string',
      minLength: 1
    },
  },
  required: ["lastname"]
};

const uischema = {
  type: 'HorizontalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/firstname',
    },
    {
      type: 'Control',
      scope: '#/properties/lastname',
    },
  ],
};

const data = {
  firstname: 'Max',
  lastname: ''
}

let index = 0;

const ValidationExample = () => {
  const validationModes = [
    'ValidateAndShow',
    'ValidateAndHide',
    'NoValidation'
  ];
  
  const [currentValidationMode, setValidationMode] = useState(validationModes[0]);
  
  const toggleValidation = () => {
    console.log(index);
    index++;
    if (index == validationModes.length) {
      index = 0;
    }
    setValidationMode(validationModes[index]);
  };

  return (
    <div>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={materialRenderers}
        cells={materialCells}
        validationMode={currentValidationMode}
      />
      <Button
        onClick={toggleValidation}
        color='primary'
        variant='contained'
      >
        Toggle Validation
      </Button>
      <br/>
      <br/>
      Current mode: {currentValidationMode}
    </div>
  )
};

export default ValidationExample;
