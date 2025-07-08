import heartIcon from '../../asset/hearticon.png';
import priceTag from '../../asset/hearticon.png';
import chefIcon from '../../asset/hearticon.png';

export const Advertisement = () => {
    return (
        <section className="advertisement">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <div className='divStyle'>
                            <img className='header-icons' src={chefIcon} alt='chef icon' />
                            <div>
                                <h4>Freshly Prepared Meals</h4>
                                <p>
                                    Every dish is made with carefully selected, fresh ingredients.
                                    From local produce to top-quality spices, we ensure each bite is
                                    full of flavor and goodness.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='divStyle'>
                            <img src={heartIcon} className='header-icons' alt='heart icon personal touch' />
                            <div>
                                <h4>Cooked with Love</h4>
                                <p>
                                    Our meals are crafted with care and passion.
                                    Whether you're ordering a quick lunch or a full dinner,
                                    you’ll taste the homemade touch in every plate.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className='divStyle'>
                            <img className='header-icons' src={priceTag} alt='price tag' />
                            <div>
                                <h4>Delicious & Affordable</h4>
                                <p>
                                    Great food doesn’t have to cost a fortune. 
                                    Enjoy tasty, well-portioned meals that satisfy your cravings 
                                    without breaking the bank.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
