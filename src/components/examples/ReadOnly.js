import React from 'react';
import { Demo } from '../common';

const data = {
  firstname: "Max",
  lastname: "Mustermann"
}

const readonlyConfig = {
  schema: {
    properties: {
      firstname: {
        type: "string"
      },
      lastname: {
        type: "string"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        label: "Completed",
        scope: "#/properties/firstname"
      },
      {
        type: "Control",
        label: "Completed",
        scope: "#/properties/lastname",
      }
    ]
  }
}

const readonlyUischema = {
  schema: {
    properties: {
      firstname: {
        type: "string"
      },
      lastname: {
        type: "string"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/firstname",
        options: {
          readOnly: true
        }
      },
      {
        type: "Control",
        scope: "#/properties/lastname",
      }
    ]
  }
}

const readonlySchema = {
  schema: {
    properties: {
      firstname: {
        type: "string",
        readOnly: true
      },
      lastname: {
        type: "string"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/firstname"
      },
      {
        type: "Control",
        scope: "#/properties/lastname"
      }
    ]
  }
}

const readonlyRule = {
  schema: {
    properties: {
      firstname: {
        type: "string"
      },
      lastname: {
        type: "string"
      }
    }
  },
  uischema: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/firstname",
        rule: {
          effect: "DISABLE",
          condition: {
            scope: "#/properties/name",
            schema: {}
          }
        }
      },
      {
        type: "Control",
        scope: "#/properties/lastname"
      }
    ]
  }
}

export const ReadOnlyConfig = () => (
  <Demo
    data={data}
    schema={readonlyConfig.schema}
    uischema={readonlyConfig.uischema}
    readonly
  />
);

export const ReadOnlyUiSchema = () => (
  <Demo
    data={data}
    schema={readonlyUischema.schema}
    uischema={readonlyUischema.uischema}
  />
);

export const ReadOnlySchema = () => (
  <Demo
    data={data}
    schema={readonlySchema.schema}
    uischema={readonlySchema.uischema}
  />
);

export const ReadOnlyRule = () => (
  <Demo
    data={data}
    schema={readonlyRule.schema}
    uischema={readonlyRule.uischema}
  />
);
