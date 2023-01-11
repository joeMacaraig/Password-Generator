import {
  AppBar,
  Button,
  Box,
  Container,
  Typography,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const App = () => {
  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState("");
  const submit = () => {
    const up = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const low = up.toLowerCase();
    const sym = "<>?:{}|+_)(*&^%$#@!~`,./;'[]";
    const num = "1234567890";
    let gen = "";
    let generated = "";
    if (upper) {
      gen = gen + up;
    }
    if (lower) {
      gen = gen + low;
    }
    if (symbol) {
      gen = gen + sym;
    }
    if (number) {
      gen = gen + num;
    }
    for (let i = 0; i < Number(length); i++) {
      generated += gen.charAt(Math.floor(Math.random() * gen.length));
    }
    setPassword(generated);
  };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <Typography variant="h1">Password Generator</Typography>
        <Box
          sx={{
            m: 10,
            p: 5,
            width: "100%",
            display: "flex",
            alignItems: "center",
            border: 1,
          }}
        >
          <Box
            sx={{
              p: 2,
              width: "20%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              sx={{ marginBottom: 2, width: "80%" }}
              label="Password Length"
              variant="outlined"
              value={length}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setLength(e.target.value)
              }
            />
            <FormControlLabel
              label="Uppercase"
              control={
                <Checkbox
                  checked={upper}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setUpper(e.target.checked)
                  }
                />
              }
            />
            <FormControlLabel
              label="Lowercase"
              control={
                <Checkbox
                  checked={lower}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setLower(e.target.checked)
                  }
                />
              }
            />
            <FormControlLabel
              label="Symbol"
              control={
                <Checkbox
                  checked={symbol}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSymbol(e.target.checked)
                  }
                />
              }
            />
            <FormControlLabel
              label="Numbers"
              control={
                <Checkbox
                  checked={number}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setNumber(e.target.checked)
                  }
                />
              }
            />
          </Box>{" "}
          <Box
            sx={{
              p: 2,
              width: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography variant="h5">Password:</Typography>
              <TextField sx={{ m: 2, width: "100%" }} value={password} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Button onClick={submit}>generate</Button>
              <Button onClick={() => navigator.clipboard.writeText(password)}>
                copy
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
