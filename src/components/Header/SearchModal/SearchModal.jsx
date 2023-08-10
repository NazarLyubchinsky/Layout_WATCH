import React from 'react'

import s from './SearchModal.module.scss'

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetProductsQuery } from '../../../features/api/apiSlice';
import OverlayLoader from "overlay-loading-react";

// image
import SEARCH from '../../../images/search (1).svg';

const SearchModal = () => {


	const [search, setSeatch] = useState(false);

	const openSearch = () => {
		setSeatch(true)
		document.body.style.overflow = 'hidden';
	}
	const closeSearch = () => {
		setSeatch(false);
		document.body.style.overflow = 'auto';

	};
	const [searchValue, setSearchValue] = useState("");
	const { data, isLoading } = useGetProductsQuery({ title: searchValue });
	const handleSearch = ({ target: { value } }) => {
		setSearchValue(value)
	}
	return (
		<>
			{
				!search ? (
					<div className={s.search} onClick={openSearch}>
						<div className={s.overlap__group}>
							<img className="img" alt="Vector" src={SEARCH} />
						</div>
					</div>

				) : (
					<div className={s.modal_overlay} >
						<div className={s.modal_content}>
							<div>
								<span className={s.close_modal_button} onClick={closeSearch}>
									&times;
								</span>
								<form className={s.form}>
									<div className={s.input}>
										<input className={s.input__search} type="search" name='search'
											placeholder='Search for anyting'
											autoComplete='off'
											onChange={handleSearch}
											value={searchValue} />

									</div>

									{searchValue && (
										<div className={s.box}>
											{isLoading
												? (
													<div className="preloader" style={{
														padding: '50px',
														display: 'block'
													}}>
														<OverlayLoader overlayContainerStyle={{
															position: 'unset',
															backgroundColor: 'unset'
														}} loadingText='Loading...' active />

													</div>
												)
												: !data.length
													? "No results"
													: data.map(({ title, images, id }) => {
														return (
															<Link key={id} onClick={() => {
																setSearchValue("");
																closeSearch();
															}} className={s.item} to={`/products/${id}`} >
																<div className={s.image}
																	style={{ backgroundImage: `url(${images[0]})` }} />
																<div className={s.title}>
																	{title}
																</div>
															</Link>
														);
													})}
										</div>
									)}
								</form>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}

export default SearchModal