const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: 'targets.mind',
    });
    const {renderer, scene, camera} = mindarThree;

  const video = ("ar_video.mp4") => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    //video.addEventListener('loadeddata', () => {
    video.addEventListener('loadedmetadata', () => {
      video.setAttribute('playsinline', '');
      resolve(video);
    });
    video.src = path;
  });
}

    const texture = new THREE.VideoTexture(video);

    const geometry = new THREE.PlaneGeometry(1, 204/480);
    const material = new THREE.MeshBasicMaterial({map: texture});
    const plane = new THREE.Mesh(geometry, material);

    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);

    anchor.onTargetFound = () => {
      video.play();
    }
    anchor.onTargetLost = () => {
      video.pause();
    }
    video.addEventListener( 'play', () => {
      video.currentTime = 6;
    });

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
