import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    console.log(product + "PPPPPPPPPPPPPPPPPPPPp");
    return <>

        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product-img"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li> <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews)
                    </li>
                    <li><h1> {product.price}</h1></li>
                    <li>
                        Description:
                         <div>
                            {product.description}
                        </div>
                    </li>

                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>Price: {product.price}</li>
                    <li>Staus: {product.status}</li>
                    <li>Qty.:<select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>

                    </select></li>
                    <li><button className="addtocart">Add to cart</button></li>

                </ul>
                <div> <Link to="/" className="backttoresult">Back to Home</Link></div>
            </div>

        </div>


    </>
}

export default ProductScreen;