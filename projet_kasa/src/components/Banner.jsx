import "../styles/banner.scss"


function Banner({img, title}) {
    
    return (
        <>
            <div className="banner">
                <img src={img} alt="Foret" className="img_banner"/>
                {!title ? "": <h1 className="title">{title}</h1> }
            </div>
        
        </>
    ) 
}


export default Banner