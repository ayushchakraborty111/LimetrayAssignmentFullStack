import { useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeToggle = () => {
  const [dark, setDark] = useLocalStorage("is_dark", false);

  useEffect(() => {
    document.body.className = dark ? "dark" : "transition1";
  }, [dark]);

  return (
    <button className="btn btn-dark" onClick={() => setDark(!dark)}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
