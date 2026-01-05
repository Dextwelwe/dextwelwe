import bs from './BoxSection.module.css'

export default function BoxSection({title, items}) {
  return (
    <section className={['abtWrapper', bs.wrapper].join(" ")}>
      <header className='abtTitle'>
      <h1>{title}</h1>
      </header>
      <ul className={bs.stackList}>
      {items.map((item, index) => (
        <li key={index} className={bs.item}>{item}</li>
      ))}
    </ul>
    </section>
  )
}
