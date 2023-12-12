import "../styles/banner.scss"


function Banner({img, title}) {
    
    return (
        <>
        <div className="banner_out">
            {!title ? "": <h1 className="">{title}</h1> }
            <div className="banner">
                <img src={img} alt="Foret" className="img_banner"/>
            </div>
        </div>
        </>
    ) 
}


export default Banner