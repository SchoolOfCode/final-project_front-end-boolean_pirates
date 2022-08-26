<<<<<<< HEAD
import Card from "../components/Card";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0';

export default function Home({ data }) {
  const { user, error, isLoading } = useUser();

  return (
    //whole layout
    <div>
      {/* wrapper for the image and text */}
      <div className="relative justify-self-center w-full h-80 md:min-w-fit">
        {/* TODO fix the white space on full screen on the left */}
        <Image
          src="/images/Larger.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="main-image"
        />
        {/* card */}
        <div className="lg:block absolute text-center bottom-4 left-0 right-0 px-4 py-2 p-4 bg-gray-300 opacity-70 w-10/12 mx-auto rounded-lg">
          <h1 className="text-xl lg:text-3xl text-green-backgroundtext">
            Connect with eco-minded creators who are looking to halt waste and
            help the environment.
          </h1>
        </div>
      </div>
      {/* this is currently unused */}
      <div className="hidden mt-3 text-center bottom-4 left-0 right-0 px-4 py-2 p-4 bg-gray-300 opacity-70 w-10/12 mx-auto rounded-lg">
        <h1 className="text-xl lg:text-3xl text-green-backgroundtext">
          From wind turbines to window farms, find your next project with
          Redeem.
        </h1>
      </div>
      {/* card holder that aligns the cards to center */}
      <div className="flex items-center justify-center mt-2">
        {/* media query which shows different amount of cards on different screen sizes */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2 p-1 py-2">
          {/* Filters the first 6 results before mapping */}
          {data
            .filter((item, index) => index < 8)
            .map((data, index) => (
              <div key={index} className="m-2">
                <Card
                  user={user}
                  imageUrl={data.imageUrl}
                  title={data.title}
                  materials={data.materials}
                  likes={data.likes}
                  date={data.createdAt}
                  id={data._id}
                  creator={data.creator}
                  creatorImageUrl={data.favourites[0]}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = await fetch(`https://backend-soc.herokuapp.com/tutorials`).then(
    (r) => r.json()
  );

  return {
    props: {
      data,
    },
  };
};
=======
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
>>>>>>> 097aa3a26c530f060b00f507449533a9a82515bc
