import React from 'react';
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import MarkdownElement from "../../common/MarkdownElement";
import commonStyles from "../../common/styles";

const styles = () => ({
  link: commonStyles.link,
  list: commonStyles.list,
  code: commonStyles.code,
  display1: commonStyles.display1,
});

const RendererSets = ({ classes }) => {

  return (
    <div>
      <Typography
        variant={'display1'}
        className={classes.display1}
      >
        Renderer Sets
      </Typography>
      <p>
        This section describes the two renderer sets which are available for react and some specifica about them.
      </p>
      <Typography variant='title' className={classes.title}>
        Material Renderer Set
      </Typography>
      <p>
        The Material Renderer Set is based on <a href="https://material-ui.com/"className={classes.link}>Material UI</a>.
        So if you want to implement your own renderers and use them with the Material Renderer Set we recommend to use Material UI.
      </p>
      <Typography variant='title' className={classes.title}>
        Vanilla Renderer Set
      </Typography>
      <p>
        The Vanilla Renderer Set is based on plain HTML with a set of custom styles.
      </p>
      <Typography variant='headline' className={classes.headline}>
        Styling / Customization
      </Typography>
      <p>
        You can define the classes to be set by providing styles to the store:
        <MarkdownElement
          dir="ltr"
          className={classes.code}
          text={`\`\`\`jsx\n
          ...
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
          \n\`\`\``}
        />
      </p>
      <p>
        The styles are simple objects with a ;<code>name</code> and an array of <code>classNames</code> to apply. You can also provide a function as <code>classNames</code> which allows you to return dynamic classNames.<br/>
        Here is an example:
        <MarkdownElement
          dir="ltr"
          className={classes.code}
          text={`\`\`\`jsx\n
          export const vanillaStyles = [
            {
              name: 'horizontal.layout',
              classNames: ['horizontal-layout']
            },
            {
              name: 'horizontal.layout.item',
              classNames: numberOfChildren => ['horizontal-layout' + numberOfChildren[0]]
            }
          ];
          \n\`\`\``}
        />
      </p>
      <p>
        Inside a renderer you can retrieve the styling using <code>getStyleAsClassName</code> and <code>getStyle</code>.
        The difference is that <code>getStyleAsClassName</code> returns a string where as <code>getStyle</code> returns an array of strings.
        <br/>
        Here is an example:
        <MarkdownElement
          dir="ltr"
          className={classes.code}
          text={`\`\`\`jsx\n
          ...
          const HorizontalLayoutRenderer = (props: VanillaLayoutProps) => {
            const {uischema, getStyle, getStyleAsClassName} = props;
          
            const horizontalLayout = uischema as HorizontalLayout;
            const elementsSize = horizontalLayout.elements ? horizontalLayout.elements.length : 0;
            const layoutClassName = getStyleAsClassName('horizontal.layout');
            const childClassNames = getStyle('horizontal.layout.item', elementsSize).join(' ');
            ...
          };
          ...
          \n\`\`\``}
        />
      </p>
      <p>
        You can find all predefined style constants in <a href="https://github.com/eclipsesource/jsonforms/blob/master/packages/vanilla/Styles.md" className={classes.link}>this list</a>.
      </p>
    </div>
  );
};

export default withStyles(styles)(RendererSets);