import Form from "./Form";

const EditCustomer = ({ data }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Edit User</h1>
      <Form data={data} method="patch" formUrl={`/customers/${data?.id}`} />
    </div>
  );
};

export default EditCustomer;
