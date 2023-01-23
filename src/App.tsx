import React, { useState } from "react";
import "./SettingsPage.css";
import CurrentRemotes from "./CurrentRemotes"; // Import the styled CurrentRemotes component
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NewRemoteOptions from "./NewRemoteOptions";
import "./NewRemoteOptionsMenu.css";
import BasicTextField from "./BasicTextField";
import NewRemote from "./NewRemote";
import EditRemote from "./EditRemote";

const options = [
  "New remote", // I CHANGED THE ORDER HERE!!
  "Edit existing remote"
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
          <React.Fragment>
            {selectedOption === "New remote" ? (
              <NewRemote />
            ) : selectedOption === "Edit existing remote" ? (
              <EditRemote />
            ) : (
              <div> No option selected </div>
            )}
            <button onClick={() => setSelectedOption(null)}>
              Back to menu
            </button>
            <button>Next</button>
          </React.Fragment>
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
