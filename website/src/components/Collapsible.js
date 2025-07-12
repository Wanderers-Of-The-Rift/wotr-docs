import React, { useState, useEffect } from 'react';

export default function Collapsible({ title, id, forceOpen = false, children }) {
  const [open, setOpen] = useState(forceOpen);

  useEffect(() => {
    if (forceOpen) setOpen(true);
  }, [forceOpen]);

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
