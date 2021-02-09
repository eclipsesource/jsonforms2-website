/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import { Link } from 'docz'

import * as styles from './styles'
import { Menu } from 'react-feather/dist/icons/menu'
import { Logo } from '../Logo'

export const Header = props => {
  const { onOpen } = props

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Logo />
        <div >
          <Link to="/" className={styles.logo__icon}>
            <Logo width={45} height={30} color="#fff" alt="JSON Forms Logo" />
          </Link>
          &nbsp;
          <Link to="/" className={styles.logo__title}>
            <Typography variant="body1" color="inherit">
              JSON Forms
            </Typography>
          </Link>
          <Link to="/examples/array" className={globalStyles.nav__link}>
            Examples
          </Link>
          <Link to="/docs/what-is-jsonforms" className={globalStyles.nav__link}>
            Docs
          </Link>
          <Link to="/faq" className={globalStyles.nav__link}>
            FAQ
          </Link>
          <Link to="/news" className={globalStyles.nav__link}>
            News
          </Link>
          <Link
            to="/support"
            className={[
              globalStyles.nav__link,
              globalStyles.navbar__support_link
            ].join(" ")}
          >
            Professional Support
          </Link>
        </div>
      </div>
    </div>
  )
}