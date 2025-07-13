import Card from './Card';

const listings = [
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=320',
    title: 'Apartment in Bangalore Urban',
    price: "3,422",
    nights: 2,
    rating: 5.0,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=320',
    title: 'Flat in Bangalore Urban',
    price: "6,391",
    nights: 2,
    rating: 4.88,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146950113191217557/original/0f674d67-0cbb-4ed1-9ccf-ae6e5b5188de.jpeg?im_w=320',
    title: 'Loft in Bangalore Urban',
    price: "8,331",
    nights: 2,
    rating: 5.0,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1131789927021539466/original/52a6957f-d4e1-4255-9b5f-f9ef5fc35785.jpeg?im_w=320',
    title: 'Flat in Bangalore Urban',
    price: "3,766",
    nights: 2,
    rating: 4.81,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1347877228756987540/original/0be45a01-9007-4f6e-b11e-6594e909d408.jpeg?im_w=320',
    title: 'Flat in Haralur',
    price: "5,478",
    nights: 2,
    rating: 4.9,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1179561449466069929/original/f4253653-3bea-4dcd-b647-681dd4dd58c9.jpeg?im_w=320',
    title: 'Flat in Haralur',
    price: "7,076",
    nights: 2,
    rating: 4.91,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=320',
    title: 'Apartment in Bangalore Urban',
    price: "3,422",
    nights: 2,
    rating: 5.0,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1096365467309628265/original/aa2f1eed-2157-4932-8be8-ebe60a697732.jpeg?im_w=320',
    title: 'Flat in Bangalore Urban',
    price: "6,391",
    nights: 2,
    rating: 4.88,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-1146950113191217557/original/0f674d67-0cbb-4ed1-9ccf-ae6e5b5188de.jpeg?im_w=320',
    title: 'Loft in Bangalore Urban',
    price: "8,331",
    nights: 2,
    rating: 5.0,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1131789927021539466/original/52a6957f-d4e1-4255-9b5f-f9ef5fc35785.jpeg?im_w=320',
    title: 'Flat in Bangalore Urban',
    price: "3,766",
    nights: 2,
    rating: 4.81,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1347877228756987540/original/0be45a01-9007-4f6e-b11e-6594e909d408.jpeg?im_w=320',
    title: 'Flat in Haralur',
    price: "5,478",
    nights: 2,
    rating: 4.9,
    isGuestFav: true,
  },
  {
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1179561449466069929/original/f4253653-3bea-4dcd-b647-681dd4dd58c9.jpeg?im_w=320',
    title: 'Flat in Haralur',
    price: "7,076",
    nights: 2,
    rating: 4.91,
    isGuestFav: true,
  },
  // Add more...
];

const CardSection = () => {
  return (
    <>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Popular homes in Bengaluru >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Available in Puducherry next weekend >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Stay in Dindigul >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Available in The Nilgiris next weekend >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Homes in Hyderabad >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Available in Coimbatore next weekend >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Places to stay in South Goa >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
    <section className="px-4 md:px-10 py-6 ">
      <h2 className="text-xl font-semibold mb-4">{`Check out homes in Thiruvananthapuram >`}</h2>

      <div className="flex gap-4 overflow-x-auto hide-scrollbar">
        {listings.map((listing, idx) => (
            <Card key={idx} {...listing} />
        ))}
      </div>
    </section>
        </>
  );
};

export default CardSection;
