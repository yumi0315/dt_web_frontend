import * as React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Tags() {
  return (
    <Autocomplete
      multiple
      id="tags-outlined"
      options={ShipType}
      sx={{
        width: "350px",
        height: "56px",
        backgroundColor: "white",
      }}
      getOptionLabel={(option) => option.title}
      defaultValue={[ShipType[0], ShipType[1], ShipType[2]]}
      filterSelectedOptions
      renderInput={(params) => <TextField {...params} label="선종" />}
    />
  );
}

const ShipType = [{ title: "COT" }, { title: "LNG" }, { title: "CNT" }];
