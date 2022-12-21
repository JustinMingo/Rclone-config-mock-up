import React, { useState } from "react";
import "./SettingsPage.css";
import CurrentRemotes from "./CurrentRemotes"; // Import the styled CurrentRemotes component
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NewRemoteOptions from "./NewRemoteOptions";
import "./NewRemoteOptionsMenu.css";
import BasicTextField from "./BasicTextField";

const options = [
  "New remote", // I CHANGED THE ORDER HERE!!
  "Edit existing remote",
  "Delete remote",
  "Rename remote",
  "Copy remote",
  "Set configuration password"
];

const remotes = [
  { name: "test", type: "s3" },
  { name: "test2", type: "s3" },
  { name: "test3", type: "s3" }
];

function SettingsPage(): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="settings-page">
      <h1 style={{ fontFamily: "Arial" }}>Configuration Rclone</h1>
      <div
        style={{ fontFamily: "Arial", display: "block", marginBottom: "20px" }}
      >
        Current remotes:
      </div>
      <CurrentRemotes remotes={remotes} />
      {selectedOption ? (
        <div>
          <h2
            style={{
              fontFamily: "Arial",
              marginTop: "40px",
              marginBottom: "40px"
            }}
          >
            {selectedOption}
            <div style={{ marginTop: "20px" }}>
              <BasicTextField />
              <select
                className="NewRemoteOptionsMenu"
                style={{ marginTop: "40px" }}
              >
                {NewRemoteOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </h2>
          <button onClick={() => setSelectedOption(null)}>Back to menu</button>
          <button>Next</button>
        </div>
      ) : (
        <div className="option-menu">
          {options.map((option, index) => (
            <button key={index} onClick={() => setSelectedOption(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default SettingsPage;
