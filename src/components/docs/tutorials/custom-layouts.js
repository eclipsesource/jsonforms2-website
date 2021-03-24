import React from 'react';
import { MaterialLayoutRenderer, materialRenderers } from '@jsonforms/material-renderers';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { rankWith, uiTypeIs } from '@jsonforms/core';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Hidden,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Demo } from '../../common';

const GroupRenderer = (props) => {
  const { uischema, schema, path, visible, renderers } = props;

  const layoutProps = {
    elements: uischema.elements,
    schema: schema,
    path: path,
    direction: 'column',
    visible: visible,
    uischema: uischema,
    renderers: renderers,
  };
  return (
    <Hidden xsUp={!visible}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{uischema.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLayoutRenderer {...layoutProps} />
        </AccordionDetails>
      </Accordion>
    </Hidden>
  );
};

const myGroupRenderer = withJsonFormsLayoutProps(GroupRenderer);

const myGroupTester = rankWith(1000, uiTypeIs('Group'));

const groupData = {
  name: 'John Doe',
};

const groupSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
  },
};

const groupUiSchema = {
  type: 'Group',
  label: 'My Group!',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/name',
    },
  ],
};

export const Default = () => (
  <Demo data={groupData} schema={groupSchema} uischema={groupUiSchema} />
);

export const WithCustomRenderer = () => (
  <Demo
    data={groupData}
    schema={groupSchema}
    uischema={groupUiSchema}
    renderers={[
      ...materialRenderers,
      { tester: myGroupTester, renderer: myGroupRenderer },
    ]}
  />
);
