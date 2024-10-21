import { FC, useState } from 'react';

import './Pricing.css';

const Pricing: FC = () => {
    const [activePeriod, setActivePeriod] = useState<'monthly' | 'annual' | 'twoYear'>('annual');
    const [flipped, setFlipped] = useState(false);
  
    const handlePeriodChange = (period: 'monthly' | 'annual' | 'twoYear') => {
      if (period !== activePeriod) {
        setFlipped(true);
        setTimeout(() => {
          setActivePeriod(period);
          setFlipped(false);
        }, 600);
      }
    };

  return (
    <div className="pricing-container">
        <div className="pricing-buttons">
            <button className="pricing-button" onClick={() => handlePeriodChange('monthly')}>Monthly</button>
            <button className="pricing-button" onClick={() => handlePeriodChange('annual')}>Annual</button>
        </div>
        <div className='pricing-card-box'>
            <div className={`pricing-card ${flipped ? 'pricing-flipped' : ''}`}>
                <div className="pricing-card-inner">
                    <div className="pricing-card-front">
                        <div className='pricing-title-block'>
                            <h2 className='pricing-plan'>Standard</h2>
                            <h3>{activePeriod === 'monthly' ? 'Monthly' : activePeriod === 'annual' ? 'Annual' : ''}</h3>
                        </div>
                        <div className='pricing-plan-switch-box'>
                            {activePeriod === 'monthly' && (
                            <div>
                                <p className='pricing-price-p'>$49 / month</p>
                                <p className='pricing-price-p'>Billed monthly $49</p>
                            </div>
                            )}
                            {activePeriod === 'annual' && (
                            <div>
                                <p className='pricing-price-p'>$11 / month</p>
                                <p className='pricing-price-p'>Billed annually $125</p>
                            </div>
                            )}
                            <button className='pricing-start-btn'>Get started</button>
                        </div>
                        <div>
                            <h3 className='pricing-plan-includes'>Plan includes</h3>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                800+ hands-on courses
                            </p>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                Completion Certificate
                            </p>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                AI-powered learning
                            </p>
                        </div>
                    </div>

                    <div className="pricing-card-back">
                        <p>Loading new plan...</p>
                    </div>
                </div>
            </div>

        <div className={`pricing-card ${flipped ? 'pricing-flipped' : ''}`}>
            <div className="pricing-card-inner">
                    <div className="pricing-card-front">
                        <div className='pricing-title-block'>
                            <h2 className='pricing-plan'>Premium</h2>
                            <h3>{activePeriod === 'monthly' ? 'Monthly' : activePeriod === 'annual' ? 'Annual' : ''}</h3>
                        </div>
                        <div className='pricing-plan-switch-box'>
                            {activePeriod === 'monthly' && (
                            <div>
                                <p className='pricing-price-p'>$83 / month</p>
                                <p className='pricing-price-p'>Billed monthly $83</p>
                            </div>
                            )}
                            {activePeriod === 'annual' && (
                            <div>
                                <p className='pricing-price-p'>$14 / month</p>
                                <p className='pricing-price-p'>Billed annually $167</p>
                            </div>
                            )}
                            <button className='pricing-start-btn'>Get started</button>
                        </div>
                        <div>
                            <h3 className='pricing-plan-includes'>Everything in Standard, plus</h3>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                300+ real-world projects
                            </p>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                Personalized Paths
                            </p>
                            <p>
                                <i className="pricing-icon fa fa-check" aria-hidden="true"></i>
                                3 AI Mock Interviews per month
                            </p>
                        </div>
                    </div>

                    <div className="pricing-card-back">
                        <p>Loading new plan...</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Pricing;