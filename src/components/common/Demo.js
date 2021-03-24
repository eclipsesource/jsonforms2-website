import React, { useState } from 'react';
import clsx from 'clsx';
import { JsonForms } from '@jsonforms/react';
import { createStyles, createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Highlight, { defaultProps } from "prism-react-renderer";
import usePrismTheme from '@theme/hooks/usePrismTheme';

//
// Based on https://github.com/mui-org/material-ui/blob/v1-beta/docs/src/modules/components/Demo.js
//
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: '#000',
      marginBottom: 20,
      margin: 'auto',
      [theme.breakpoints.up('sm')]: {
        padding: `0 ${theme.spacing(1)}px`
      },
    },
    tabs: {
      "& li:first-child": {
        marginRight: "auto"
      }
    },
    demoTab: {
      borderRadius: "4px",
      padding: "16px",
      border: "1px solid #eee"
    },
  })
);

const theme = createMuiTheme({
  overrides: {
    MuiFormControl: {
      root: {
        margin: '0.8em 0',
      },
    },
  },
});

const Code = (props) => {
  let content = props.children;
  if(content === undefined) {
    content = {};
  }
  const code = JSON.stringify(content, null, 2).replace(/\n$/, '');
  const prismTheme = usePrismTheme();
  return (
    <Highlight {...defaultProps} code={code} language="json" theme={prismTheme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export const Demo = (props) => {
  const { data: inputData, schema, uischema, id } = props;
  const [data, setData] = useState(inputData);

  const classes = useStyles();
  return (
    <div className={classes.root} id={id}>
      <Tabs
        defaultValue="demo"
        values={[
          {label: 'Demo', value: 'demo'},
          {label: 'Schema', value: 'schema'},
          {label: 'UI Schema', value: 'uischema'},
          {label: 'Data', value: 'data'},
        ]}
        className={classes.tabs}>
        <TabItem value="demo" className={clsx('demoTab', classes.demoTab)}>
          <ThemeProvider theme={theme}>
            <JsonForms
              renderers={materialRenderers}
              cells={materialCells}
              onChange={({ data }) => setData(data)}
              {...props}
            />
          </ThemeProvider>
        </TabItem>
        <TabItem value="schema">
          <Code>{schema}</Code>
        </TabItem>
        <TabItem value="uischema">
          <Code>{uischema}</Code>
        </TabItem>
        <TabItem value="data">
          <Code>{data}</Code>
        </TabItem>
      </Tabs>
    </div>
  );
};

export default Demo;
