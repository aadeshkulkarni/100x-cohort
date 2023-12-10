/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  list = []
  add = function(task){
    this.list.push(task)
  }
  remove = function(index){
    if(index < this.list.length){
      this.list = this.list.filter((t,i)=>i!==index)
    }
  }
  update = function(index, updatedToDo){
    if(index < this.list.length){
      this.list[index] = updatedToDo
    }
  }
  getAll = function(){
    return this.list
  }
  get = function(index){
    if(index < this.list.length){
      return this.list[index]
    }
    return null
  }
  clear = function(){
    this.list.length = 0
  }

}

module.exports = Todo;
