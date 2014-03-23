
import ModalController from 'ghost/controllers/modal';

export default ModalController.extend({
    model: function () {
        return {
            title: 'Upload Logo',
            closeable: true,
            confirm: true
        };
    }
});