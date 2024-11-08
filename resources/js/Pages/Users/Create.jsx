import Form from "./Form";

const CreateUser = ({ click }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Create User</h1>
      <Form data={null} formUrl={"/users"} method="post" click={click} />
    </div>
  );
};

export default CreateUser;
