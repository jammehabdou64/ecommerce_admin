import Form from "./Form";

const CreateCustomer = ({ click }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Create Customer</h1>
      <Form data={null} method="post" click={click} />
    </div>
  );
};

export default CreateCustomer;
