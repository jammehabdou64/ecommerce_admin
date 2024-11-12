import Form from "./Form";

const EditUser = ({ data }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Edit User</h1>
      <Form data={data} formUrl={`/users/${data?.id}`} method="patch" />
    </div>
  );
};

export default EditUser;
