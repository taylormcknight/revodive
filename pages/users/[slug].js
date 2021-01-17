import {useRouter} from 'next/router'
import BasicLayout from '../../components/page-layouts/BasicLayout'
import PageSection from '../../components/PageSection'
import ImageGrid from '../../components/grids/ImageGrid'
import Suggestion from '../../components/Suggestion'
import Reviews from '../../components/reviews/Reviews'

export default function User({user}) {
  return (
    <>
      <BasicLayout
        PageHeader={true}
        HeroImage={true}
        BreadCrumbs={false}
        hero="/images/experiences/springs/spring-cover.jpg"
        pageClass="sidebar-layout"
      >
      <aside className="left-sidebar">
        <section className="profile">
          <img src="https://i.pravatar.cc/300" className="profile-img" />
          <span className="label__strong label__verified">Taylor McKnight</span>
          <span className="label">@McKnight</span>
          <hr />
          <ul className="meta-info">
            <li><span className="emoji">📍</span> { user.city}, { user.state}</li>
            <li><span className="emoji">🔗</span> rtaylormcknight.com</li>
            <li><span className="emoji">📅</span> Joined December 2019</li>
          </ul>
          <h3>Bio</h3>
          <p>{ user.bio }</p>
          <h3>Lifetime dives</h3>
          <p>33</p>
          <h3>Certifications</h3>
          <ul>
            <li><span className="meta-info">Open Water</span></li>
            <li><span className="meta-info">Advanced Open Water</span></li>
            <li><span className="meta-info">Freediver</span></li>
          </ul>
        </section>
        <button id="edit-profile-btn" className="button secondary small">Edit Profile</button>
      </aside>
      <main>
      <PageSection>
          <h2>Wall</h2>
      </PageSection>
      </main>
      <aside className="right-sidebar">
          <h2>Goals</h2>
          <p>goals go here</p>
      </aside>
      </BasicLayout>
      </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of users
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();

  // Create a path from their ids: `/states/1`, `/states/2` ...
  const paths = users.map((user) => `/users/${user.slug}`);

  // Return paths, fallback is necessary, false means unrecognize paths will
  // render a 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/users?slug=${params.slug}`);
  const [user] = await res.json();

  // console.clear();
  // console.log({ params });
  // console.log(user);
  // users.map((user) => console.log({ name: user.name }));

  return {
    props: {
      user
    },
  };
}