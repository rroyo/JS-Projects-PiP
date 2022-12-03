const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt to select media stream, pass to video element, the play
async function selectMediaStream() {
    try {
        // Waiting for the user to select which media stream they want to share
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Passes the media stream into de video object
        videoElement.srcObject = mediaStream;
        // When the video has finished loading its metadata, we play the video
        videoElement.onloadedmetadata = () => videoElement.play();
    } catch (error) {
        console.error("selectMediaStream: ", error);
    }
}

button.addEventListener("click", () => {
    //Disable button
    button.disabled = true;
    // Start PiP
    videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

selectMediaStream();
