const forms = [{name: "John Doe"}, {email: "john@gmail.com"}];

function add(form) {
    forms.push(form);
}

function get() {
    return forms;
}

module.exports = {addForm: add, getForms: get};