var GitRepository = require('nodegit').Repository;
var GitTag = require('nodegit').Tag;
var GitCommit = require('nodegit').Tag;
var pathToRepo = require("path").resolve("./.git");
var config = require("../config.json");

GitRepository.open(pathToRepo).then(function(repository) {
  // Use repository
  repository.getReference('HEAD').then(function(head){
    repository.createLightweightTag(head.target(), config.version)
  })
  
});

