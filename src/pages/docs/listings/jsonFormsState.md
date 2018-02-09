export interface JsonFormsState {
  jsonforms: {
    core: {
      data: any;
      schema?: JsonSchema;
      uischema?: UISchemaElement;
      validation?: ValidationState,
    };
    // TODO: should we type these?    
    renderers?: any[];
    fields?: any[];
    // allow additional state for JSONForms
    [additionalState: string]: any;
  };
}