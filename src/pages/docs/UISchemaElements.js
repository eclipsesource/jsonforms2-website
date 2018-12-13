import React from 'react';
import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import DocPage from "./DocPage";

const UiSchemaElements = () => (
  <DocPage>
    <Typography variant='h1'>
      UI Schema Elements
    </Typography>
    <Typography variant='body1'>
      The UI schema, which is passed to JSON Forms,
      describes the general layout of a form and is just a regular JSON object.
      It describes the form by means of different UI schema elements, which can often categorized
      into either Controls or Layouts.
    </Typography>

    <div className='grey-box'>
      <Typography variant='subtitle2' color='error'>
        ATTENTION
      </Typography>
      <Typography variant='body1'>
        Please note that the UI schema hasn't been finalized yet!
        We'll try keep changes to a minimum and only do them if it's an substantial improvement to the framework.
      </Typography>
      <Typography variant='body1'>Thanks for your understanding!</Typography>
    </div>

    <Typography variant='h2'>
      Available elements
    </Typography>

    <ul className='bullet-list'>
      <li>
        <Typography variant='body1'><Link to='/docs/uischema/controls' className='link'>Controls</Link></Typography>
      </li>
      <li>
        <Typography variant='body1'><Link to='/docs/uischema/layouts' className='link'>Layout</Link></Typography>
      </li>
      <li>
        <Typography variant='body1'><Link to='/docs/uischema/rules' className='link'>Rules</Link></Typography>
      </li>
    </ul>
  </DocPage>
);

export default UiSchemaElements;
