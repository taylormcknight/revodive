import PageSection from "./PageSection";
import ArticleFeed from "./ArticleFeed";
import ArticleGrid from "./grids/ArticleGrid";
import Link from 'next/link'


function RelatedArticles(props) {
	return (
		<PageSection>
			<div className="page-section__title-wrapper">
				<span className="title-cta">
                <Link href="">
                    <a>
                    View all Articles ->
                    </a>
                </Link>
                </span>
	            <h2>What We're Reading</h2>
	            <p>Check out these related articles from around the web</p>
	            <ArticleGrid gridsize="grid-3">
					{ props.children }
				</ArticleGrid>
			</div>
        </ PageSection>
	)
}
export default RelatedArticles