import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { array } from '@jsonforms/examples';
import Demo from '../common/Demo';
import styles from '../../styles/global.module.css';

const Array = () => {
  const theme = createMuiTheme({
    overrides: {
      MuiSelect: {
        select: {
          minWidth: 200,
        }
      }
    }
  });

  const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        scope: '#/properties/comments',
      },
    ],
  };

  return (
    <div className={styles.example}>
      <ThemeProvider theme={theme}>
        <Demo
          id='array-demo'
          className={styles.examples__array}
          schema={array.schema}
          uischema={uischema}
          data={array.data}
          style={{
            padding: 0,
          }}
        />
      </ThemeProvider>
      <div className={styles.examples__array_note}>
        Our current array renderer is not supported on mobile, sorry.
      </div>
    </div>
  );
};

export default Array;
