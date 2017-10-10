import Config from './src/Config';
import Controller from './src/Controller';

exports.handler = async (event, context, callback) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    const config = Config.load();

    const controller = new Controller(config);
    const response = await controller.work();

    return callback(null, response);
  } catch (error) {
    console.log(`Application ERROR: ${error}`);
    return context.fail(`Application Error: ${error}`);
  }
}
