import Watch from '../images/watch.svg'
import Close from '../images/close.svg'
import {useState, useEffect} from 'react'

const Youtube = ({setCheck})=>(
    <>
        <div className="wrapper">
            <header className="header">
                <div className="flex"><div className="header__nav"></div></div>
                <div className="flex"><div className="header__logo"></div></div>
                <a href="https://afisha.yandex.ru/saint-petersburg/cinema/dovod" style={{textDecoration:'none'}} target="__blank" className="flex"><button className="header__button">Купить билет</button></a>
            </header>
            <main className="content">
                <div className="content__box">
                    <div className="content__left flex">«Время уходит»</div>
                    <button className="content__button-group flex" onClick={()=> setCheck(true)}>
                        <div className="content__button-img" />
                        <img className="content__button-text" src={Watch} alt="Смотреть трейлер"/>
                    </button>
                </div>
                <div className="content__body">
                    <div className="content__body-title"></div>
                    <p className="content__body-text">
                        В скрытом мире международного шпионажа главный герой, секретный агент, проходит суровый тест на надежность<br/> и присоединяется к невероятной миссии по спасению целого поколения.
                    </p>
                    <div className="content__body-imdb"></div>
                </div>
            </main>
            <footer className="footer">
                <div className="footer__cast">
                    <div className="footer__cast-title"></div>
                    <div className="footer__cast-actors">
                        <div>John David Washington</div>
                        <div>Robert Pattinson</div>
                        <div>Elizabeth Debicki</div>
                    </div>
                </div>
                <div className="footer__filmby footer__cast">
                    <div className="footer__filmby-title"></div>
                    <div className="footer__filmby-director footer__cast-actors">
                        <div>Christopher Nolan</div>
                    </div>
                </div>
                <div className="footer__teen"></div>
            </footer>
        </div>
    </>
)

const Video = ({check, setCheck})=>{
    useEffect(() => {
        if (check) {

            document.querySelector('.video__container').style.display = 'flex'
            return true
        }else {
            document.querySelector('.video').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
            document.querySelector('.video__container').style.display = 'none'
            return true
        } 
    },[check])

    return (
        <div className="video__container">
            <iframe
                className="video"
                width="1000" 
                height="488" 
                src="https://www.youtube.com/embed/C6dZA-buNCw?version=3&enablejsapi=1" 
                title="YouTube video player" 
                frameBorder="0"
                autoPlay="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            />
            <img className="video__button" src={Close} onClick={()=>setCheck(false)} alt="Закрыть"/>
        </div>
    )
}

const Dovod = ()=>{
    document.title = 'Довод'
    const [Check, setCheck] = useState(false)
    const increment = (val)=>{
        setCheck(val)
    }

    useEffect(() => {
        return true
    },[Check])

    return(
        <>
            <Youtube setCheck={increment} />
            <Video check={Check} setCheck={increment}  />
        </>
    )
}

export default Dovod