import { useEffect, useState } from "react";

const FollowMause = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("Efecto", { enabled });

    const handlerMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handlerMove);
    }

    return () => {
      window.removeEventListener("pointermove", handlerMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} Seguir puntero
      </button>
    </>
  );
};

function App() {
  const [mounted, setMounted] = useState(true);
  return (
    <main>
      {mounted && <FollowMause />}
      <button onClick={() => setMounted(!mounted)}>
        Toggle mounted FolloMouse component
      </button>
    </main>
  );
}

export default App;
