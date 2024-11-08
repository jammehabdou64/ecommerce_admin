const AppModal = ({ children, openModal }) => {
  return (
    <div
      className={`${openModal ? "block" : "hidden"} fixed top-0 left-0 w-full h-screen modal-container`}
    >
      <div className=" h-full min-w-[500px]">{children}</div>
    </div>
  );
};

export default AppModal;
