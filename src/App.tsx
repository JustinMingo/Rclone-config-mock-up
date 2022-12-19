import React, { useState } from "react";
import "./SettingsPage.css";
import CurrentRemotes from "./CurrentRemotes"; // Import the styled CurrentRemotes component

const options = [
  "Edit existing remote",
  "New remote",
  "Delete remote",
  "Rename remote",
  "Copy remote",
  "Set configuration password",
  "Quit configuration"
];

const remotes = [
  { name: "test", type: "s3" },
  { name: "test2", type: "s3" },
  { name: "test3", type: "s3" }
];

function SettingsPage() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="settings-page">
      <h1 style={{ fontFamily: "Arial" }}>Configuration Rclone</h1>
      <div
        style={{ fontFamily: "Arial", display: "block", marginBottom: "10px" }}
      >
        Current remotes:
      </div>
      <CurrentRemotes remotes={remotes} />
      {selectedOption ? (
        <div>
          <h2 style={{ fontFamily: "Arial" }}>{selectedOption}</h2>
          <button onClick={() => setSelectedOption(null)}>Back to menu</button>
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
