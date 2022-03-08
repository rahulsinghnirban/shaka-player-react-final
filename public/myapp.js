const manifestUri = 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd';



async function init() {
  // When using the UI, the player is made automatically by the UI object.
  const video = document.getElementById('video');
  const videoContainer=document.getElementById('video_container');
  const ui = video['ui'];
  const controls = ui.getControls();
  const player = controls.getPlayer();
  let hideBar = true;
  const textContainer = document.getElementsByClassName('shaka-text-container');
  const span = textContainer[0];


  const fontColors = document.getElementById("colors");
  const bgColors = document.getElementById("bgcolors");
  const fontSize = document.getElementById("fontSize");
  const fonts = document.getElementById("fonts");
  

  const config={
    'seekBarColors': {
      base: '#185adb',
      buffered: 'rgba(255, 255, 255, 0.54)',
      played: 'rgb(255, 255, 255,0.5)',
      adBreaks: 'rgb(255, 204, 0)'
    }
  }
  ui.configure(config);


  // Attach player and ui to the window to make it easy to access in the JS console.
  window.player = player;
  window.ui = ui;

  // Listen for error events.
  player.addEventListener('error', onPlayerErrorEvent);
  controls.addEventListener('error', onUIErrorEvent);

  // Try to load a manifest.
  // This is an asynchronous process.
  try {
    await player.load(manifestUri);
    // This runs if the asynchronous load is successful.
    console.log('The video has now been loaded!');
  } catch (error) {
    onPlayerError(error);
  }


  //Custom events

  // Changing font color
  fontColors.addEventListener('input', ()=>{
    //if the CC block exists..
    if(textContainer[0].firstChild){
      textContainer[0].style.color=`${fontColors.value}` 
      fontColors.setAttribute('value', fontColors.valued)
    }
  })

  // Changing bg color
  bgColors.addEventListener('input', ()=>{
    if(textContainer[0].firstChild){
      document.styleSheets[6].rules[1].style.setProperty("background-color", `${bgColors.value}`, "important");
    }
  })

  // Changing font style
  fonts.addEventListener('change', ()=>{
    document.styleSheets[6].rules[1].style.setProperty("font-family", `${fonts.value}`);
  })

  // Changing font size
  fontSize.addEventListener('change', ()=>{
    document.styleSheets[6].rules[1].style.setProperty("font-size", `${fontSize.value}`);
  })

}

function onPlayerErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}

function onPlayerError(error) {
  // Handle player error
  console.error('Error code', error.code, 'object', error);
}

function onUIErrorEvent(errorEvent) {
  // Extract the shaka.util.Error object from the event.
  onPlayerError(event.detail);
}

function initFailed(errorEvent) {
  // Handle the failure to load; errorEvent.detail.reasonCode has a
  // shaka.ui.FailReasonCode describing why.
  console.error('Unable to load the UI library!');
}

// Listen to the custom shaka-ui-loaded event, to wait until the UI is loaded.
document.addEventListener('shaka-ui-loaded', init);
// Listen to the custom shaka-ui-load-failed event, in case Shaka Player fails
// to load (e.g. due to lack of browser support).
document.addEventListener('shaka-ui-load-failed', initFailed);

console.log(document.styleSheets)