import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';
function HomeScreen(props) {
    return <ul className="products">

        {data.products.map(product =>
            <li>
                <div className="product">
                    <Link to={'/products/' + product._id}>
                        <img class="product-image" src={product.image} alt="" />
                        <div class="product-name">

                            {product.name}
                        </div>
                    </Link>
                    <div class="product-brand">
                        {product.brand}
                    </div>
                    <div class="prduct-price">{product.price}</div>
                    <div class="product-rating">{product.rating} Starts
                        {product.numReviews} Reviews
                    </div>
                </div>
            </li>

        )
        }
    </ul>
}
export default HomeScreen;