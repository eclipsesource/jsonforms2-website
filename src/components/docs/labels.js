import React from 'react';
import { Demo } from '../common';

const propertyLabel = {
  schema: {
    properties: {
      firstName: {
        type: "string"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/firstName"
      }
    ]
  }
}

const schemaLabel = {
  schema: {
    properties: {
      name: {
        type: "string",
        title: "First Name"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/name",
      }
    ]
  }
}

const uiSchemaLabel = {
  schema: {
    properties: {
      name: {
        type: "string",
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/name",
        label: "First Name"
      }
    ]
  }
}

const oneOfLabel = {
  schema : {
    properties: {
      oneOfEnum: {
        type: 'string',
        oneOf: [
          {const: 'foo', title: 'Foo'},
          {const: 'bar', title: 'Bar'},
          {const: 'foobar', title: 'FooBar'}
        ]
      }
    }
  }
}

export const PropertyLabel = () => (
  <Demo
    schema={propertyLabel.schema}
    uischema={propertyLabel.uischema}
  />
);

export const SchemaLabel = () => (
  <Demo
    schema={schemaLabel.schema}
    uischema={schemaLabel.uischema}
  />
);

export const UiSchemaLabel = () => (
  <Demo
    schema={uiSchemaLabel.schema}
    uischema={uiSchemaLabel.uischema}
  />
);

export const OneOfLabel = () => (
  <Demo
    schema={oneOfLabel.schema}
  />
);
