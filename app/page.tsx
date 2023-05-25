import Welcome from "./components/Welcome";
import StarsCanvas from "./components/canvas/Stars";
import ToasterProvider from "./providers/ToasterProvider";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary relative">
      <ToasterProvider />
      <Welcome />
      <StarsCanvas />
    </main>
  );
}
