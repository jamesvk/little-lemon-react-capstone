import {Link} from "react-router-dom";

export default function SpecialCard({title, price, image, description}) {
    return (
        <article className="special-card" aria-labelledby={`special-${title}`}>
            <div className="special-card-image">
                <img src={image} alt={`${title} dish`}/>
            </div>
            <div className="special-card-content">
                <div className="special-card-header">
                    <h3 id={`special-${title}`}>{title}</h3>
                    <h3>{price}</h3>
                </div>
                <p>{description}</p>
                <Link to="/order" className="order-link" aria-label={`Add ${title} to cart`}>
                    Add to Cart
                </Link>
            </div>
        </article>
    )
}