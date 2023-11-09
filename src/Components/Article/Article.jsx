import "./article.scss"
export const Article = () => {
    return(
        <article className="main__article">
            <div className="container">
                <div className="main_article__box">
                    <div className="main_article__animation">
                        <h1>ITICKET clone by SHOKHIJAKHON-DEV</h1>
                    </div>
                    <div className="main_article__inner">
                        <div className="main_article__info">
                            <h2>НАЙДИТЕ СВОЕ СЛЕДУЮЩЕЕ ВИЗУАЛЬНОЕ ПУТЕШЕСТВИЕ</h2>
                            <p>Приложение iTicket.UZ позволяет легко и быстро приобретать билеты на всевозможные мероприятия (в театр, на спорт, на концерты, выставки и т.д.).</p>
                            <div className="main_article__group_btn">
                                <a target="brank" href="https://google.play.com">
                                    <img className="main_article_btn__image" src="https://iticket.uz/images/android.png" srcSet="https://iticket.uz/images/android.png 1x, 	https://iticket.uz/images/android@2x.png 2x " alt="iticket-image"/>
                                </a>
                                <a target="blank" href="https://appstore.com">
                                <img className="main_article_btn__image" src="https://iticket.uz/images/ios.png" srcSet="https://iticket.uz/images/ios.png 1x, 	https://iticket.uz/images/ios@2x.png 2x " alt="iticket-image"/>
                                </a>
                            </div>        
                        </div>
                        <div className="main_article__image_box">
                            <img className="main_article__image" src="https://iticket.uz/images/app.png" srcSet="https://iticket.uz/images/app.png 1x, https://iticket.uz/images/app@2x.png 2x" alt="Iticket-image" />
                        </div>
                    </div>
                </div>
                
            </div>           
        </article>
    )
}