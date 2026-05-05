import { useMemo } from "react";
import "./Home.css";

function Home() {
  const randomNum = useMemo(() => Math.floor(Math.random() * 1000), []);

  return (
    <div 
      className="home"
      style={{ backgroundImage: `url('https://picsum.photos/1600/900?${randomNum}')` }}
    >
    </div>
  );
}

export default Home;