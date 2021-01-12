import Link from 'next/link'
import PageSection from '../PageSection'

const Review = (props) => (
	<PageSection>
		<h2>Experience Reviews</h2>
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
						</Link> <span>• February 2020</span>
						<span className="comment">The Royal Springs lived up to the name! We had a great time diving.</span>
					</div>
				</div>
				
			</li>
		</ul>
	</PageSection>
)
export default Review;
