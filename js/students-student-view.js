/* Template to be compiled */
var projects_sv_template, project_sv_template;

/* Variables to iterate with */
var current_project = career.students[1].projects[0];

/* Function that instantiates a template */
function showTemplate(template, data){
    var html = template(data);
    $('#content-to-fill-to').html(html);
}

/* Function that gets called when the document loaded */
$(document).ready(function(){
    var source = $("#student-view-projects-template").html();
    projects_sv_template = Handlebars.compile(source);

    var source = $("#student-view-project-template").html();
    project_sv_template = Handlebars.compile(source);
})


$("#students-view-tab").click(function(){
    showTemplate(projects_sv_template, career.students[1]);
    $(".nav-tabs .active").removeClass("active");
    $("#students-view-tab").addClass("active");
    $(".project-thumbnail").click(function(){
        var index = $(this).data("id");
        current_project = career.students[1].projects[index];
        showTemplate(project_sv_template,current_project);
    })
})

