import { useRef } from 'react'
function Form(props) {

    const idref = useRef();
    const priceref = useRef();
    const dishref = useRef();
    const tableref = useRef();

    function addOrderHandler(e) {
        e.preventDefault();
        let orderid = e.target.orderid.value
        let price = e.target.price.value
        let dish = e.target.dish.value
        let table = e.target.table.value
        let orderdetails = {
            orderid: orderid,
            price: price,
            dish: dish,
            table: table
        }

        props.orderhandler(orderdetails);
        localStorage.setItem(orderid, { price, dish, table })
    }

    return (
        <form onSubmit={addOrderHandler} >
            <label htmlFor="orderid">Order ID</label>
            <input
                ref={idref}
                id="orderid"
                type="number"
            />
            <label htmlFor="price">Choose Price:</label>
            <input
                ref={priceref}
                id="price"
                type="number"
            />
            <label htmlFor="dish">Choose Dish:</label>
            <input
                ref={dishref}
                id="dish"
                type="text"
            />
            <label htmlFor="table">Choose a Table</label>
            <select id="table" ref={tableref} >
                <option >Table1</option>
                <option >Table2</option>
                <option >Table3</option>
            </select>

            <button type="submit">Add Order</button>
        </form>
    )

}

export default Form;