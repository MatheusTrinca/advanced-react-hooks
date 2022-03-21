import useFetch from '../hooks/useFetch';

const CustomHookExample1 = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {data.map(post => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  );
};

export default CustomHookExample1;
