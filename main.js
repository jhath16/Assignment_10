var gitAPI="https://api.github.com/users/jhath16";
var reposAPI = "https://api.github.com/users/jhath16/repos";
var orgsAPI = "https://api.github.com/users/jhath16/orgs";
var tiyOrg = "https://api.github.com/orgs/TIY-GVL-FEE-2014-Aug";
var starredAPI ="https://api.github.com/users/jhath16/starred";


function renderTemplate(templateId, container, model) {
  var templateString = $('#' + templateId).text();
  var templateFunction = _.template(templateString);
  var renderedTemplate = templateFunction(model);
  $(container).append(renderedTemplate);
}

$.getJSON(gitAPI).done(function(data) {
  renderTemplate("sidebar",".left", data);   //Use moment.js to convert to correct time
});

$.getJSON(orgsAPI).done(function(orgs) {
  var orgUrl = $.getJSON(tiyOrg).done(function(tiy){
    return tiy.html_url;
  });

  var avatar = orgs.avatar_url;

});

//$.getJSON(gitAPI, ;

//$.getJSON(reposAPI);
