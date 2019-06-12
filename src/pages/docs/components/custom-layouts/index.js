import React from 'react';
import { registerRenderer } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import { createJsonFormsStore } from "../../../../common/store";
import { Demo, myGroupTester, MyGroupRenderer } from "../../../../components/common";
import { Provider } from "react-redux";

const groupData = {
  name: 'John Doe',
};

const groupSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    }
  }
};

const groupUiSchema = {
    type:'Group',
    label:'My Group!',
    elements: [
        {
          type: 'Control',
          scope: '#/properties/name'
        }
    ]
};


const storeWithRatingControlExample = createJsonFormsStore({
  data: groupData,
  schema: groupSchema,
  uischema: groupUiSchema
});

const store = createJsonFormsStore({
  data: groupData,
  schema: groupSchema,
  uischema: groupUiSchema
});

export const Default = () => (
         <Provider store={store}>
           <Demo
             js={() => <JsonForms />}
             schema={groupSchema}
             uischema={groupUiSchema}
           />
         </Provider>
       );

export const WithCustomRenderer = () => (
  <Provider store={storeWithRatingControlExample}>
    <Demo
      js={() => {
        storeWithRatingControlExample.dispatch(
          registerRenderer(myGroupTester, MyGroupRenderer)
        );
        return <JsonForms />;
      }}
      schema={groupSchema}
      uischema={groupUiSchema}
    />
  </Provider>
);