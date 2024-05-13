db.movies.aggregate(
   {$unwind: "$languages"},
   {
      $group:{
         _id:"$languages",
         numberOfFilms:{$sum:1},
      }
   }

);
