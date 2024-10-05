import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Scatter } from 'recharts';

// Cosmology parameters
const H0 = 70; // Hubble constant in km/s/Mpc
const omegaM = 0.3; // Matter density parameter
const omegaLambda = 0.7; // Dark energy density parameter

// Function to calculate Hubble parameter
function hubbleParameter(z: number) {
  return H0 * Math.sqrt(omegaM * Math.pow(1 + z, 3) + omegaLambda);
}

// Function to calculate look-back time for a given redshift
function lookbackTime(z: number) {
  const dz = 0.1; // Small increment for precision
  let time = 0;

  for (let zPrime = 0; zPrime <= z; zPrime += dz) {
    time += dz / (hubbleParameter(zPrime) * (1 + zPrime));
  }

  return (time * 978.5) / H0; // Convert to billion years (Gyr)
}

function LookBackGraph() {
  const [redshift, setRedshift] = useState(0);

  // Function to handle slider value change
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSliderChange = (event: any) => {
    setRedshift(parseFloat(event.target.value));
  };

  // Generate redshift data points with small increments for accuracy
  const redshiftData = Array.from({ length: 200000 }, (_, i) => {
    const z = i / 10000; // Increments of 0.0001
    return { redshift: z, time: lookbackTime(z) };
  });

  // Calculate the current look-back time for the slider's redshift
  const currentLookBackTime = lookbackTime(redshift);

  return (
    <>
      {/* Line Chart with Look-back Time */}
      <LineChart width={600} height={400} data={redshiftData}>
        <XAxis
          dataKey="redshift"
          domain={[0, 20]} // X-axis range from 0 to 20
          tickCount={11} // Custom tick count
          label={{ value: 'Redshift (z)', position: 'insideBottom' }}
        />
        <YAxis
          domain={[0, 13.5]} // Y-axis range up to 13.5 billion years
          tickCount={14}
          label={{ value: 'Look-back Time (Gyr)', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="time" stroke="#8884d8" />

        {/* Dot that moves based on the slider value */}
        <Scatter data={[{ redshift, time: currentLookBackTime }]} fill="red" />
      </LineChart>

      {/* Slider to change the redshift value */}
      <input type="range" min="0" max="20" step="0.0001" value={redshift} onChange={handleSliderChange} style={{ width: '100%', marginTop: '20px' }} />
      <p>Selected Redshift (z): {redshift.toFixed(4)}</p>
      <p>Look-back Time: {currentLookBackTime.toFixed(6)} Gyr</p>
    </>
  );
}

export default LookBackGraph;
