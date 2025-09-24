import { useState } from "react";
import "../../SASS/item/togglesection.css"

function ToggleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="toggle-section">
      <h3
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {title}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "1.2em",
          }}
          aria-label={isOpen ? "Masquer" : "Afficher"}
        >
          {isOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" style={{ verticalAlign: "middle" }}>
              <polyline
                points="5,11 9,7 13,11"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" style={{ verticalAlign: "middle" }}>
              <polyline
                points="5,7 9,11 13,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </h3>

      {isOpen && <div className="toggle-content">{children}</div>}
    </div>
  );
}

export default ToggleSection;
