import Wave from "react-wavify";

export const Waves = () => {
  return (
    <>
      <div id="waves">
        <Wave
          fill="url(#gradient)"
          options={{
            height: 20,
            amplitude: 20,
            speed: 0.15,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(140)">
              <stop offset="32%" stopColor="rgba(125,2,221,5)" />
              <stop offset="100%" stopColor="rgba(79,0,255,5)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      <div id="waves">
        <Wave
          fill="url(#gradient)"
          options={{
            height: 20,
            amplitude: 40,
            speed: 0.2,
            points: 3,
          }}
        >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(0)">
              <stop offset="100%" stopColor="rgba(125,2,221,5)" />
              <stop offset="30%" stopColor="rgba(79,0,255,5)" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </>
  );
};

export default Waves;
