import React from "react";
import "./Landing.css";
import Navbar from "../global components/navbar/Navbar";
import Footer from "../global components/footer/Footer";

function Landing({account,setAccount}) {
    
    return (
        
        <React.Fragment>
            <div className="cc_landig">
                <Navbar account={account} setAccount={setAccount}/>
                <div className="landing__container-general">
                <main className="main">
                    <section className="section_hero">
                        <div className="section__hero--left">
                            <div className="section__hero--left-container">
                            <h1 className="section__hero-title">
                                Una nueva manera de manejar tus NFT
                            </h1>
                            <p className="section__hero-description">
                                Obtenga sus puntos BBVA al mantener sus nfts
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
                        {/* <div className="section__NFT-container "> */}
                        <img
                            className="section__partner-img"
                            src={require("../../assets/7.png")} alt=""
                            />
                        <img
                            className="section__partner-img"
                            src={require("../../assets/13.png")} alt=""
                        />
                        <img
                            className="section__partner-img"
                            src={require("../../assets/15.png")} alt=""
                        />
                        <img
                            className="section__partner-img"
                            src={require("../../assets/16.png")} alt=""
                        />
                        <img
                            className="section__partner-img"
                            src={require("../../assets/14.png")} alt=""
                        />
                        <img
                            className="section__partner-img"
                            src={require("../../assets/5.png")} alt=""
                        />
                        {/* </div> */}
                    </section>



                    <section className="section__services" id="services">
                            <div className="text__services">
                                <h2 className="subtitle">ACENDANT BBVA</h2>
                                <p className="p-descript">BENEFICIOS DE LA COLECCION PADRE</p>
                            </div> 
                            <div className="section__services-container">
                            <div className="section__services-service-box">
                                <div className="section__services-service-image-box">
                                {/* <img
                                    className="section__services-service-image"
                                    src={require("https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7479.jpg?w=1380&t=st=1665976808~exp=1665977408~hmac=0c31298e514441587e7088592f00dddb6cf3bf29fc6f1df9f28d9abd0820c21a").default}
                                    alt=""
                                /> */}
                                </div>
                
                                <div className="section__services-service-text">
                                    <h3 className="section__services-service-text--tile">
                                        Staking
                                    </h3>
                                    <p className="section__services-service-text--description">
                                        Deja tu NFT bloqueado con nostros para poder generar ingresos pasivos
                                    </p>
                                </div>
                            </div>
                
                        <div className="section__services-service-box">
                            <div className="section__services-service-image-box">
                            {/* <img
                                className="section__services-service-image"
                                src={require("https://as2.ftcdn.net/v2/jpg/03/02/44/69/1000_F_302446920_P7lGowlNkC4Del9xdEL5K4hujwQHh8Ox.jpg")}
                                alt=""
                            /> */}
                            </div>
                            <div className="section__services-service-text">
                            <h3 className="section__services-service-text--tile">
                            Comunidad de Discord
                            </h3>
                            <p className="section__services-service-text--description">
                                En este Servidor tendras a la mano y de facil acceso toda la informacion para poder aprender sobre el mundo web3 y NFT
                            </p>
                            </div>
                        </div>
            
                        <div className="section__services-service-box">
                            <div className="section__services-service-image-box">
                            {/* <img
                                className="section__services-service-image"
                                src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                alt=""
                            /> */}
                            </div>
                            <div className="section__services-service-text">
                            <h3 className="section__services-service-text--tile">Personaliza tu TDC</h3>
                            <p className="section__services-service-text--description">
                            Personalización de su tarjeta de crédito con su NFT, con la cual tendrá puntos dobles.
                            </p>
                            </div>
                        </div>
                        </div>
                    </section>

                    <section className="section__beneficios" id="beneficios"> 
                        <h2 className="subtitle2">Ecosistema BBVA</h2>
                        <p className="p-descript2">Obtenga beneficios de colecciones quemables BBVA al mantener sus nfts </p>
                        <div className="section__beneficios-boxes">
                                <div className="section__beneficios-container1">
                                    <div className="section__beneficios-beneficio-box">
                                        <div className="section__beneficios-beneficio-image-box">
                                        {/* <img
                                            className="section__beneficios-beneficio-image"
                                            // src={require("https://img.freepik.com/vector-gratis/ilustracion-concepto-lider_114360-7479.jpg?w=1380&t=st=1665976808~exp=1665977408~hmac=0c31298e514441587e7088592f00dddb6cf3bf29fc6f1df9f28d9abd0820c21a")}
                                            alt=""
                                        /> */}
                                        </div>

                                        <div className="section__beneficios-beneficio-text">
                                            <h3 className="section__beneficios-beneficio-text--tile">
                                                Wallet
                                            </h3>
                                            <p className="section__beneficios-beneficio-text--description">
                                                Es un wallet que te permite almacenar tus NFTs y tokens de forma segura y confiable, ya que todo lo que tu firmes sera respaldado con tus datos biometricos
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            <div className="section__beneficios-container2">
                                <div className="section__beneficios-beneficio-box">
                                    <div className="section__beneficios-beneficio-image-box">
                                    {/* <img
                                        className="section__beneficios-beneficio-image"
                                        src={require("https://as2.ftcdn.net/v2/jpg/03/02/44/69/1000_F_302446920_P7lGowlNkC4Del9xdEL5K4hujwQHh8Ox.jpg")}
                                        alt=""
                                    /> */}
                                    </div>
                                    <div className="section__beneficios-beneficio-text">
                                    <h3 className="section__beneficios-beneficio-text--tile">
                                        Compra con tu TDC
                                    </h3>
                                    <p className="section__beneficios-beneficio-text--description">
                                       Podras comprar tus NFTs con tu tarjeta de credito
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="section__beneficios-container3">
                                <div className="section__beneficios-beneficio-box">
                                    <div className="section__beneficios-beneficio-image-box">
                                        {/* <img
                                            className="section__beneficios-beneficio-image"
                                            src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                            alt=""
                                        /> */}
                                        </div>
                                        <div className="section__beneficios-beneficio-text">
                                            <h3 className="section__beneficios-beneficio-text--tile">Empeña tu NFT</h3>
                                            <p className="section__beneficios-beneficio-text--description">
                                                Para poder obtener liqidez de forma inmediata podras empeñar tu NFT en la plataforma
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </section>

                    <section className="section__rareza">
                        <h2 className="subtitle3">Rareza</h2>
                            <div className="section__rareza-conteiner">
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <div className="section__rareza-box-text"> <p className="section__rareza-box-text">Comun</p> </div>
                                    
                                </div>
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <p className="section__rareza-box-text">Comun</p>
                                </div>
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <p className="section__rareza-box-text">Comun</p>
                                </div>
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <p className="section__rareza-box-text">Comun</p>
                                </div>
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <p className="section__rareza-box-text">Comun</p>
                                </div>
                                <div className="section__rareza-box">
                                    {/* <img
                                        className="section__rareza-box-image1"
                                        src={require("https://as2.ftcdn.net/v2/jpg/02/85/66/95/1000_F_285669574_V9ZJVCbAJAvDWKBbmS3KymsKYvXF3vJP.jpg")}
                                        alt=""
                                    /> */}
                                    <p className="section__rareza-box-text">Comun</p>
                                </div>
                            </div>
                            
                    </section>


                    <section className="section__about" id="roadmap">
                        <div className="section__about-container">
                        <div className="section__about-top">
                            <h2 className="section__about-title">CryptoBlueberry</h2>
                            <p className="section__about-description">
                            CryptoBlueberry es una dapp que te permite interactuar con tus NFT en el mundo real y obtener beneficios por ello.
                            </p>
                            <h3 className="roadmap-title">Tutorial</h3>
                        </div>
                        <div className="section__about-container-inner">
                            <div className="roadmap-line"></div>
                            <div className="section__about-container-inner-grid">
                            <div className="section__about-container-inner-grid-item">
                                <div className="wrap align-right stage-text">
                                <p className="stage-text-title">Step 1</p>
                                Crea tu Crypto wallet BBVA <br />
                                <br />
                                Con un solo boton puedes tener tu wallet BBVA para poder interactuar con el mundo de web 3 de manera sencilla basandonos en el proyecto BBVA New-gen de wallet crypto en suiza<br />
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
                                Compra tus NFTs de la coleccion BBVA Ascendant <br /> <br />
                                Puedes comprar tus NFTs rapido, seguro y accesible para personas que no han toca nada de la web3 <br />
                                </div>
                            </div>
            
                            <div className="section__about-container-inner-grid-item">
                                <div className="wrap align-right stage-text">
                                <p className="stage-text-title">Step 3</p>
                                Disfruta de tus beneficios adquiridos
                                <br />
                                <br />
                                Ya que tienes tus NFTs puedes disfrutar de los beneficios que te ofrece la coleccion padre BBVA Ascendant y los beneficios que te ofrecemos con los airdrops y los eventos que se realizan en la comunidad de discord
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
                                <h3 className="section__faq--q-title">¿Qué son los colecciones quemables?</h3>
                                <p className="section__faq--q-description"> Es un regalo que te damos por haber comprado nuestro NFT este sirve para poder canjearlo por beneficios exclusivos que son de mejor calidad entre mas raro te toque estos te llegaran trimestralmente </p>
                            </div>
                            <div className="section__faq--q">
                                <h3 className="section__faq--q-title">¿Qué es Mintear?</h3>
                                <p className="section__faq--q-description">Es comprar tus NFTs a traves de un web llamada Mint</p>
                            </div>
                            <div className="section__faq--q">
                                <h3 className="section__faq--q-title">¿Qué es un NFT?</h3>
                                <p className="section__faq--q-description">Es un token no fungible que te hace propietario unico y exclusivo de un objeto virtual </p>
                            </div>
                            <div className="section__faq--q">
                                <h3 className="section__faq--q-title">¿Qué beneficios tienes por comprar nuestro NFT?</h3>
                                <p className="section__faq--q-description">Desde que tu compras nuestro NFT el usuario tendrá acceso a los siguientes beneficios: Comunidad de Discord con canales privados donde podrá aprender sobre ntf's, crypto, finanzas, acciones, y bienes raíces. Personalización de su tarjeta de crédito con su NFT, con la cual tendrá puntos dobles. Staking.</p>
                            </div>
                            <div className="section__faq--q">
                                <h3 className="section__faq--q-title">¿Como reclamo mis recompensas?</h3>
                                <p className="section__faq--q-description">Con un solo click en la pagina de canjear podras pedir la recompensa asociada a tu NFT </p>
                            </div>
                        </div>
                    </section>

                </main>
                
                {/* <Footer /> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Landing;