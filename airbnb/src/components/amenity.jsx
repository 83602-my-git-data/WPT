import { useState } from "react";

function Amenity({ icon, title, value, onChange }) {
  return (
    <div>
      <input
        checked={value}
        onChange={(e) => {
          console.log("On change " + e.target.checked);
          onChange(e.target.checked);
        }}
        className="me-2"
        type="checkbox"
      />
      <i className={"me-2 bi " + icon} style={{ fontSize: 20 }} />
      <span>{title}</span>
    </div>
  );
}

export default Amenity;
