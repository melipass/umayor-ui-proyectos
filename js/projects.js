/* Template to be compiled */
var projects_template, project_template;

/* Variables to iterate with */
var current_student = career.students[0];
var current_project = current_student.projects[0];

/* Function that instantiates a template */
function showTemplate(template, data){
    var html = template(data);
    $('#content-to-fill').html(html);
}

/* Function that gets called when the document loaded */
$(document).ready(function(){
    var source = $("#projects-template").html();
    projects_template = Handlebars.compile(source);

    var source = $("#project-template").html();
    project_template = Handlebars.compile(source);
})

$("#student-view-tab").click(function(){
    current_student = career.students[0];
    showTemplate(projects_template, current_student);
    $(".project-thumbnail").click(function(){
        var index = $(this).data("id");
        current_project = current_student.projects[index];
        showTemplate(project_template,current_project);
    })
})

$("document").ready(function() { 
    $("#student-view-tab").click()
});