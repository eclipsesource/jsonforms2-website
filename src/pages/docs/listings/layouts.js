export default {
  data: { foo: 'green is my favorite color' },
  schema: {
    properties: {
      foo: { type: "string" },
      bar: { type: "string" }
    }
  },
  verticalLayout: {
    type: "VerticalLayout",
    elements: [
      {
        type: "Control",
        scope: {
          $ref: "#/properties/foo"
        }
      },
      {
        type: "Control",
        scope: {
          $ref: "#/properties/bar"
        }
      }
    ]
  },
  group: {
    type: 'Group',
    label: 'Stuff I like',
    elements: [
      {
        type: "Control",
        scope: {
          $ref: "#/properties/foo"
        }
      },
      {
        type: "Control",
        scope: {
          $ref: "#/properties/bar"
        }
      }
    ]
  },
  horizontalLayout: {
    type: "HorizontalLayout",
    elements: [
      {
        type: "Control",
        scope: {
          $ref: "#/properties/foo"
        }
      },
      {
        type: "Control",
        scope: {
          $ref: "#/properties/bar"
        }
      }
    ]
  },
  categorization: {
    type: "Categorization",
    elements: [
      {
        type: "Category",
        label: "Colors",
        elements: [
          {
            type: "Control",
            scope: {
              $ref: "#/properties/foo"
            }
          }
        ]
      },
      {
        type: "Category",
        label: "Chocolate bars",
        elements: [
          {
            type: "Control",
            scope: {
              $ref: "#/properties/bar"
            }
          }
        ]
      }
    ]
  }
}