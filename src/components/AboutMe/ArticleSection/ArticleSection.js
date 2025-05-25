import int from './ArticleSection.module.css'
export default function ArticleSection({title, desc}) {
  
  return (
    <article className={['abtWrapper', int.wrapper].join(" ")}>
      <h1 className='abtTitle'>{title}</h1>
      <p className={int.desc}>{desc}</p>
    </article>
  )
}
