// you can invoke either of these commands:
// mongo localhost:27017/japanesedb load-japanese.js
// mongo localhost:27017/japanesedb --quiet load-japanese.js

// drop the current database 
db.dropDatabase()

// insert data 
db.dictionary.insert({ english: 'eat',    japanese: 'たべる'});
db.dictionary.insert({ english: 'drink',  japanese: 'のむ'});
db.dictionary.insert({ english: 'return', japanese: 'かえる'});
db.dictionary.insert({ english: 'dance',  japanese: 'おどる'});
db.dictionary.insert({ english: 'guess',  japanese: 'アングルにわとてもかっこいいですよ！'});

