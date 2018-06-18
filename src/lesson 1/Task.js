function Task (title) {
    this.title = title || 'no title';
};

Task.prototype.logTitle = function() {
    console.log("title:" + this.title);
};

module.exports = {
    Task: Task
};