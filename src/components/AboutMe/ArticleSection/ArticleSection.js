import int from './ArticleSection.module.css'
import React from 'react';

 const ArticleSection = React.forwardRef(({title, desc},ref)=> (
    <article ref={ref} className={['abtWrapper', int.wrapper].join(" ")}>
      <h1 className='abtTitle'>{title}</h1>
      <p className={int.desc}>{desc}</p>
    </article>
 ))

export default ArticleSection;
