import * as React from "react";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";
import "../../CSS/page6.css";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const FileInfo = styled("div")`
  display: flex;
  align-items: center;
  align-content: center;
  margin-left: 10px;
  font-size: 12px;
`;

const RemoveButton = styled("button")`
  background: transparent;
  border: none;
  color: gray;
  margin-left: 5px;
  cursor: pointer;
  width: 20px;
  height: 15px;
`;

export default function InputFileUpload() {
  const [file, setFile] = React.useState(null);

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleRemove = () => {
    setFile(null);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Button
        component="label"
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        sx={{
          maxHeight: "30px",
          padding: "0 10px",
          fontSize: "11px",
          minHeight: "25px",
          maxWidth: "90px",
          minWidth: "90px",
          fontFamily: "Spoqa-Mid",
        }}
        startDecorator={
          <SvgIcon sx={{ fontSize: "15px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </SvgIcon>
        }
      >
        Upload
        <VisuallyHiddenInput type="file" onChange={handleChange} />
      </Button>
      {file && (
        <FileInfo>
          {file.name} ({(file.size / 1024).toFixed(2)} KB)
          <RemoveButton onClick={handleRemove}>X</RemoveButton>
        </FileInfo>
      )}
    </div>
  );
}
