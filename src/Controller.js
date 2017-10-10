
/**
 * where the magic happens
 */
export default class Controller
{
    /**
     * @param {*} config
     */
    constructor(config) {
        this.config = config;
    }

    /**
     * get some
     * @param {object} param0
     * @return {object}
     */
    async work() {
      return 'Success!';
    }
}
