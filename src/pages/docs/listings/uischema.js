export const UiSchemaElementsCode = {
  controls: {
    schema: {
      'properties': {
        'name': {  'type': 'string' }
      }
    },
    uischema: {
      'type': 'Control',
      'scope': { '$ref': '#/properties/name' }
    },
    data: {
      name: 'Ottgar',
    },
  }
};

