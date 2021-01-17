import Link from 'next/link'
import Image from 'next/image'
import PageSection from './PageSection'
import ImageGrid from './grids/ImageGrid'
import CardImage from './cards/CardImage'

const UserPosts = (props) => (
	<>
	<h2>Top Posts</h2>
	<ImageGrid className="user-posts">
	{ props.children }
	</ImageGrid>
	</>
)
export default UserPosts;
