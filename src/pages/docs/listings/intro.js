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
        scope: '#/properties/name'
      },
      {
        type: 'Control',
        scope: '#/properties/description',
        options: {
          multi: true
        }
      },
      {
        type: 'Control',
        label: 'Rating',
        scope: '#/properties/rating'
      },
      {
        type: 'Control',
        label: 'Done?',
        scope: '#/properties/done'
      }
    ]
  },
};
