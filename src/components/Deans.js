import React from 'react'
import "../styles/deans.css"
import dean from "../assets/deanNgranga.jpeg"

export default function Deans() {
  return (
    <>
    <div className='flex-container'>
    <article className="card flex-child magenta">
    <div className="card__publication">
        <img src={dean} alt="dean"/>
        {/* <div>
            <span className="card__author">
                <i className="ri-user-line">Dr. G RamachandraRao</i>
            </span>
            <span className="card__date">
                <i className="ri-calendar-line"></i> October 30, 2022
            </span>
        </div> */}
    </div>
    <div className="card__info">
        <h2 className="card__title">Dean</h2>
        <span className="card__subtitle">Dr. G RamachandraRao</span>
        <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid asperiores corporis earum
            et, laborum maxime molestias non odit omnis, praesentium. Et hic molestiae odio repellat, rerum sint
            vitae?
        </p>
        <a href="#" className="card__cta">
            Read more <span>&rarr;</span>
        </a>
    </div>

    
</article>



<article className="card flex-child magenta">
    <div className="card__publication">
        <img src={dean} alt="dean"/>
        {/* <div>
            <span className="card__author">
                <i className="ri-user-line">Dr. G RamachandraRao</i>
            </span>
            <span className="card__date">
                <i className="ri-calendar-line"></i> October 30, 2022
            </span>
        </div> */}
    </div>
    <div className="card__info">
        <h2 className="card__title">Asso. Dean</h2>
        <span className="card__subtitle">Dr. G RamachandraRao</span>
        <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid asperiores corporis earum
            et, laborum maxime molestias non odit omnis, praesentium. Et hic molestiae odio repellat, rerum sint
            vitae?
        </p>
        <a href="#" className="card__cta">
            Read more <span>&rarr;</span>
        </a>
    </div>

    
</article>

</div>

</>
  )
}