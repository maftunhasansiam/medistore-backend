import app from './app';

// import { env } from './config/env';


const port = process.env.PORT;
async function main() {
  try {


    app.listen(port, () => {
      console.log(`MediStore listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();



// feat: implement database schema and environment configuration