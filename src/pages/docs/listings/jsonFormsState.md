export interface JsonFormsState {
  jsonforms: {
    common: {
      data: any;
      schema?: JsonSchema;
      uischema?: UISchemaElement;
    };
    validation?: ValidationState,
    // TODO: should we type these?    
    renderers?: any[];
    fields?: any[];
    // allow additional state for JSONForms
    [x: string]: any;
  };
}