import Form from "./Form";

const CreateCustomer = () => {
  return (
    <div className="flex items-center h-full">
      <h1>Create Customer</h1>
      <Form data={null} method="post" formUrl={`/customers`} />
    </div>
  );
};

export default CreateCustomer;
