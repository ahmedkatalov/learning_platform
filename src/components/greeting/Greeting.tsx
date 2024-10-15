

import './Greeting.css';

const Greeting = () => {

    return (
        <div className='greeting-container'>
            <div className='greeting-cute-star'></div>
            <div>
                <h2 className='greeting-actually'>Welcome,</h2>
                <p className='greeting-awesome-phrase'>
                    <i className="greeting-icon fa-solid fa-quote-left"></i> 
                    Infinity is not the limit
                    <i className="greeting-icon fa-solid fa-quote-right"></i>
                    Buzz Lightyear
                </p>
            </div>
        </div>
    )
}

export default Greeting;