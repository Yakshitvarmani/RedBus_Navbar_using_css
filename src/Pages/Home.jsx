import React from 'react'

const Home = () => {
    return (
        <section id='sect'>
            <article>
                <figure>
                <img src="./Background.png" alt="background"  id='home'/>
                </figure>
        <div>
            <input type="text" id='inpu' placeholder='FROM'/>
            <input type="text" id='inpu1' placeholder='TO'/>
            <input type="date" id='inpu2'/>
            <button type="button" class="btn btn-danger">Search Buses</button>
        </div>            

            {/* <div>
                <img src="./overbackground.png" alt="over" id='cover'/>
            </div> */}
            </article>
            </section>
        
    )
}

export default Home
