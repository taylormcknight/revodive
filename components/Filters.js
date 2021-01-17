<div className="filter-wrapper">
			<ul className="filters">
				<li className="filter-set">
					<button className="button filter" id="experience-category-btn" onClick={handleToggle}>Wrecks</button>
					<div id="experience-category-filters" className={`dropdown-menu large checkboxes ${isActive ? "show" : ""}`}>
						<ul className="grid grid-2">
							<li>
								<label className="checkbox-wrapper" for="">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
					  	</ul>
					  	<div className="dropdown-menu-footer">
					  		<button className="link small">Clear</button>
					  		<button className="button primary small">Save</button>
					  	</div>
					</div>
				</li>
			</ul>
		</div>