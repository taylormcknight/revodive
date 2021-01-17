import Link from 'next/link'

const Suggestion = () => (
	<Link href="/suggestion">
	<a className="button secondary suggestion small">
	<span class="emoji">💡</span> Suggest update
		</a>
	</Link>
)

export default Suggestion;