import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
function ProductScreen(props) {
    console.log("sws" + props.match.params.id)
    const product = data.products.find(x => x._id === props.match.params.id)
    console.log("dlmweodmewol" + product)
    return <div>
        <div>
            <Link to="/">Back to result</Link>
            {/* <h1>{product.name}</h1> */}
        </div>
        <div className="details">
            {/* <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div> */}

            {/* <div className="details-info">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        {product.rating} Starts ({product.numReviews} reviews)
                </li>
                    <li>
                        <b>{product.price}</b>
                    </li>
                    <li>
                        Description:dnjwndj
                </li>
                </ul>
            </div> */}
        </div>
    </div>
}

export default ProductScreen;