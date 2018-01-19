import React from 'react';
import BuildIcon from 'material-ui-icons/Build';

const UnderConstruction = () => (
  <div>
    <div style={{
      backgroundColor: '#FFAB40',
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <BuildIcon style={{ width: '80px', height: 'auto', color: '#E65100' }} />
      <div>
        It's WIP, dude
      </div>
    </div>
  </div>
);

export default UnderConstruction;