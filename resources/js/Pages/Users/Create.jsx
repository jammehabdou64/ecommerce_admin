import Form from "./Form";

const CreateUser = () => {
  return (
    <div className="flex items-center h-full">
      <h1>Create User</h1>
      <Form data={null} formUrl={"/users"} method="post" />
    </div>
  );
};

export default CreateUser;
