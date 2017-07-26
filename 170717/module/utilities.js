const fs = require('file-system');

var getQuestionList = () => {
    let questionList
    try {
        questionList = JSON.parse(fs.readFileSync('question.json', 'utf-8'));
    } catch (err) {
        console.log(err);
        questionList = [];
    }
    return questionList;
}
var saveQuestionList = (questionList) => {
    fs.writeFileSync('question.json', JSON.stringify(questionList));
}

module.exports = {
    getQuestionList,
    saveQuestionList
};