import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom';
import Radium from 'radium';

import commonStyles from './styles';
import Demo from './Demo';
import PropHeader from './PropHeader';
import ApiLink from './ApiLink';
import Logo from './Logo';
import Links from './Links';

export { Links };
export { Demo };
export { commonStyles };
export { PropHeader };
export { ApiLink }
export { Logo };

export const RadiumLink = Radium(Link);
export const RadiumHashLink = Radium(HashLink);
