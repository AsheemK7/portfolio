import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import "./App.css";

function Torus() {
  return (
    <mesh rotation={[10, 10, 0]}>
      <torusGeometry args={[3, 1, 16, 100]} />
      <meshStandardMaterial color="cyan" />
    </mesh>
  );
}

function Loader() {
  return (
    <div className="loader">
      <h1>Loading...</h1>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    gsap.from(".card", {
      opacity: 0,
      y: 100,
      stagger: 0.3,
      duration: 1
    });

    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      }
    });

  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Canvas className="bg">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Torus />
        <OrbitControls />
      </Canvas>

      <div className="cursor"></div>

      <section className="hero">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Asheem Khan
        </motion.h1>

        <motion.p initial={{ y: 50 }} animate={{ y: 0 }}>
          Full-Stack Developer | Tech Enthusiast
        </motion.p>

        <button className="btn">View Work</button>
      </section>

      <section className="card">
        <h2>Projects</h2>
        <div className="project">Banking System</div>
        <div className="project">CT to MRI Research</div>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <a href="https://linkedin.com/in/asheem-khan-97864228b/" target="_blank">
          LinkedIn
        </a>
      </section>
    </>
  );
}