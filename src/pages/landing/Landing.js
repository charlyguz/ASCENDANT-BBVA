import React from "react";
import "./Landing.css";


function Landing() {
    return (
        <React.Fragment>
             <main className="main">
                <section className="section_hero">
                    <div className="section__hero--left">
                        <div className="section__hero--left-container">
                        <h1 className="section__hero-title">
                            Una nueva manera de manejar tus NFT
                        </h1>
                        <p className="section__hero-description">
                            Obtenga sus puntos bancomer al mantener sus nfts
                        </p>
                        <div className="section__hero--left-buttons">
                            <button className="section__hero--left-buttona">
                            Empieza ahora
                            </button> 
                        </div>
                        </div>
                    </div>
            
                    <div className="section__hero--right">
                        <div className="section__hero--right-container">
                         <img
                            className="section__hero--right-img"
                            src={require("../../assets/heroImg.png")}
                            alt=""
                        /> 
                        </div>
                    </div>
                </section>



                <section className="section__NFT ">
                    <div className="section__NFT-container ">
                    <img
                        className="section__partner-img"
                        src={require("../../assets/nftExample.svg").default} alt=""
                        />
                    <img
                        className="section__partner-img"
                        src={require("../../assets/nftExample.svg").default} alt=""
                    />
                    <img
                        className="section__partner-img"
                        src={require("../../assets/nftExample.svg").default} alt=""
                    />
                    <img
                        className="section__partner-img"
                        src={require("../../assets/nftExample.svg").default} alt=""
                    />
                    <img
                        className="section__partner-img"
                        src={require("../../assets/nftExample.svg").default} alt=""
                    />
                    </div>
                </section>



                <section className="section__services" id="services"> 
                        <h2 className="subtitle">Crypto</h2>
                        <p className="p-descript">Obtenga sus puntos bancomer al mantener sus nfts </p>
                        <div className="section__services-container">
                        <div className="section__services-service-box">
                            <div className="section__services-service-image-box">
                            <img
                                className="section__services-service-image"
                                src={require("https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7479.jpg?w=1380&t=st=1665976808~exp=1665977408~hmac=0c31298e514441587e7088592f00dddb6cf3bf29fc6f1df9f28d9abd0820c21a").default}
                                alt=""
                            />
                            </div>
            
                            <div className="section__services-service-text">
                                <h3 className="section__services-service-text--tile">
                                    Staking
                                </h3>
                                <p className="section__services-service-text--description">
                                    Protege, invierte y transfiere tu dinero de una manera segura
                                </p>
                            </div>
                        </div>
            
                    <div className="section__services-service-box">
                        <div className="section__services-service-image-box">
                        <img
                            className="section__services-service-image"
                            src={require("https://as2.ftcdn.net/v2/jpg/03/02/44/69/1000_F_302446920_P7lGowlNkC4Del9xdEL5K4hujwQHh8Ox.jpg")}
                            alt=""
                        />
                        </div>
                        <div className="section__services-service-text">
                        <h3 className="section__services-service-text--tile">
                            Mint
                        </h3>
                        <p className="section__services-service-text--description">
                            hace cosas XD
                        </p>
                        </div>
                    </div>
        
                    <div className="section__services-service-box">
                        <div className="section__services-service-image-box">
                        <img
                            className="section__services-service-image"
                            src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                            alt=""
                        />
                        </div>
                        <div className="section__services-service-text">
                        <h3 className="section__services-service-text--tile">Wallet BBVA</h3>
                        <p className="section__services-service-text--description">
                            Guarda de forma segura tus crypto
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section__beneficios" id="beneficios"> 
                    <h2 className="subtitle2">Beneficios</h2>
                    <p className="p-descript2">Obtenga sus puntos bancomer al mantener sus nfts </p>
                    <div className="section__beneficios-boxes">
                            <div className="section__beneficios-container1">
                                <div className="section__beneficios-beneficio-box">
                                    <div className="section__beneficios-beneficio-image-box">
                                    <img
                                        className="section__beneficios-beneficio-image"
                                        src={require("https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7479.jpg?w=1380&t=st=1665976808~exp=1665977408~hmac=0c31298e514441587e7088592f00dddb6cf3bf29fc6f1df9f28d9abd0820c21a")}
                                        alt=""
                                    />
                                    </div>

                                    <div className="section__beneficios-beneficio-text">
                                        <h3 className="section__beneficios-beneficio-text--tile">
                                            Staking
                                        </h3>
                                        <p className="section__beneficios-beneficio-text--description">
                                            Protege, invierte y transfiere tu dinero de una manera segura
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div className="section__beneficios-container2">
                            <div className="section__beneficios-beneficio-box">
                                <div className="section__beneficios-beneficio-image-box">
                                <img
                                    className="section__beneficios-beneficio-image"
                                    src={require("https://as2.ftcdn.net/v2/jpg/03/02/44/69/1000_F_302446920_P7lGowlNkC4Del9xdEL5K4hujwQHh8Ox.jpg")}
                                    alt=""
                                />
                                </div>
                                <div className="section__beneficios-beneficio-text">
                                <h3 className="section__beneficios-beneficio-text--tile">
                                    Mint
                                </h3>
                                <p className="section__beneficios-beneficio-text--description">
                                    Protege, invierte y transfiere tu dinero de una manera segura
                                </p>
                                </div>
                            </div>
                        </div>

                        <div className="section__beneficios-container3">
                            <div className="section__beneficios-beneficio-box">
                                <div className="section__beneficios-beneficio-image-box">
                                    <img
                                        className="section__beneficios-beneficio-image"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    />
                                    </div>
                                        <div className="section__beneficios-beneficio-text">
                                        <h3 className="section__beneficios-beneficio-text--tile">Wallet BBVA</h3>
                                        <p className="section__beneficios-beneficio-text--description">
                                            Guarda de forma segura tus crypto
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                    <section className="section__rareza">
                        <h2 className="subtitle3">Rareza</h2>
                            <div className="section__rareza-part1">

                            </div>
                            <div className="section__rareza-part2">

                            </div>
                    </section>


                <section className="section__about container" id="roadmap">
                    <div className="section__about-container">
                    <div className="section__about-top">
                        <h2 className="section__about-title">CryptoBlueberry</h2>
                        <p className="section__about-description">
                        CryptoBlueberry es una dapp que te permite interactuar con tus NFT en el mundo real y obtener beneficios por ello.
                        </p>
                        <h3 className="roadmap-title">Roadmap</h3>
                    </div>
                    <div className="section__about-container-inner">
                        <div className="roadmap-line"></div>
                        <div className="section__about-container-inner-grid">
                        <div className="section__about-container-inner-grid-item">
                            <div className="wrap align-right stage-text">
                            <p className="stage-text-title">Step 1</p>
                            Puedes dejar tu NFT en STAKING para generar rendimiento <br />
                            <br />
                            Esto te permite generar ingreso de manera pasiva <br />
                            </div>
                            <div className="wrap flex-center ">
                            <div className="stage">S1</div>
                            </div>
                        </div>
        
                        <div className="section__about-container-inner-grid-item">
                            <div className="wrap align-right"></div>
                            <div className="wrap flex-center ">
                            <div className="stage">S2</div>
                            </div>
                            <div className="wrap stage-text">
                            <p className="stage-text-title">Step 2</p>
                            Sistema de hipoteca por si necesitas un pretamo rapido por tus NFTs <br /> <br />
                            Puedes recuperar tu NFT en cualquier momento si devuelves el prestamo antes del tiempo establecido <br />
                            </div>
                        </div>
        
                        <div className="section__about-container-inner-grid-item">
                            <div className="wrap align-right stage-text">
                            <p className="stage-text-title">Step 3</p>
                            Puedes Mintear facilmente
                            <br />
                            <br />
                            Todo esto sin salir de nuestra plataforma, sin mencionar que tiene opcion a implementarse en la app de BBVA
                            </div>
                            <div className="wrap flex-center ">
                            <div className="stage">S3</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>

                <section className="section__faq">
                    <h2 className="section__about-title">Preguntas frecuentes</h2>
                    <div className="section__faq-container">
                        <div className="section__faq--q">
                            <h3 className="section__faq--q-title">¿Qué es Mintear?</h3>
                            <p className="section__faq--q-description"> no se XD </p>
                        </div>
                        <div className="section__faq--q">
                            <h3 className="section__faq--q-title">bob esponja primero tienes que hacer una pregunta</h3>
                            <p className="section__faq--q-description">¿de que color son mis calzoncillo? procede a golpearlo</p>
                        </div>
                        <div className="section__faq--q">

                        </div>
                        <div className="section__faq--q">

                        </div>
                        <div className="section__faq--q">

                        </div>
                    </div>
                </section>

            </main>
            
        </React.Fragment>
    );
}

export default Landing;