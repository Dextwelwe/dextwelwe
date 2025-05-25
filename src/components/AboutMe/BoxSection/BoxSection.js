import bs from './BoxSection.module.css'

export default function BoxSection({title, items}) {
  return (
    <div className='abtWrapper'>
      <h1 className='abtTitle'>{title}</h1>
      <ul className={bs.stackList}>
      {items.map((item, index) => (
        <li key={index} className={bs.item}>{item}</li>
      ))}
    </ul>
    </div>
  )
}
