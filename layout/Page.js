import Meta from './Meta.js';
import Header from './Header.js';
import Footer from './Footer.js';

import './Page.scss';

export default ({ children }) => (
  <div className="main">
    <Meta />
    <Header />
    <div className="page">
      { children }
    </div>
    <Footer />
  </div>
);