import React from 'react';

const Header = (props) => {
	return (
		<div className='jumbotron text-center'>
			<h1>
				<i className='material-icons brand-icon'>fastfood</i> The good side of the food
			</h1>
			<p>Like Mom’s house...</p>
			<div className='input-group w-50 mx-auto'>
				<input type='text' className='form-control' placeholder='Your Yummy Food Search Here' value={props.search} onChange={props.oninputChange} />
				<div className='input-group-append'>
					<button className='btn btn-dark  search-butt' type='submit'>
						<span className='dem'>
							<i className='material-icons '>restaurant</i>
							Search Here
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
