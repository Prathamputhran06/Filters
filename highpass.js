// Define the input sinewave parameters
const frequency = 10;  // Frequency of the sinewave (in Hz)
const amplitude = 1;  // Amplitude of the sinewave
const samplingRate = 1000;  // Sampling rate (in samples per second)
const duration = 1;  // Duration of the signal (in seconds)
const numSamples = samplingRate * duration;
const max = 1;
const min = -1;

// Generate the input sinewave
const inputSignal = new Array(numSamples).fill(0).map((_, i) => {
  const time = i / samplingRate;
  return amplitude * Math.sin(2 * Math.PI * frequency * time + (Math.random() * (max - min + 1) + min));
});

// Define the high-pass filter parameters
const cutoffFrequency = 20;  // Cutoff frequency of the filter (in Hz)

// Apply the high-pass filter
let filteredSignal = [];
inputSignal.forEach((_, i) => {
  if (i === 0) {
    filteredSignal.push(inputSignal[0]); // No filter applied to the first sample
  } else {
    const cutoff = (2 * Math.PI * cutoffFrequency) / samplingRate;
    const alpha = Math.exp(-cutoff);
    filteredSignal.push(alpha * (filteredSignal[i - 1] + inputSignal[i] - inputSignal[i - 1]));
  }
});

// Create the plot
const trace1 = {
  x: Array.from({ length: numSamples }, (_, i) => i / samplingRate),
  y: inputSignal,
  mode: 'lines',
  name: 'Input Signal'
};

const trace2 = {
  x: Array.from({ length: numSamples }, (_, i) => i / samplingRate),
  y: filteredSignal,
  mode: 'lines',
  name: 'Filtered Signal'
};

const data = [trace1, trace2];

const layout = {
  title: 'High-Pass Filter Example',
  xaxis: { title: 'Time (s)' },
  yaxis: { title: 'Amplitude' }
};

Plotly.newPlot('chart', data, layout);
