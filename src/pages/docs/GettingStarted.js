import React from 'react';
import Typography from "@material-ui/core/Typography";
import {RadiumLink} from "../../common";
import DocPage from "./DocPage";

const GettingStarted = () => (
  <DocPage>
    <Typography variant={'h1'}>
      Getting started
    </Typography>
    <Typography variant='body1'>
      This section describes how you can get quickly started with JSON Forms.
    </Typography>
    <ol className='list'>
      <li>
        <Typography variant={"body1"}>
          Clone the <a href="https://github.com/eclipsesource/jsonforms-react-seed"
                       className='link'>seed</a> app with:
        </Typography>
        <pre className='code-listing'>
          <code className='language-bash'>
            git clone https://github.com/eclipsesource/jsonforms-react-seed.git
          </code>
        </pre>
      </li>
      <li>
        <Typography variant={"body1"}>
          Install dependencies with:
        </Typography>
        <pre className='code-listing'>
          <code className='language-bash'>
            npm install
          </code>
        </pre>
      </li>
      <li>
        <Typography variant={"body1"}>
          Run the app with:
        </Typography>
        <pre className='code-listing'>
          <code className='language-bash'>
            npm run start
          </code>
        </pre>
      </li>
    </ol>
    <Typography variant='body1'>
      For more info about the seed app, please see the corresponding README file of the
      the <a href="https://github.com/eclipsesource/jsonforms-react-seed" className='link'>seed repo</a>.
    </Typography>
    <Typography variant='body1'>
      For a more detailed tutorial about the usage of JSON Forms, please
      see <RadiumLink to='/docs/tutorial' className='link'>our tutorial</RadiumLink>.
    </Typography>
  </DocPage>
);

export default GettingStarted;
