import Link from 'next/link';
import './Logo.scss';

export const VerticalLockup = () => {
  const logoImg = '/static/images/logo.jpg';
  const logoStyle = {
    backgroundImage: `url('${logoImg}')`
  }
  return (
    <Link href="/">
      <div className="logo">
        <h1>Love By Danielle</h1>
      </div>
    </Link>
  )
}