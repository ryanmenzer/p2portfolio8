$(document).ready(function() {
  var todoTemplate = $.trim($('#todo_template').html());

  function bindEvents() {
    // Bind functions which add, remove, and complete todos to the appropriate
    // elements
    $('.add').on('click', addTodo);
    $('body').on('click', '.delete', deleteTodo);
    $('body').on('click', '.complete', completeTodo);
  }

  function addTodo() {
    var new_todo = $('.toolbox input').val();
    var todo_template = $('#todo_template .todo').clone();

    $(todo_template).children("h2").text(new_todo);
    $(todo_template).appendTo(".todo_list");
  }

  function deleteTodo(event) {
    event.preventDefault();
    $(this).closest('.todo').remove();
  }

  function completeTodo() {
    console.log($(this).parents('ul').siblings('h2'));
    $(this).parents('ul').siblings('h2').addClass('todo').addClass( "complete" );
    // .css({"text-decoration": 'line-through', "color": "red"});
  }

  function buildTodo(todoName) {
    // Creates an jQueryDOMElement from the todoTemplate.
    var $todo = $(todoTemplate);
    // Modifies it's text to use the passed in todoName.
    $todo.find('h2').text(todoName);
    // Returns the jQueryDOMElement to be used elsewhere.
    return $todo;
  }
  

  bindEvents();
});
