/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. 
Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создавать
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/
'use strict'

class Post {
    constructor(author, text, date) {
        this.author = author
        this.text = text
        this.date = date
    }

    edit(text) {
        this.text = text
    }
}

class AtAttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted
    }

    edit(text) {
        super.edit(text);
    }

    makeTextHighlighted(highlighted) {
        this.highlighted = true
    }
}

let post1 = new AtAttachedPost('John', 'Hello', '06.11.2021', false)
post1.edit('Bye');
post1.makeTextHighlighted();
console.log(post1.text)
console.log(post1.highlighted)


function Post_2(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post_2.prototype.edit = function (text) {
    this.text = text
}


function AtAttachedPost_2(author, text, date, highlighted) {
    Post_2.call(this, author, text, date);
    this.highlighted = highlighted;
}

AtAttachedPost_2.prototype = Object.create(Post_2.prototype);

AtAttachedPost_2.prototype.makeTextHighlighted = function (highlighted) {
    this.highlighted = true
}




let post2 = new AtAttachedPost_2("Alice", 'Good morning!', '07.11.2021', false)
post2.edit('Good night!');
post2.makeTextHighlighted();
console.log(post2.text)
console.log(post2.highlighted)