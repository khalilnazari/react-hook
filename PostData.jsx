import usePost from './usePost';

const MyComponent = () => {
  const [postData, data, isLoading, error] = usePost('https://127.0.0.0:8000/api/user');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const payload = {};
    formData.forEach((value, key) => {
      payload[key] = value;
    });
    postData(payload);
  };

  return (
    <div>
        {isLoading && <p>Submiting data...</p>}
        {error && <div>Error: {error.message}</div>}

        {/* simpl form for data input */}
        <form onSubmit={handleFormSubmit}>
            <input type="text" name="name" />
            <button type="submit">Submit</button>
        </form>
        
        {data && (
            <div>
                <p>Name: {data.name}</p>
            </div>
        )}
    </div>
  );
};

export default MyComponent;
