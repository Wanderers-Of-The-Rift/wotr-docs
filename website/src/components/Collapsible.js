import React, { useState } from 'react';

export default function Collapsible({ title, id, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", fontWeight: "bold", color: "#26ac8f", marginBottom: "4px" }}
      >
        {title}
      </div>
      <div id={id} style={{ display: open ? "block" : "none", paddingLeft: "8px" }}>
        {children}
      </div>
    </div>
  );
}