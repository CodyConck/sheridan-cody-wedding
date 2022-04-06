import React from 'react'

const Home = () => {
    return (
        <div id='Home' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <img src="/images/IMG_0523.JPG" alt="engagement pic"
                style={{
                    height: 400,
                    width: 300,
                }}
            />
            <div className='home-page-message' >
                <h3>Please join us for a our wedding celebration on</h3>
                <h1>Some Day 2022 or 2023</h1>
            </div>
        </div>


    )
}

export default Home