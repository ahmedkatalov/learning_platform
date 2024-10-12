

import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='news-container'>
            <div className='news-content'>
                <div className='news-cute-star3'></div>
                <div className='news-lighter-bg'>
                    <div className='news-first-box'>
                        <h2 className='news-subscribe'>Subscribe our NewsLetter</h2>
                        <p className='news-invitation'>Join our newsletter and receive a plethora of <br/>
                        captivating content delivered to your inbox every week
                        </p>
                    </div>

                    <div className='news-second-box'>
                        <form className="news-form">
                            <input className="news-form_input" type="email" placeholder="Enter your Email here" required />
                            <button type="submit" className="join-btn">Join</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;