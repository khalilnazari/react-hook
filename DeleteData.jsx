import useDeleteData from './useDeleteData';

const MyComponent = ({id}) => {
  const [deleteData, data, isLoading, error] = useDeleteData('https://127.0.0.0:8000/api/user/'+id);

  const handleDeleteClick = () => {
    deleteData();
  };

  return (
    <div>
        {isLoading && <p>Deleting data...</p>}
        {error && <div>Error: {error.message}</div>}

        <button onClick={handleDeleteClick}>Delete</button>
        {data && (
            <div>
            <p>Deleted {data.id}</p>
            </div>
        )}
    </div>
  );
};

export default MyComponent;
