import { loadOhMyLive2D } from 'oh-my-live2d';
loadOhMyLive2D({
  mobileShow: false,
  tips: {
    idleTips: {
      remote() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ text: 'hello world' });
          }, 3000);
        });
      }
    }
  }
});
