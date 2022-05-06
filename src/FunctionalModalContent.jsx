import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const FunctionalModalContent = React.forwardRef((_, ref) => {
  return (
    // issue: MUI: The modal content node does not accept focus.
    // fix: add tabIndex={-1}
    // https://stackoverflow.com/questions/53951479/react-material-ui-modal-causing-an-error-with-the-tabindex
    <Box sx={style} tabIndex={-1} ref={ref}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  );
});

export default FunctionalModalContent;
