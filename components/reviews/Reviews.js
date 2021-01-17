import Link from 'next/link'
import Image from 'next/image'
import PageSection from '../PageSection'
import ImageGrid from '../grids/ImageGrid'
import CardImage from '../cards/CardImage'

const Reviews = (props) => (
	<>
		<h2>Top Checkins</h2>
		<ul className="review-list">
			
			<li className="review">
				<div className="reviewer-wrapper">
					<img src="https://i.pravatar.cc/300" className="profile-img" />
					<div className="">
						<Link href="">
							<a className="label label__strong" >Diver Dan</a>
						</Link> 
						<span className="label label__handle">@dan</span> 
						<span className="label">• Feb 4, 2020</span>
						<p>Wrapped in ribbons of turquoise and blue, it’s a wild place, the natural shoreline accented only with a few staircases to help you get to the water’s edge. Royal Springs is a beauty, a rare natural swimming hole off the beaten path along the Suwannee River.</p>
						<ImageGrid>
							<Image
								layout="responsive"
		                        width={700}
		                        height={500}
		                        src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

		                    />
		                    <Image
								layout="responsive"
		                        width={700}
		                        height={500}
		                        src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

		                    />
						</ImageGrid>
						<div className="button-wrapper">
							<button className="button secondary small"><span className="emoji">😀</span> Helpful</button>
							<button className="button secondary small"><span className="emoji">😂</span> Funny</button>
							<button className="button secondary small"><span className="emoji">⭐</span> Save</button>
						</div>
					</div>
				</div>
			</li>
			<li className="review">
				<div className="reviewer-wrapper">
					<img src="https://i.pravatar.cc/300" className="profile-img" />
					<div className="">
						<Link href="">
							<a className="label label__strong label__verified" >Diver Dan</a>
						</Link> 
						<span className="label label__handle">@dan</span> 
						<span className="label">• Feb 4, 2020</span>
						<p>Wrapped in ribbons of turquoise and blue, it’s a wild place, the natural shoreline accented only with a few staircases to help you get to the water’s edge. Royal Springs is a beauty, a rare natural swimming hole off the beaten path along the Suwannee River.</p>
						<ImageGrid>
							<Image
								layout="responsive"
		                        width={700}
		                        height={500}
		                        src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

		                    />
		                    <Image
								layout="responsive"
		                        width={700}
		                        height={500}
		                        src="/images/destinations/north-america/united-states/florida/ponce-de-leon-springs/2467755644_7cfc2a9ace_o.jpg"

		                    />
						</ImageGrid>
						<div className="button-wrapper">
							<button className="button secondary small"><span className="emoji">😀</span> Helpful</button>
							<button className="button secondary small"><span className="emoji">😂</span> Funny</button>
							<button className="button secondary small"><span className="emoji">⭐</span> Save</button>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</>
)
export default Reviews;
