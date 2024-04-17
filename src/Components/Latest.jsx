
const Latest = (data) => {
    console.log(data)
   
    return (
        <>
           
                <div className="card card_margin" style={{ width: "23rem", height: "26rem" }}>
                    <img className="card-img-top" style={{height: "12rem"}} src="https://media.istockphoto.com/id/1457766863/vector/abstract-blockchain-technology-network-background.jpg?s=1024x1024&w=is&k=20&c=W_CMAPXYlv6WQImahaalLC_ULsl8UQMCd7MqwTpljcQ=" alt="Card image cap" />
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