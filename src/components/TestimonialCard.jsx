export default function TestimonialCard({firstName, lastName, image, rating, review}) {
    return (
        <article className="testimonial-card">
            <div className="testimonial-card-container">
                <div className="testimonial-card-header">
                    <div className="testimonial-card-image">
                        <img src={image} alt={`${firstName} ${lastName}`} />
                    </div>
                    <div className="testimonial-card-user">
                        <div className="testimonial-card-name">
                            <h3 className="testimonial-name">
                                {firstName} {lastName}
                            </h3>
                        </div>
                        <div className="testimonial-rating">
                            {rating}
                        </div>
                        <div className="testimonial-card-content">
                            <p className="testimonial-review">
                                {review}
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </article>
    )
}