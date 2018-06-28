import { Actions, NOT_APPLICABLE } from '@jsonforms/core';

store.dispatch(Actions.registerUISchema(
  (jsonSchema, schemaPath) => {
    return schemaPath === '#/properties/firstarray' ? 2 : NOT_APPLICABLE;
  },
  {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/firstName'
      },
      {
        type: 'Control',
        scope: '#/properties/lastName'
      }
    ]
  }
));