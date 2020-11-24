/* Template to be compiled */
var students_template, projects_template, project_template;

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
    var source = $("#students-template").html();
    students_template = Handlebars.compile(source);

    var source = $("#projects-template").html();
    projects_template = Handlebars.compile(source);

    var source = $("#project-template").html();
    project_template = Handlebars.compile(source);
})

$("#students-tab").click(function(){
    showTemplate(students_template, career);
    $(".nav-tabs .active").removeClass("active");
    $("#students-tab").addClass("active");
    $(".student-thumbnail").click(function(){
        var index = $(this).data("id");
        current_student = career.students[index];
        showTemplate(projects_template, career.students[index]);
        $(".project-thumbnail").click(function(){
            var index = $(this).data("id");
            current_project = current_student.projects[index];
            showTemplate(project_template,current_project);
        })
    })
})