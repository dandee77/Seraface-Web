import { LandingPage } from "./pages/LandingPage";

export function App() {
  const handleNavigate = () => {
    // Landing page only
  };

  return <LandingPage navigate={handleNavigate} />;
}
