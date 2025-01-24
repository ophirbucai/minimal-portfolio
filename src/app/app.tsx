import { GoButton } from "@/components/go-button/go-button";
import { ThemeToggle } from "@/components/theme-toggle/theme-toggle";
import { useState } from "react";
import styles from "./app.module.css";

export function App() {
  const [loading, setLoading] = useState(false);

  async function send() {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
  }

  return (
    <div>
      <ThemeToggle />
      <GoButton type="button" loading={loading} onClick={send}>
        Submit
      </GoButton>
    </div>
  );
}

export default App;
