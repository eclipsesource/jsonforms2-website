import React from 'react';
import ApiLink from "../../common/ApiLink";
import Typography from "@material-ui/core/Typography";
import DocPage from "./DocPage";

const APIs = () => (
  <DocPage>
    <Typography variant='h1'>
      API Documentation
    </Typography>
    <div className='grey-box'>
      <Typography variant='subtitle2' color='error'>
        ATTENTION
      </Typography>
      <Typography variant='body1'>
        Please note that we do not yet follow SemVer conventions yet as the the API of the
        WIP renderer sets is not considered stable yet.
      </Typography>
      <Typography variant='body1'>
        We'll switch versioning schemes starting with <strong>3.x.x</strong>.
      </Typography>
    </div>
    <Typography variant='body1'>
      This section provides links to the API documentation of all available JSON Forms modules.
    </Typography>
    <ul className='list'>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/core/'}>Core</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/react/'}>React integration</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/material/'}>React-based Material renderers</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/vanilla/'}>React-based vanilla renderers (WIP)</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/material-tree-renderer/'}>React-based Material tree renderer (WIP)</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/angular-material/'}>Angular-based Material renderers</ApiLink></Typography>
      </li>
      <li>
        <Typography variant='body1'><ApiLink link={'/api/ionic/'}>Angular-based Ionic renderers (WIP)</ApiLink></Typography>
      </li>
    </ul>
  </DocPage>
);

export default APIs;
