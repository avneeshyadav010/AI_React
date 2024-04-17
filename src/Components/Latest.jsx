
const Latest = (data) => {
    console.log(data)
   
    return (
        <>
           
                <div className="card card_margin" style={{ width: "23rem", height: "26rem" }}>
                    <img className="card-img-top" style={{height: "12rem"}} src="/src/assets/global_network.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title card_h">{data.data.name}</h5>
                        <p className="card-text card_p">{data.data.description}</p>
                        <div style={{position: "absolute", bottom: "10px"}}>
                        <a href={data.data.url} className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Latest;