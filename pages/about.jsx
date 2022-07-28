import Layout from '../components/layout';
import { useFetchUser } from '../lib/user';
import Navbar from '../components/navbar';

const About = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Navbar />
      <h1>About</h1>
      <p>
        This is the about page, navigating between this page and <i>Home</i> is
        always pretty fast. However, when you navigate to the <i>Profile</i>{' '}
        page it takes more time because it uses SSR to fetch the user first;
      </p>
    </Layout>
  );
};

export default About;
