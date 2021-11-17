const ProductItem = ({item, Handler, HandlerTitle}) => {
    return (
        <div className="card ma" style={{ width: "18rem" }}>
        <img
          className="card-img-top rounded img-thumbnail"
          src={item.image}
          alt={item.title}
          style={{
            width: "auto",
            maxHeight: "300px",
            minHeight: "300px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{item.category}</h5>
          <p
            className="card-text text-truncate"
            style={{ maxWidth: "250px" }}
          >
            {item.title}
          </p>
          <h6 className="card-title">&#8377; {item.price}</h6>
          <div onClick={()=>Handler(item.id)} className="btn btn-primary">
            {HandlerTitle}
          </div>
        </div>
      </div>
      
    )
}

export default ProductItem
