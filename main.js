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

$.getJSON(gitAPI).done(function(profile) {
  renderTemplate("sidebar-profile",".profile", profile);
  renderTemplate("header",".top-right-nav",profile);
});


$.getJSON(orgsAPI).done(function(orgs) {
  $.each(orgs, function(index, org) {
    $.getJSON(org.url).done(function(org_details) {
      renderTemplate("sidebar-org",".organizations",org_details);
    });
  });
});

$.getJSON(reposAPI).done(function(repo) {
  var sorted = _.sortBy(repo, "pushed_at");
  sorted.reverse();
  $.each(sorted, function(index, repository) {
    renderTemplate("repos",".repositories",repository);
  });
});
