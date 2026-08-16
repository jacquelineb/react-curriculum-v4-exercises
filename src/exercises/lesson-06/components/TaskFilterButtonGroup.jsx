const filters = ['All', 'Completed', 'Pending'];

function TaskFilterButtonGroup({ onClick }) {
  return (
    <>
      {filters.map((filter, id) => (
        <button onClick={() => onClick(filter.toLowerCase())} key={id}>
          {filter}
        </button>
      ))}
    </>
  );
}

export default TaskFilterButtonGroup;
