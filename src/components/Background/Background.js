import bg from './Background.module.css';

export default function Background({ imgSrc }) {
  return (
    <div
      className={bg.bgFixed}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 1)), url(${imgSrc})`
      }}
    />
  );
}
