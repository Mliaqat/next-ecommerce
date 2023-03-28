
function EventList(props) {
    const{ items}=props
    console.log(items);
  return (
    <ul>
      {items?.map((data) => (
        <li key={data.id}>{data?.title}</li>
      ))}
    </ul>
  );
}

export default EventList;
