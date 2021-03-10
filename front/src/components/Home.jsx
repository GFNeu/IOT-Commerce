import React from 'react';

import NavbarFunc from './NavbarFunc';
import ExampleCarousel from './Carousel';
import {Link} from 'react-router-dom';
import '../Home.css';

const Home = () => {
    return (
        <>
        <NavbarFunc />
			
	<section id='products' className='container mt-5'>
        
        <h2 id='products_heading'>Latest Products</h2>
		<ExampleCarousel />
			<div className='row'>
			<div className='col-sm-12 col-md-6 col-lg-3 my-3'>
				<div className='card p-3 rounded'>
					<img
						className='card-img-top mx-auto'
						src='https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg'
					/>
					<div className='card-body d-flex flex-column'>
						<h5 className='card-title'>
							<Link to='/' style={{color:'white'}}>128GB Solid Storage Memory card - SanDisk Ultra</Link>
						</h5>
						<div className='ratings mt-auto'>
							<div className='rating-outer'>
								<div className='rating-inner'></div>
							</div>
							<span id='no_of_reviews'>(5 Reviews)</span>
						</div>
						<p className='card-text'>$45.67</p>
						<Link href='#' id='view_btn' className='btn btn-block' style={{color:'white'}}>
								View Details
						</Link>
					</div>
				</div>
			</div>

			</div>
	</section>

    </>
    )
}

export default Home
