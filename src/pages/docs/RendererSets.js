import React from 'react';
import Typography from "@material-ui/core/Typography";
import DocPage from "./DocPage";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableHead from "@material-ui/core/TableHead/TableHead";
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";

const RendererSets = () => (
  <DocPage>
    <Typography variant='h1'>
      Renderer Sets
    </Typography>

    <Typography variant='body1'>
      This is an overview of all available renderer sets and what feature they support
    </Typography>

    <Typography variant='h2'>
      JSON Schema features
    </Typography>
    <Table>
      <TableHead>
        <TableCell>JSON Schema</TableCell>
        <TableCell>Renderer</TableCell>
        <TableCell>React Material</TableCell>
        <TableCell>Angular Material</TableCell>
        <TableCell>Ionic</TableCell>
        <TableCell>React Vanilla</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>boolean</TableCell>
          <TableCell>Checkbox</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Toggle</TableCell>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>integer</TableCell>
          <TableCell>Number</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported' />
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Text</TableCell>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>String</TableCell>
          <TableCell>Text</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Textarea</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Enum</TableCell>
          <TableCell>Combo</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell/>
          <TableCell>Autocomplete</TableCell>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Date format</TableCell>
          <TableCell>Date field</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Time format</TableCell>
          <TableCell>Time field</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Datetime format</TableCell>
          <TableCell>Datetime field</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Object</TableCell>
          <TableCell>Vertical grid</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Array of primitives</TableCell>
          <TableCell>List</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Array of objects</TableCell>
          <TableCell>Table</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>List with Detail</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>oneOf</TableCell>
          <TableCell>Tabs</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>allOf</TableCell>
          <TableCell>Tabs</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
        <TableRow>
          <TableCell>anyOf</TableCell>
          <TableCell>Tabs</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
          <TableCell className='renderer-sets__table__not-supported'/>
        </TableRow>
      </TableBody>
    </Table>

    <Typography variant='h2'>
      UI Schema features
    </Typography>
    <Table>
      <TableHead>
        <TableCell>UI Schema</TableCell>
        <TableCell>Renderer</TableCell>
        <TableCell>React Material</TableCell>
        <TableCell>Angular Material</TableCell>
        <TableCell>Ionic</TableCell>
        <TableCell>React Vanilla</TableCell>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Vertical Layout</TableCell>
          <TableCell>Vertical Grid</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Horizontal Layout</TableCell>
          <TableCell>Horizontal Grid</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Categorization</TableCell>
          <TableCell>Tabs</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Group</TableCell>
          <TableCell>Group</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Text</TableCell>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
          <TableCell className='renderer-sets__table__supported'/>
        </TableRow>
      </TableBody>
    </Table>

    <Typography variant='h2'>
      Material Renderer Set
    </Typography>
    <Typography variant='body1'>
      The Material Renderer Set is based on <a href="https://material-ui.com/"className='link'>Material UI</a>.
      So if you want to implement your own renderers and use them with the Material Renderer Set we recommend to use Material UI.
    </Typography>

    <Typography variant='h2'>
      Vanilla Renderer Set
    </Typography>
    <Typography variant='body1'>
      The Vanilla Renderer Set is based on plain HTML with a set of custom styles.
    </Typography>
    <Typography variant='h3'>
      Styling/Customization
    </Typography>
    <Typography variant='body1'>
      You can define the classes to be set by providing styles to the store:
    </Typography>
    <pre className='code-listing'>
        <code className='language-javascript'>
          {`
          import { combineReducers, createStore } from 'redux';
          import { jsonformsReducer } from '@jsonforms/core';
          import { stylingReducer, vanillaFields, vanillaRenderers, vanillaStyles } from '@jsonforms/vanilla-renderers';

          const store = createStore(
            combineReducers({ jsonforms: jsonformsReducer({ styles: stylingReducer }) }),
            {
              jsonforms: {
                fields: vanillaFields,
                renderers: vanillaRenderers,
                styles: vanillaStyles,
              },
            }
          );
          ...
          `}
        </code>
      </pre>
    <Typography variant='body1'>
      The styles are simple objects with a <code>name</code> and an array of <code>classNames</code> to apply. You can also provide a function as <code>classNames</code> which allows you to return dynamic classNames.<br/>
      Here is an example:
    </Typography>
    <pre className='code-listing'>
        <code className='language-javascript'>
          {`export const vanillaStyles = [{
  name: 'horizontal.layout',
  classNames: ['horizontal-layout']
}, {
  name: 'horizontal.layout.item',
  classNames: numberOfChildren => ['horizontal-layout' + numberOfChildren[0]]
}];
`}
        </code>
      </pre>

    <Typography variant='body1'>
      Inside a renderer you can retrieve the styling using <code>getStyleAsClassName</code> and <code>getStyle</code>.
      The difference is that <code>getStyleAsClassName</code> returns a string where as <code>getStyle</code> returns an array of strings.
      <br/>
      Here is an example:
    </Typography>

    <pre className='code-listing'>
        <code className='language-javascript'>
          {`const HorizontalLayoutRenderer = (props: VanillaLayoutProps) => {
  const { uischema, getStyle, getStyleAsClassName } = props;
  const horizontalLayout = uischema as HorizontalLayout;
  const elementsSize = horizontalLayout.elements ? horizontalLayout.elements.length : 0;
  const layoutClassName = getStyleAsClassName('horizontal.layout');
  const childClassNames = getStyle('horizontal.layout.item', elementsSize).join(' ');
// ...
};`}
        </code>
      </pre>

    <Typography variant='body1'>
      You can find all predefined style constants in <a href="https://github.com/eclipsesource/jsonforms/blob/master/packages/vanilla/Styles.md" className='link'>this list</a>.
    </Typography>
  </DocPage>
);

export default RendererSets;