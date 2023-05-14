import Welcome from "./components/Welcome";
import StarsCanvas from "./components/canvas/Stars";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary relative">
      <Welcome />
      <StarsCanvas />
    </main>
  );
}
