import Data from "../schema/schema.js";

export const data1 = async (req, res) => {
  //   Data.createIndex({ income: 1, car: 1 });

  const datas = await Data.find({
    $and: [
      { car: { $in: ["BMW", "Mercedes"] } },
      { $expr: { $lt: [{ $toDouble: { $substr: ["$income", 1, -1] } }, 5] } },
    ],
  });

  console.log(datas);
  res.json(datas);
};

export const data2 = async (req, res) => {
  const datas = await Data.find({
    gender: "Male",
    $expr: {
      $gt: [{ $toInt: "$phone_price" }, 10000],
    },
  });
  console.log(datas);
  res.json(datas);
};

export const data3 = async (req, res) => {
  const datas = await Data.find({
    $and: [
      { last_name: /^M/ },
      { email: { $regex: /M/, $options: "i" } },
      { $expr: { $gt: [{ $strLenCP: "$quote" }, 15] } },
    ],
  }).exec();

  // console.log(datas);
  res.json(datas);
};
export const data4 = async (req, res) => {
  // const regex = /^[^0-9]+$/; // Regular expression to match email without any digit

  const datas = await Data.find({
    $and: [
      { car: { $in: ["BMW", "Mercedes", "Audi"] } },
      { email: { $not: { $regex: /\d/ } } },
    ],
  });

  res.json(datas);
};
export const data5 = async (req, res) => {
    
  const datas = await Data.aggregate([
    {
      $project: {
        city: 1,
        income: { $toDouble: { $substr: ["$income", 1, -1] } },
      },
    },
    {
      $group: {
        _id: "$city",
        count: { $sum: 1 },
        total_income: { $sum: "$income" },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        _id: 0,
        city: "$_id",
        average_income: { $divide: ["$total_income", "$count"] },
      },
    },
  ]);

  res.json(datas);
};
