import { useEffect, useRef, useState } from "react";

const AppModal = ({ children, openModal = false }) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(openModal);
  useEffect(() => {
    setIsOpen(openModal);

    if (openModal) {
    }
  }, [openModal]);

  const handleClick = (event) => {
    console.dir(event.target.closet);
  };

  return (
    <div
      onClick={handleClick}
      className={`${isOpen ? "block" : "hidden"} fixed top-0 left-0 w-full h-screen modal-container`}
    >
      <div className="h-full min-w-[500px]" id="modal-wrapper" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default AppModal;
