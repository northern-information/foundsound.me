'use strict';

var wavesurfer1;
document.addEventListener('DOMContentLoaded', function() {
  wavesurfer1 = WaveSurfer.create({
    container: document.querySelector('#waveform1'),
    waveColor: '#4bd400',
    progressColor: '#ffffff',
    backend: 'MediaElement',
    vertical: true,
    barWidth: 2,
    barHeight: 1,
    barGap: null
  });
  wavesurfer1.on('error', function(e) {
      console.warn(e);
  });

  wavesurfer1.load('/assets/audio/Recorded_Audio86.wav');
  document
    .querySelector('[data-action="play1"]')
    .addEventListener('click', wavesurfer1.playPause.bind(wavesurfer1));
});

var wavesurfer2;
document.addEventListener('DOMContentLoaded', function() {
  wavesurfer2 = WaveSurfer.create({
    container: document.querySelector('#waveform2'),
    waveColor: '#4bd400',
    progressColor: '#ffffff',
    backend: 'MediaElement',
    vertical: true,
    barWidth: 2,
    barHeight: 1,
    barGap: null
  });
  wavesurfer2.on('error', function(e) {
      console.warn(e);
  });

  wavesurfer2.load('/assets/audio/Recorded_Audio82.wav');
  document
    .querySelector('[data-action="play2"]')
    .addEventListener('click', wavesurfer2.playPause.bind(wavesurfer2));
});

var wavesurfer3;
document.addEventListener('DOMContentLoaded', function() {
  wavesurfer3 = WaveSurfer.create({
    container: document.querySelector('#waveform3'),
    waveColor: '#4bd400',
    progressColor: '#ffffff',
    backend: 'MediaElement',
    vertical: true,
    barWidth: 2,
    barHeight: 1,
    barGap: null
  });
  wavesurfer3.on('error', function(e) {
      console.warn(e);
  });

  wavesurfer3.load('/assets/audio/Recorded_Audio80.wav');
  document
    .querySelector('[data-action="play3"]')
    .addEventListener('click', wavesurfer3.playPause.bind(wavesurfer3));
});


