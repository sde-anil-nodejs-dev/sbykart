import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
function HomeScreen(props) {
    console.log(props);

    return <ul className="products">

        {data.products.map(product =>
            <li>
                <div className="product">
                    <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="" />
                        <div className="product-name">
                            {product.name}
                        </div>
                    </Link>
                    <div className="prduct-price">{product.price}</div>
                    <div className="product-rating">{product.rating} Starts
                        {product.numReviews} Reviews
                    </div>
                </div>
            </li>

        )
        }
    </ul>
}
export default HomeScreen;