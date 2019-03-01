import Navigation from './components/Navigation';
import { VerticalLockup } from './components/Logo';

import './Header.scss';

const Header = () => {
  const fakeMenu = [
    {
      label: 'Highlights',
      target: '/',
      children: [
        {
          label: 'One',
          target: '/'
        },
        {
          label: 'Two',
          target: '/'
        }
      ]
    },
    {
      label: 'Favorites',
      target: '/'
    },
    {
      label: 'Fine Art Film',
      target: '/'
    },
    {
      label: 'Videography',
      target: '/'
    },
    {
      label: 'About',
      target: '/'
    }
  ];

  return(
    <div className="header">
      <Navigation
        menuItems={fakeMenu}
      />
      <VerticalLockup />
    </div>
  )
}

export default Header;