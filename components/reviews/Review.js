import Link from 'next/link'
import PageSection from '../PageSection'

const Review = (props) => (
	<PageSection>
		<h2>Trip Report</h2>
		<div className="comment-box">
		<form method="post">
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Add a public comment..."
              name="name"
              type="text"
            />
            <button className="button primary">Comment</button>
          </div>
         </form>
         </div>
		<ul className="review-list">
			<li className="review">
				<div className="reviewer-wrapper">
					<img src="https://i.pravatar.cc/300" className="profile-img" />
					<div className="reviewer-data">
						<Link href="">
							<a className="name" >Diver Dan</a>
						</Link>
						<span className="comment">Wrapped in ribbons of turquoise and blue, it’s a wild place, the natural shoreline accented only with a few staircases to help you get to the water’s edge. Royal Springs is a beauty, a rare natural swimming hole off the beaten path along the Suwannee River.</span>
					</div>
				</div>
			</li>
		</ul>
	</PageSection>
)
export default Review;
