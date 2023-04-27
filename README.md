First, run the server:

```bash
npm start
# or
yarn start
```
Server starts on  [http://localhost:8000](http://localhost:8000).

Server description:

1. Server is created using Nodejs and expressjs.
2. The sample_data is loaded onto the MongoDB atlas on staring the server.
3. Five routes viz. /data1, /data2, /data3, /data4, /data5 are created and each endpoint uses mongoose to query data from MongoDB database.
4. Mongoose query are fast and efficient to retrieve data quickly and then selected documents are returned as response in JSON format from each endpoint.
5. .env files created to store and hide mongodb url.
