import './Hero.scss';

const Hero = () => {
  const bgImage = '/static/images/hero.webp';
  const imageStyle = {
    backgroundImage: `url('${bgImage}')`
  }
  return (
    <div className="hero">
      <div className="hero__image" style={imageStyle}></div>
      <div className="hero__content">
        <h1>Dynamic Storytelling Imagery</h1>
        <hr className="spacer" />
        <p>Your day deserves more than a series of pictures. It deserves moments captured and woven together by visual art to create memories that last lifetimes.</p>
      </div>
    </div>
  )
}

export default Hero;