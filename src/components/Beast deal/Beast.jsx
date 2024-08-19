// import React from 'react'
import "./Beast.css"
export default function Beast() {

  return (
    <div className='Beast-componant'>
        <div className="content">
            <div className="up">
                <div className="title">
                <h1>|BEAST DEAL</h1>
                <h2>Find Your Best Deal Right Now!</h2>
                </div>
                <div className="btn">
                    <button className="active">Appartment</button>
                    <button className="solid">Villa House</button>
                    <button className="solid">Penthouse</button>
                </div>
            </div>
            <div className="down">
                <div className="left">
                    <div className="column">
                        <p>Total Flat Space</p>
                        <h4>185 m2</h4>
                    </div>
                    <div className="column">
                        <p>Floor number</p>
                        <h4>26th</h4>
                    </div>
                    <div className="column">
                        <p>Number of rooms</p>
                        <h4>4</h4>
                    </div>
                    <div className="column">
                        <p>Parking Available</p>
                        <h4>Yes</h4>
                    </div>
                    <div className="column last">
                        <p>Payment Process</p>
                        <h4>Bank</h4>
                    </div>
                </div>
                <div className="center-photo">
                    <img src="/images/property-05.jpg" alt="" />
                </div>
                <div className="right">
                    <div className="up-right">
                        <h2>Extra Info About Prperty</h2>
                    </div>
                    <div className="center-right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nulla quidem neque velit distinctio minima eum 
                            est error facere repellendus in corrupti possimus,<br /> <br /> cum nemo ea nam obcaecati natus quia.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus fugit nisi vero ex doloribus molestias consequatur porro necessitatibus? Quae, enim atque neque at officia porro commodi quos nemo autem!</p>
                    </div>
                    <div className="down-right">
                        <button style={{cursor:"pointer"}}><a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg></a> <p style={{fontWeight:"bold"}}>Schadule a visit</p></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
