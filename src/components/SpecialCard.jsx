import {Link} from "react-router-dom";

export default function SpecialCard({title, price, image, description}) {
    return (
        <article className="special-card">
            <div className="special-card-image">
                <img src={image} alt={title} />
            </div>
            <div className="special-card-content">
                <div className="special-card-header">
                    <h3>{title}</h3>
                    <h3>{price}</h3>
                </div>
                <p>{description}</p>
                <Link to="/order" className="order-link">
                    Add to Cart
                </Link>
            </div>
        </article>
    )
}