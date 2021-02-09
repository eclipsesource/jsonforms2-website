import React, { useEffect, useState } from 'react';
import IconButton from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import DataIcon from '@material-ui/icons/Code';
import SchemaIcon from '@material-ui/icons/Description';
import UiSchemaIcon from '@material-ui/icons/ViewQuilt';
import { JsonForms } from '@jsonforms/react';
import { createStyles, makeStyles } from '@material-ui/core';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import styles from '../../styles/global.module.css';
//
// Based on https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/modules/components/Demo.js
//
const useStyles = makeStyles((theme) =>
  createStyles({
    darkGrey: {
      color: 'rgba(45, 55, 71, 0.7)',
    },
    root: {
      position: 'relative',
      width: '40vw'
    },
    code: {
      padding: 0,
      margin: 0,
      '& pre': {
        overflow: 'auto',
        margin: '0px !important',
        borderRadius: '0px !important',
      },
    }
  })
);

const Demo = (props) => {
  const { data: inputData, schema, uischema, className, id } = props;
  const [data, setData] = useState(inputData);
  const [dataOpen, setDataOpen] = useState(false);
  const [schemaOpen, setSchemaOpen] = useState(false);
  const [uischemaOpen, setUischemaOpen] = useState(false);

  const dataAsString = JSON.stringify(data, null, 2);
  const schemaAsString = JSON.stringify(schema, null, 2);
  const uiSchemaAsString = JSON.stringify(uischema, null, 2);

  useEffect(() => {
  }, [dataOpen, schemaOpen, uischemaOpen]);

  const handleClickOpenSchema = () => {
    setDataOpen(false);
    setSchemaOpen((open) => !open);
    setUischemaOpen(false);
  };

  const handleClickOpenUiSchema = () => {
    setDataOpen(false);
    setSchemaOpen(false);
    setUischemaOpen((open) => !open);
  };

  const handleClickOpenData = () => {
    setDataOpen((open) => !open);
    setSchemaOpen(false);
    setUischemaOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={`${classes.root} ${className}`} id={id}>
      <div className={styles.demo__button_bar}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Tooltip
            title={schemaOpen ? 'Hide schema' : 'Show schema'}
            placement='top'
          >
            <IconButton
              onClick={() => handleClickOpenSchema()}
              className={classes.schemaButton}
            >
              <SchemaIcon className={classes.darkGrey} />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={uischemaOpen ? 'Hide UI schema' : 'Show UI schema'}
            placement='top'
          >
            <IconButton
              onClick={() => handleClickOpenUiSchema()}
              className={classes.uischemaButton}
            >
              <UiSchemaIcon className={classes.darkGrey} />
            </IconButton>
          </Tooltip>
          <Tooltip title={dataOpen ? 'Hide data' : 'Show data'} placement='top'>
            <IconButton
              onClick={() => handleClickOpenData()}
              className={classes.data}
            >
              <DataIcon className={classes.darkGrey} />
            </IconButton>
          </Tooltip>
        </div>
      </div>

      <Collapse in={schemaOpen} unmountOnExit>
        <pre style={{ maxWidth: '80vw', backgroundColor: '#fff' }}>
          <code className='language-json'>{schemaAsString}</code>
        </pre>
      </Collapse>

      <Collapse in={uischemaOpen} unmountOnExit>
        <pre style={{ maxWidth: '80vw', backgroundColor: '#fff' }}>
          <code className='language-json'>{uiSchemaAsString}</code>
        </pre>
      </Collapse>

      <Collapse in={dataOpen} unmountOnExit>
        <pre style={{ maxWidth: '80vw', backgroundColor: '#fff' }}>
          <code className='language-json'>{dataAsString}</code>
        </pre>
      </Collapse>

      <div className={classes.demo}>
        <JsonForms
          renderers={materialRenderers}
          cells={materialCells}
          onChange={({ data }) => setData(data)}
          {...props}
        />
      </div>
    </div>
  );
};

export default Demo;
