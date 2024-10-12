import React from 'react';

import './IntroAdd.css';

const IntroAdd: React.FC = () => {
    return (
        <div className='intro-container'>
            <div className='intro-content'>
                <div>
                    <h3 className='intro-content-h3'>Grow your skills,</h3>
                    <h2 className='intro-content-h2'>Build your <span className='intro-content-h2-future'>future</span></h2>
                    <p className='intro-content-p-text'>
                        We collaborate to ensure every student achieves academic, social and <br/>
                        emotional success by working together and providing comprehensive support
                    </p>
                </div>
                <div>
                    <div className='intro-cute-star'></div>
                </div>
            </div>
        </div>
    )
}

export default IntroAdd;