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
        scope: "#/properties/foo"
      },
      {
        type: "Control",
        scope: "#/properties/bar"
      }
    ]
  },
  group: {
    type: 'Group',
    label: 'Stuff I like',
    elements: [
      {
        type: "Control",
        scope: "#/properties/foo"
      },
      {
        type: "Control",
        scope: "#/properties/bar"
      }
    ]
  },
  horizontalLayout: {
    type: "HorizontalLayout",
    elements: [
      {
        type: "Control",
        scope: "#/properties/foo"
      },
      {
        type: "Control",
        scope: "#/properties/bar"
      }
    ]
  },
  categorization: {
    type: "Categorization",
    elements: [
      {
        type: "Category",
        label: "Personal Data",
        elements: [
          {
            type: "Control",
            scope: "#/properties/firstName"
          },
          {
            type: "Control",
            scope: "#/properties/lastName"
          },
          {
            type: "Control",
            scope: "#/properties/age"
          },
          {
            type: "Control",
            scope: "#/properties/height"
          },
          {
            type: "Control",
            scope: "#/properties/dateOfBirth"
          }
        ]
      },
      {
        type: "Category",
        label: "Dietary requirements",
        elements: [
          {
            type: "Control",
            scope: "#/properties/diet"
          },
          {
            type: "Control",
            scope: "allergicToPeanuts"
          }
        ]
      }
    ]
  }
}