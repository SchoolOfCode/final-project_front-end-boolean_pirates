import Layout from "../components/layout";
import { useFetchUser } from "../lib/user";
import Card from "../components/card.jsx";
import Image from "next/image";

const Home = () => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      {loading && <p>Loading login info...</p>}

      {!loading && !user && <></>}

      {user && (
        <>
          <h4>Rendered user info on the client</h4>
          <img src={user.picture} alt="user picture" />
          <p>nickname: {user.nickname}</p>
          <p>name: {user.name}</p>
        </>
      )}
      <Image
        src="https://static.vecteezy.com/system/resources/previews/004/828/251/large_2x/working-together-to-protect-the-environment-earth-day-two-hands-hold-the-two-green-worlds-together-environment-and-reduce-global-warming-help-the-world-in-ecological-sustainability-concept-free-photo.jpg"
        width={2835}
        height={1960}
      />
      <div>
        <h2>
          From wind turbines to window farms, find your next project with
          Redeem.
        </h2>
      </div>

      <Card
        imageURL="/img/card-top.jpg"
        title="Frozen Lake"
        description=" Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        hashtag1="cheese"
        hashtag2="bread"
        hashtag3="cake"
      />
    </Layout>
  );
};

export default Home;
