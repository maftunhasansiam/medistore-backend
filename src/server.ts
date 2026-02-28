import app from './app';
import config from './config';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';


async function main() {
  try {

 
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
