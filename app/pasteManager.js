export default function(state, emitter) {
  emitter.on('DOMContentLoaded', () => {
    document.body.addEventListener('paste', event => {
      if (state.route === '/' && !state.transfer) {
        event.preventDefault();

        const target = event.clipboardData;
        // TODO Not sure yet what checks would be applicable
        /*
        if (target.files.length === 0) {
          return;
        }
        if (target.files.length > 1 || target.files[0].size === 0) {
          return alert(state.translate('uploadPageMultipleFilesAlert'));
        }
*/
        const file = target.files[0];
        // TODO change to paste?
        emitter.emit('upload', { file, type: 'drop' });
      }
    });
  });
}
