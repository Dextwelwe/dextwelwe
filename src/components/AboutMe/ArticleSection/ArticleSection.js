import int from './ArticleSection.module.css'
import React from 'react';

 const ArticleSection = React.forwardRef(({title, desc, bulletPointsArr=[]},ref)=> (
    <article ref={ref} className={['abtWrapper', int.wrapper].join(" ")}>
      <header className='abtTitle'>
        <h1>{title}</h1>
      </header>
      {desc &&<p className={int.desc}>{desc}</p>}
      {bulletPointsArr.length > 0 && (
      <ul  className={int.bulletPoints}>
        {bulletPointsArr.map((item, index) => (
          <li className={int.bulletItem} key={index}>{item}</li>
        ))}
      </ul>
      )}
    </article>
 ))

export default ArticleSection;
