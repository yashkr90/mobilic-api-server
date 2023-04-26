import fs from "fs";
import Data from "../schema/schema.js"

const data = JSON.parse(fs.readFileSync("../sample_data.json", 'utf-8'))

// console.log(data);

export const importData = async () => {
    try {
      await Data.insertMany(data,{ordered : false })
      console.log('data successfully imported')
      // to exit the process
      process.exit();
      
    } catch (error) {
      console.log('error', error)
    }
  }
