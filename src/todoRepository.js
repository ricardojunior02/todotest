const loki = require('lokijs');

class TodoRepository {
  constructor(){
    const db = new loki('todo', {});
    this.schedule = db.addCollection('schedule');
  }

  list(){
    return this.schedule.find();
  }

  create(data){
    return this.schedule.insertOne(data)
  }
}

module.exports = TodoRepository;

/*const c = new TodoRepository();

c.create({ name: 'Ricardo Junior', age: 26});
c.create({ name: 'Ricardo Pai', age: 46});

console.log('list', c.list())*/