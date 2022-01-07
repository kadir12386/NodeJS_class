db.movies.find({ rating: { $gt: 8.5 } });
//delete the movie
//1.find and delete
db.movies.deleteMany({ rating: 8.6 });

//only key - name(use projections)
db.movies.find({}, { name: 1 });
db.movies.find({}, { name: 0 }).pretty();
//counting documents
db.movies.find({ rating: { $gt: 8.5 } }).count();

//sorting documents
db.movies.find({}, { name: 1, rating: 1 });
//ascending order of sorting
db.movies.find({}, { name: 1, rating: 1 }).sort({ rating: 1 });
//descending order of sorting
db.movies.find({}, { name: 1, rating: 1 }).sort({ rating: -1 });
db.movies
  .find({}, { name: 1, rating: 1 })
  .sort({ rating: -1, name: 1 })
  .pretty();
//first two, top rated movies - limit
db.movies.find({}).sort({ rating: -1 }).pretty().limit(2);
//skip 3 and 4 th ranked movies/top rated movie(skip)
db.movies.find({}).sort({ rating: -1 }).limit(2).skip(2).pretty();

db.movies.updateMany({ rating: 8 }, { $set: { rating: 8.5 } });

//AGGERAtion
db.orders.insertMany([
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 },
]);

db.orders.find({});
db.orders.aggregate([
  { $match: { status: "urgent" } },
  { $group: { _id: "productName" } },
  { total: { $sum: "$quantity" } },
]);

db.orders.aggregate([{ $match: { status: "urgent" } }, { $group: { _id } }]);
