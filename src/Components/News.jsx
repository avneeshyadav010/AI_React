import { useEffect } from "react";



const News = (data) => {


    // const focusDiv = useRef(null);
    useEffect(() => {
       if(data)
       window.scrollBy(0,300);
       {
        setInterval(()=> {
            window.scrollBy(0,200);
        },20000)
       }
    },[data])

    return (
        <>

            <div  className="card card_margin" style={{ width: "23rem", height: "26rem" }}>
                <img className="card-img-top" style={{ height: "12rem" }} src={data.data.urlToImage} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title card_h">{data.data.title}</h5>
                    <p className="card-text card_p">{data.data.description}</p>
                    <div style={{ position: "absolute", bottom: "10px" }}>
                        <a href={data.data.url} className="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default News;