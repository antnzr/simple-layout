import React, { Fragment } from 'react'

import './App.scss'

const App = () => (
    <Fragment>
        { /* --- Header --- */}
        <section className="section-outer section-header">
            <div className="section-inner">
                <div className="section-header-logo">
                    Marketika
                </div>
                <div className="section-header-content">
                    <div className="section-header-wrapper">
                        <div className="section-header-wrapper__title">
                            We are here to help you out
                        </div>
                        <div className="section-header-wrapper__subtitle">
                            Very professional and highly customizable sketch template with lots
                            of custom pages and useful features
                        </div>
                        <form action="">
                            <div className="section-header-wrapper__form">
                                <div className="section-header-wrapper__form-input">
                                    <input type="text" placeholder="Your Name" />
                                </div>
                                <div className="section-header-wrapper__form-input">
                                    <input type="text" placeholder="Your Email" />
                                </div>
                                <div className="section-header-wrapper__form-button">
                                    <button className="btn-main">Get Started</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*  --- / Header --- */}

        {/*  --- Promo --- */}
        <section className="section-outer section-promo">
            <div className="section-inner">
                <div className="section-promo-1">
                    <div className="section-promo-1__content">
                        <div className="title">
                            Grow up your business with maketica maketing landing page
                        </div>
                        <div className="description-item">
                            <div className="description-item__title">
                                Increase your visitors
                            </div>
                            <div className="description-item__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </div>
                        </div>
                        <div className="description-item">
                            <div className="description-item__title">
                                Start social media campaign
                            </div>
                            <div className="description-item__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </div>
                        </div>
                    </div>
                    <div className="section-promo-1__video">
                        <img src="images/video.png" alt="video" />
                    </div>
                </div>

                <div className="section-promo-2">
                    <div className="description-item">
                        <div className="description-item__icon">
                            <img src="images/bulb.png" alt="bulb" />
                        </div>
                        <div className="description-item__title">
                            Start your marketing
                            </div>
                        <div className="description-item__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                    </div>
                    <div className="description-item">
                        <div className="description-item__icon">
                            <img src="images/bulb.png" alt="bulb" />
                        </div>
                        <div className="description-item__title">
                            Find your favourite niche
                            </div>
                        <div className="description-item__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                    </div>
                    <div className="description-item">
                        <div className="description-item__icon">
                            <img src="images/bulb.png" alt="bulb" />
                        </div>
                        <div className="description-item__title">
                            Optimize your article
                            </div>
                        <div className="description-item__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  --- / Promo --- */}

        {/*  --- Founder --- */}
        <section className="section-outer section-founder">
            <div className="section-inner">
                <div className="section-founder__img">
                    <img src="images/founder.png" alt="founder" />
                </div>
                <div className="section-founder__content">
                    <div className="section-founder__content-text">
                        Content should be a journey. It should hit users at all the stages: awareness, consideration, and decision. If your content doesn’t continue to inform and be relevant, users will get turned off. A pipeline is only as good as the quality and readiness of leads.
                    </div>
                    <div className="section-founder__content-name">
                        Andrew Bichel
                    </div>
                    <div className="section-founder__content-post">
                        Founder, Marketing
                    </div>
                </div>
            </div>
        </section>
        { /*  --- / Founder --- */}

        { /*  --- Plans --- */}
        <section className="section-outer section-plans">
            <div className="section-inner">
                <div className="section-plans__title">
                    Choose your suitable plans
                </div>
                <div className="section-plans__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
                <div className="section-plans__list">
                    <div className="section-plans__list-item active">
                        <div className="section-plans__list-item_title">FREE</div>
                        <div className="section-plans__list-item_price">
                            <span className="prefix">$0</span><span className="suffix">/mo</span>
                        </div>
                        <div className="section-plans__list-item_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                        <div className="section-plans__list-item_button">
                            <a href="#" className="btn-main">Get Started</a>
                        </div>
                    </div>
                    <div className="section-plans__list-item">
                        <div className="section-plans__list-item_title">PREMIUM</div>
                        <div className="section-plans__list-item_price">
                            <span className="prefix">$39</span><span className="suffix">/mo</span>
                        </div>
                        <div className="section-plans__list-item_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                        <div className="section-plans__list-item_button">
                            <a href="#" className="btn-secondary">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*  --- / Plans --- */}

        {/*  --- Free --- */}
        <section className="section-outer section-free">
            <div className="section-inner">
                <div className="section-free__title">
                    It’s free, Get started today
                </div>
                <div className="section-free__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </div>
                <div className="section-free__button">
                    <a href="#" className="btn-free">Get Started</a>
                </div>
            </div>
        </section>
        {/* --- / Free --- */}

        {/*  --- Footer --- */}
        <section className="section-outer section-footer">
            <div className="section-inner">
                <div className="section-footer__logo">
                    Marketika
                </div>
                <ul className="section-footer__nav">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#" className="active">Services</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div className="section-footer__copyright_and_links">
                    <div className="section-footer__copyright_and_links-copyright">
                        Copyright © Sepra 2018 All Right Resereved
                    </div>
                    <div className="section-footer__copyright_and_links-links">
                        <ul className="helper-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms Of Services</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/*  --- / Footer */}
    </Fragment>
)

export default App