export const IntroCode = {
  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      done: {
        type: 'boolean'
      },
      rating: {
        type: 'integer'
      }
    },
    required: ['name']
  },
  uischema: {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: {
          '$ref': '#/properties/name'
        }
      },
      {
        type: 'Control',
        scope: {
          '$ref': '#/properties/description'
        },
        options: {
          multi: true
        }
      },
      {
        type: 'Control',
        label: 'Rating',
        scope: {
          '$ref': '#/properties/rating'
        }
      },
      {
        type: 'Control',
        label: 'Done?',
        scope: {
          '$ref': '#/properties/done'
        }
      }
    ]
  },
};
