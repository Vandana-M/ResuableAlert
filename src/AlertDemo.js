import * as React from "react";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Demo from "./demo";
export default function TextDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [severity, setSeverity] = React.useState("error");
  const [show, setShow] = React.useState(false);

  const handleText = (event) => {
    setValue(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Collapse in={show}>
        <Demo
          open={open}
          severity={severity}
          message={message}
          handleClose={handleClose}
        />
      </Collapse>
      <TextField value={value} onChange={handleText} />
      <Button
        variant="outlined"
        onClick={() => {
          if (value === "") {
            setShow(true);
            setMessage("please enter some text");
            setSeverity("error");
            setOpen(true);
          } else {
            setMessage("success");
            setSeverity("success");
            setShow(true);
            setOpen(true);
          }
        }}
      >
        submit{" "}
      </Button>
    </div>
  );
}
