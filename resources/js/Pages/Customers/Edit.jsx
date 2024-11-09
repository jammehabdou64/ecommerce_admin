import Form from "./Form";

const EditCustomer = ({ click, data }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Edit User</h1>
      <Form
        data={data}
        formUrl={`/users/${data?.id}`}
        method="patch"
        click={click}
      />
    </div>
  );
};

export default EditCustomer;
