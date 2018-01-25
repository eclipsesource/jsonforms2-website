export default {
  grid: {
    paddingTop: '0em',
  },
  link: {
    color: 'rgb(17, 179, 187)',
    textDecoration: 'none',
  },
  code: theme => ({
    display: 'none',
    padding: 0,
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& pre': {
      overflow: 'auto',
      margin: '0px !important',
      borderRadius: '0px !important',
    },
  }),
  mainSection: {
    lineHeight: '1.7',
    marginBottom: '1em',
  },
  sidebar: {
    backgroundColor: '#E0E0E0',
    padding: '0.5em',
    lineHeight: '1.7',
  },
  sidebarLinks: {
    listStyleType: 'none',
    paddingTop: 0,
    paddingBottom: 0,
  },
  list: {
    paddingLeft: '1em',
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  display1: {
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
  },
  headline: {
    marginTop: '0.5em'
  },
  title: {
    marginTop: '0.5em'
  },
  caption: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-1em',
    marginBottom: '0.5em'
  }
}