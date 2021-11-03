import React, { FC } from 'react';

// interface defines acceptible prop types
import { layoutProps } from '../../types/types';

// components that should appear on every page
import LeftNavBar from './LeftNavBar';
import PickleImage from './PickleImage';
import Feed from './Feed';

// This component contains the left nav bar and footer
const Layout: FC<layoutProps> = ({ children }) => {
  return (
      <div className='layout'>
        <div className='layout_leftNavBar'>
            <LeftNavBar />
        </div>
        <main className='layout_main'>
          <PickleImage />
          {children}
        </main>
      </div>
  )
}

export default Layout;