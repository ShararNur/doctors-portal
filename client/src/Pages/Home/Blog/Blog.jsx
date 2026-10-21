import Caudi from '../../../assets/images/people-1.png';
import John from '../../../assets/images/people4.png';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
  const blogsData = [
    {
      name: 'Rashed Kabir',
      date: '22 Aug 2018',
      quote: 'Check at least a doctor in a year for your teeth',
      theme: 'primary',
    },
    {
      img: Caudi,
      name: 'Dr. Caudi',
      date: '23 April 2019',
      quote: '2 times of brush in a day can Keep you healthy',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point ',
    },
    {
      img: John,
      name: 'Dr. John Mitchel',
      date: '23 April 2019',
      quote: 'The tooth cancer is taking a challenge',
      description:
        'It is a long established fact that by the readable content of a lot layout. The point ',
    },
  ];
  return (
    <section className="container my-5">
      <div className="text-center">
        <h5 className="text-primary">OUR BLOG</h5>
        <h1>From Our Blog News</h1>
      </div>
      <div className="my-5 row row-cols-1 row-cols-md-3 g-4">
        {blogsData.map((blog) => (
          <BlogPost blog={blog}></BlogPost>
        ))}
      </div>
    </section>
  );
};

export default Blog;
