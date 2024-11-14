import Form from "./Form";
const CreateProductForm = () => {
  return (
    <div className="flex items-center h-full">
      <h1>Create Product</h1>
      <Form data={null} method="post" formUrl={`/products`} />
    </div>
  );
};

export default CreateProductForm;
