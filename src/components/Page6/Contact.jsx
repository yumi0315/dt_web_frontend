import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Input from "@mui/material/Input";
import "../../CSS/page6.css";
import "./Upload";
import { Upload } from "@mui/icons-material";

const ariaLabel = { "aria-label": "description" };

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        CONTACT
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        PaperProps={{
          style: {
            minWidth: "900px", // 최소 너비 설정
            minHeight: "600px",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          E-Mail
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
            width: "40px",
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div className="EmailHead">
            <div className="EmailComponent">
              <p className="EmailName">수신</p>
              <Input
                inputProps={ariaLabel}
                sx={{ maxHeight: "48px", minWidth: "750px" }}
              />
            </div>
            <div className="EmailComponent">
              <p className="EmailName">참조</p>
              <Input
                inputProps={ariaLabel}
                sx={{ maxHeight: "48px", minWidth: "750px" }}
              />
            </div>
            <div className="EmailComponent">
              <p className="EmailName">제목</p>
              <Input
                inputProps={ariaLabel}
                sx={{ maxHeight: "48px", minWidth: "750px" }}
              />
            </div>
            <div className="EmailComponent">
              <p className="EmailName">파일첨부</p>
              <Upload />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{ width: "70px" }}>
            Send
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
