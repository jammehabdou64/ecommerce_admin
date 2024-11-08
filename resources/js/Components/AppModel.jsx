const AppModel = ({ children, openModal }) => {
  return (
    <div
      className={`${openModal ? "block" : "hidden"} fixed top-0 w-full modal-container`}
    >
      <div>{children}</div>
    </div>
  );
};

export default AppModel;
