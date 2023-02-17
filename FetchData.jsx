import useFetch from './useFetch';

const MyComponent = () => {
  const [data, isLoading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data && (
        <div>
          {data.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
