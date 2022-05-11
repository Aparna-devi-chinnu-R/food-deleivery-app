const CartItem = ({item}) => {
    return (
        <div style={{borderBottom: "2px solid \t#800000", padding: "10px",borderRadius:"5px"}}>
            <div style={{fontWeight: "bold",display:"flex",justifyContent:"space-between"}}>
                <div>{item.name}</div>
                <div style={{display:"flex",width:"25%",justifyContent:"space-between",marginTop:"5px"}}>
                    <div style={{border:"1px solid \t#800000",padding:"2px 15px"}}>+</div>
                    <div style={{border:"1px solid \t#800000",padding:"2px 15px"}}>-</div>
                </div>

            </div>
            <div style={{display: "flex"}}>
                <div style={{color: "darkred"}}>{item.price}</div>
                <div style={{border: "1px solid black", marginLeft: "10px", padding: "0 5px"}}>x{item.count}</div>
            </div>
        </div>
    )
}

export default CartItem;