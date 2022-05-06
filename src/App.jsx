import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ClassModalContent from "./ClassModalContent";
import FunctionalModalContent from "./FunctionalModalContent";

const App = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [openFailedModal, setOpenFailedModal] = React.useState(false);

  const toggleOpenModal = () => setOpenModal(!openModal);
  const toggleOpenFailedModal = () => setOpenFailedModal(!openFailedModal);

  return (
    <div>
      <div>
        <Button onClick={toggleOpenModal}>Open modal</Button>
        <Modal
          open={openModal}
          onClose={toggleOpenModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <FunctionalModalContent />
        </Modal>
      </div>

      {/* failed to open when using class component */}
      <div>
        <Button onClick={toggleOpenFailedModal}>Open failed modal</Button>
        <Modal
          open={openFailedModal}
          onClose={toggleOpenFailedModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ClassModalContent />
        </Modal>
      </div>
    </div>
  );
};

export default App;
