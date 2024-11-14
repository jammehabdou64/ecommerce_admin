import Form from "./Form";

const EditProductForm = ({ data }) => {
  return (
    <div className="flex items-center h-full">
      <h1>Edit Product</h1>
      <Form data={data} method="patch" formUrl={`/products/${data?.id}`} />
    </div>
  );
};

export default EditProductForm;
