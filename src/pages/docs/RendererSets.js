import React from 'react';
import Typography from "@material-ui/core/Typography";
import DocPage from "./DocPage";

const RendererSets = () => (
  <DocPage>
    <Typography variant='h1'>
      Renderer Sets
    </Typography>
    <Typography variant='body1'>
      This section describes the two renderer sets which are available for react and some specifica about them.
    </Typography>
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