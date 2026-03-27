import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <button className="btn btn-dark" onClick={() => setDark(!dark)}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
