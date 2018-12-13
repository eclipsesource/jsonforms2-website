import React from 'react'
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link'
import Typography from "@material-ui/core/Typography";
import {layout} from '@jsonforms/examples';
import Radium from 'radium';
import layouts from './listings/layouts'
import {ApiLink, PropHeader} from '../../common';
import DocPage from "./DocPage";

const RadiumLink = Radium(Link);
const RadiumHashLink = Radium(HashLink);

const Layouts = () => (
  <DocPage>
    <Typography variant='h1'>
      Layouts
    </Typography>
    <Typography variant='body1'>
      <a href="/api/core/interfaces/layout.html" className='link'>Layout</a> elements
      in the UI Schema contain other UI Schema elements
      like <RadiumLink to='/docs/uischema/controls' className='link'>Controls</RadiumLink> or other layouts
      and serve the purpose of defining the layout of those, e.g. a layout could arrange all its contained
      UI Schema Elements into a horizontal alignment.
    </Typography>

    <PropHeader title='elements' type='UISchemaElement[]' link={'/api/core/interfaces/uischemaelement.html'}/>
    <Typography variant='body1'>
      All layouts need to declare an <code>elements</code> property which contains the children which are
      to be arranged by the layout. It is expected to be an array of UI Schema elements, e.g. controls
      or other layouts.
    </Typography>

    <PropHeader title='type' type='string'/>
    <Typography variant='body1'>
      By default, JSON Forms supports four different kinds of layouts: <code>VerticalLayout</code>&nbsp;
      and <code>HorizontalLayout</code>, a slightly modified version of the vertical layout called <code>Group</code>,
      as well <code>Categorization</code>, which is often used to bundle related data, for instance by means of Tabs.
      Those four core layouts are detailed in the following.
    </Typography>

    {/* HORIZONTAL LAYOUT */}
    <Typography variant='h2'>
      Horizontal Layout (<RadiumHashLink to={'/examples/layouts#horizontal-layout'} className='link'>Demo</RadiumHashLink>)
    </Typography>
    <Typography variant='body1'>
      A <ApiLink link={'/api/core/interfaces/horizontallayout.html'}>Horizontal Layout</ApiLink> uses
      the <code>HorizontalLayout</code> type and arranges its contained <code>elements</code> in a
      horizontal fashion. Each child occupies the same amount of space, i.e. for n children a child occupies 1/n space.
    </Typography>
    <Typography
      variant='caption'
      className='caption'
    >
      Example of a Horizontal Layout UI schema placing two controls side-by-side
    </Typography>
    <pre className='code-listing'>
      <code className='language-json'>
        {JSON.stringify(layout.uischemaHorizontal, null, 2)}
      </code>
    </pre>


    {/* VERTICAL LAYOUT */}
    <Typography
      variant='h2'
      id='vertical-layout'
    >
      Vertical Layout (<RadiumHashLink to={'/examples/layouts#vertical-layout'} className='link'>Demo</RadiumHashLink>)
    </Typography>
    <p>
      A <ApiLink link='/api/core/interfaces/verticallayout.html'>Vertical Layout</ApiLink> uses the <code>VerticalLayout</code> type and arranges its <code>elements</code> in a
      vertical fashion, i.e. all elements are placed beneath each other.
    </p>

    <pre className='code-listing'>
      <code className=''>
      </code>
    </pre>
    <Typography
      variant={'caption'}
      className='caption'
    >
      Example of a Vertical Layout placing two controls vertically
    </Typography>

    {/* GROUP */}
    <Typography variant='h2'>
      Group (<RadiumHashLink to={'/examples/layouts#group-layout'} className='link'>Demo</RadiumHashLink>)
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

    <pre className='code-listing'>
      <code className='language-json'>
        {JSON.stringify(layout.uischemaGroup, null, 2)}
      </code>
    </pre>

    {/* CATEGORIZATION */}
    <Typography variant='h2'>
      Categorization
    </Typography>
    <Typography variant='body1'>
      A <ApiLink link='/api/core/interfaces/categorization.html'>Categorization</ApiLink> layout uses
      the <code>Categorization</code> type and can only contain <code>elements</code> of
      type <code>Category</code>. A <code>Category</code> itself acts as a container and has
      an <code>elements</code> of its own as well as a <code>label</code> that describes the contained data.
      Categorizations are typically used to structure controls with related data, e.g. 'Personal Data'
      and 'Dietary requirements' as demonstrated in example below.
    </Typography>

    <pre className='code-listing'>
      <code className='language-json'>
        {JSON.stringify(layouts.categorization, null, 2)}
      </code>
    </pre>
    <Typography variant='body1'>
      In the example above note how each child within the <code>elements</code> is of type <code>Category</code>.
    </Typography>
  </DocPage>
);

export default Layouts;
