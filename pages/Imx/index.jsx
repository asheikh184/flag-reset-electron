"use client";

import {
  Button,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import isElectron from "is-electron";
import { useEffect, useState } from "react";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";

const IMX = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    bgcolor: "rgb(0,0,0)",
    boxShadow: 36,
    color: "white",
    p: 4,
    border: "1px solid white",
  };
  const [fieldValue, setFieldValue] = useState();

  useEffect(() => {
    if (isElectron()) {
      window.electronAPI.on("chosen-path", (event, { pathName }) => {
        setFieldValue(pathName);
      });
      // window.electronAPI.send("global-path-find");
      // window.electronAPI.on("global-path-get", (event, { exists, path }) => {
      //   if (exists) {
      //     setFieldValue(path);
      //   }
      // });
    }
  }, []);
  const handleSetCustomePath = (event) => {
    // event.preventDefault();
    window.electronAPI.send("set-custom-path");
  };

  const handleReset = () => {
    window.electronAPI.send("reset-custom-path");
  };
  return (
    <Stack height={"100vh"}>
      <Stack sx={style} spacing={3} width={"100%"}>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <FormLabel sx={{ color: "#ffffff99" }}>Select Custome Path</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
            sx={{
              input: { color: "white" },
              "& .MuiOutlinedInput-notchedOutline": {
                border: "1px solid white !important",
                outline: "none !important",
              },
            }}
            value={fieldValue}
            // defaultValue={defaultPath}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ height: "2em" }}>
                  <IconButton>
                    <FolderCopyIcon
                      color="action"
                      sx={{ color: "white" }}
                      onClick={() => handleSetCustomePath()}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            sx={{
              width: "fit-content",
              alignSelf: "end",
              mt: "1em",
            }}
            variant="contained"
            onClick={handleReset}
          >
            Reset
          </Button>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default IMX;
