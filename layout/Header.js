import Navigation from './components/Navigation';
import Link from 'next/link';

import './Header.scss';

const Logo = () => (
  <div className="logo">
    <Link href="/">
      <h1>LOVE by DANIELLE</h1>
    </Link>
  </div>
)

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
      <Logo />
    </div>
  )
}

export default Header;