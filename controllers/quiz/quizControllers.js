const axios = require('axios');

const quizController = {

    async getCategories(req, res) {
        try {
          const response = await axios.get('https://opentdb.com/api_category.php')
res.status(200).json({
        code: 200,
        Massage: `catogories`,
        data: response.data.trivia_categories,
      });
    } catch (err) {
      res.status(400).json({
        code: 400,
        Massage: `No Categries were found`,
        error: err,
      });
    }
    },
    
     async getCatCount(req, res) {
       try {
          
         const { cat_id } = req.body;
        const response = await axios.post(`https://opentdb.com/api_count.php?category=${cat_id}`)
   
res.status(200).json({
        code: 200,
        Massage: `catogory count`,
        data: response.data,
      });
    } catch (err) {
      res.status(400).json({
        code: 400,
        Massage: `No Categries were found`,
        error: err,
      });
    }
    },
     
      async getQuestions(req, res) {
         try {
             const { amount, cat_id, diff } = req.body;
             const difficulty = diff?diff:""
        const response = await axios.post(`https://opentdb.com/api.php?amount=${amount}&category=${cat_id}&difficulty=${difficulty}`)
res.status(200).json({
        code: 200,
        Massage: `Question`,
        data: response.data.results,
      });
         } catch (err) {
      res.status(400).json({
        code: 400,
        Massage: `No Categries were found`,
        error: err,
      });
    }
  },


}

module.exports = quizController;