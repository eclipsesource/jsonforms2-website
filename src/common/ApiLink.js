import React from 'react';

const ApiLink = ({ link, children }) => (
  <a href={link} className='link'>{children}</a>
);

export default ApiLink;