var data = [
  {
    y: sin(),
    x:po(),
    type: 'scatter'
  }
];

var data1= [
  {
    y: tri(),
    x:trix(),
    type: 'scatter'
  }
];



Plotly.newPlot('myDiv', data);
Plotly.newPlot('myDiv1', data1);



function sin() {
  const numpoint = 1000;
  const amplitude = 1;
  const fre =20;
  var angle;
  const max = 1;
  const min = -1;
  const wc = Math.PI / 2;
  var a = [];
  for (let i = 0; i < numpoint; i++) {
    angle = (2 * Math.PI * i) / numpoint;
    a[i] = amplitude * Math.sin(fre * angle);
   
  }
  return a;
}

function po() {
  const numpoint = 1000;
  const amplitude = 1;
  const fre =20;
  var angle;
  var aa = [];
  for (let i = 0; i < numpoint; i++) {
    aa[i] = (2 * Math.PI * i) / numpoint;
  }
  return aa;
}

function tri(){
  const numpoint=100;
  var y=[];
  for(let i=0;i<numpoint;i++){
    if(i%2==0)
      y[i]=1;
    else
      y[i]=-1;
  }
  return y;
}

function trix(){
  const numpoint=100;
  var x=[];
  for(let i=0;i<numpoint;i++){
    x[i]=i;
  }
  return x;
}

// Set the parameters for the square wave
    const frequency = 1; // Frequency in Hz
    const duration = 2; // Duration in seconds
    const samplingRate = 44100; // Sampling rate in samples per second

    // Create the time array
    const numSamples = Math.floor(duration * samplingRate);
    const time = new Array(numSamples);
    for (let i = 0; i < numSamples; i++) {
      time[i] = i / samplingRate;
    }

    // Generate the square wave
    const amplitude = 1;
    const squareWave = new Array(numSamples);
    for (let i = 0; i < numSamples; i++) {
      const t = time[i];
      const signal = Math.sin(2 * Math.PI * frequency * t); // Generate a sine wave
      squareWave[i] = signal >= 0 ? amplitude : -amplitude; // Convert to a square wave
    }

    // Create the plot using Plotly
    const data2= [
      {
        x: time,
        y: squareWave,
        type: 'scatter',
        mode: 'lines',
        line: { shape: 'vh' },
      },
    ];
    const layout = {
      title: 'Square Wave',
      xaxis: { title: 'Time (s)' },
      yaxis: { title: 'Amplitude' },
    };
    Plotly.newPlot('chart', data2, layout);

