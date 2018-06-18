import React from 'react'
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { layout } from '@jsonforms/examples';
import Radium from 'radium';
import layouts from './listings/layouts'
import { MarkdownElement, commonStyles, PropHeader, ApiLink } from '../../common';

const styles = () => ({
  code: commonStyles.code,
  display1: commonStyles.display1,
  link: commonStyles.link,
  caption: commonStyles.caption,
  headline: commonStyles.headline,
  title: commonStyles.headline,
});

const RadiumLink = Radium(Link);
const RadiumHashLink = Radium(HashLink);

const Layouts = ({ classes }) => (
  <div>
    <Typography
      variant='display1'
      className={classes.display1}
    >
      Layouts
    </Typography>
    <p>
      <a href="/api/core/interfaces/layout.html" className={classes.link}>Layout</a> elements
      in the UI Schema contain other UI Schema elements
      like <RadiumLink to='/docs/uischema/controls' className={classes.link}>Controls</RadiumLink> or other layouts
      and serve the purpose of defining the layout of those, e.g. a layout could arrange all its contained
      UI Schema Elements into a horizontal alignment.
    </p>

    <PropHeader title='elements' type='UISchemaElement[]' link={'/api/core/interfaces/uischemaelement.html'}/>
    <p>
      All layouts need to declare an <code>elements</code> property which contains the children which are
      to be arranged by the layout. It is expected to be an array of UI Schema elements, e.g. controls
      or other layouts.
    </p>

    <PropHeader title='type' type='string'/>
    By default, JSON Forms supports four different kinds of layouts: <code>VerticalLayout</code>&nbsp;
    and <code>HorizontalLayout</code>, a slightly modified version of the vertical layout called <code>Group</code>,
    as well <code>Categorization</code>, which is often used to bundle related data, for instance by means of Tabs.
    Those four core layouts are detailed in the following.

    {/* HORIZONTAL LAYOUT */}
    <Typography variant='title' className={classes.title}>
      Horizontal Layout (<RadiumHashLink to={'/examples/layouts#horizontal-layout'} className={classes.link}>Demo</RadiumHashLink>)
    </Typography>
    <p>
      A <ApiLink link={'/api/core/interfaces/horizontallayout.html'}>Horizontal Layout</ApiLink> uses
      the <code>HorizontalLayout</code> type and arranges its contained <code>elements</code> in a
      horizontal fashion. Each child occupies the same amount of space, i.e. for n children a child occupies 1/n space.
    </p>
    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layout.uischemaHorizontal, null, 2)}\n\`\`\``}
    />
    <Typography
      variant={'caption'}
      className={classes.caption}
    >
      Example of a Horizontal Layout UI schema placing two controls side-by-side
    </Typography>

    {/* VERTICAL LAYOUT */}
    <Typography
      variant='title'
      className={classes.title}
      id='vertical-layout'
    >
      Vertical Layout (<RadiumHashLink to={'/examples/layouts#vertical-layout'} className={classes.link}>Demo</RadiumHashLink>)
    </Typography>
    <p>
      A <ApiLink link='/api/core/interfaces/verticallayout.html'>Vertical Layout</ApiLink> uses the <code>VerticalLayout</code> type and arranges its <code>elements</code> in a
      vertical fashion, i.e. all elements are placed beneath each other.
    </p>

    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layout.uischemaVertical, null, 2)}\n\`\`\``}
    />
    <Typography
      variant={'caption'}
      className={classes.caption}
    >
      Example of a Vertical Layout placing two controls vertically
    </Typography>

    {/* GROUP */}
    <Typography variant='title' className={classes.title}>
      Group (<RadiumHashLink to={'/examples/layouts#group-layout'} className={classes.link}>Demo</RadiumHashLink>)
    </Typography>
    <p>
      A <ApiLink link='/api/core/interfaces/grouplayout.html'>Group</ApiLink> is very similar to
      a <code>VerticalLayout</code> but features an additional mandatory <code>label</code> property
      that is used to describe the <code>elements</code>.
    </p>
    <PropHeader title='label' type='string'/>
    <p>
      The label property defines an additional string that is ought to describe the <code>elements</code> of
      the <code>Group</code>.
    </p>

    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layout.uischemaGroup, null, 2)}\n\`\`\``}
    />

    {/* CATEGORIZATION */}
    <Typography variant='headline'>
      Categorization
    </Typography>
    <p>
      A <ApiLink link='/api/core/interfaces/categorization.html'>Categorization</ApiLink> layout uses
      the <code>Categorization</code> type and can only contain <code>elements</code> of
      type <code>Category</code>. A <code>Category</code> itself acts as a container and has
      an <code>elements</code> of its own as well as a <code>label</code> that describes the contained data.
      Categorizations are typically used to structure controls with related data, e.g. 'Personal Data'
      and 'Dietary requirements' as demonstrated in example below.
    </p>

    <MarkdownElement
      dir="ltr"
      className={classes.code}
      text={`\`\`\`json\n${JSON.stringify(layouts.categorization, null, 2)}\n\`\`\``}
    />

    <p>
      In the example above note how each child within the <code>elements</code> is of type <code>Category</code>.
    </p>
  </div>
);

export default withStyles(styles)(Layouts);
