import int from './ArticleSection.module.css'
import React from 'react';

 const ArticleSection = React.forwardRef(({title, desc},ref)=> (
    <article ref={ref} className={['abtWrapper', int.wrapper].join(" ")}>
      <header className='abtTitle'>
        <h1>{title}</h1>
      </header>
      <p className={int.desc}>{desc}</p>
    </article>
 ))

export default ArticleSection;
