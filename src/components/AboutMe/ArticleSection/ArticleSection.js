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
        {bulletPointsArr.map((item, index) => {
          const separator = item.indexOf(': ');
          const label = separator > 0 ? item.slice(0, separator + 1) : null;
          return (
            <li className={int.bulletItem} key={index}>
              {label && <b className={int.bulletLabel}>{label}</b>}
              {separator > 0 ? item.slice(separator + 1) : item}
            </li>
          );
        })}
      </ul>
      )}
    </article>
 ))

export default ArticleSection;
