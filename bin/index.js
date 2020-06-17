#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var program = require("commander");
var fs = require("fs");
var slacker = require("./slack/slack-alert");
var version;
try {
    var json = JSON.parse(fs.readFileSync("./node_modules/cypress-slack-reporter/package.json", "utf8"));
    version = json.version;
}
catch (e) {
    try {
        var json = JSON.parse(fs.readFileSync("./node_modules/mochawesome-slack-reporter/package.json", "utf8"));
        version = json.version;
    }
    catch (e) {
        version = "Cannot determine version";
    }
}
program
    .version("git@github.com:YOU54F/cypress-slack-reporter.git@" + version, "-v, --version")
    .option("--vcs-provider [type]", "VCS Provider [github|bitbucket|none]", "github")
    .option("--ci-provider [type]", "CI Provider [circleci|none|custom]", "circleci")
    .option("--custom-url [type]", "On selected --ci-provider=custom this link will be set to Test Report", "circleci")
    .option("--report-dir [type]", "mochawesome json & html test report directory, relative to your package.json", "mochareports")
    .option("--screenshot-dir [type]", "cypress screenshot directory, relative to your package.json", "cypress/screenshots")
    .option("--video-dir [type]", "cypress video directory, relative to your package.json", "cypress/videos")
    .option("--verbose", "show log output")
    .option("--only-failed", "only send message for failed tests")
    // .option("--s3", "upload artefacts to s3")
    .parse(process.argv);
var ciProvider = program.ciProvider;
var vcsProvider = program.vcsProvider;
var reportDir = program.reportDir;
var videoDir = program.videoDir;
var customUrl = program.customUrl;
var screenshotDir = program.screenshotDir;
var onlyFailed = program.onlyFailed;
// const verbose: boolean = program.verbose;
if (program.verbose) {
    // tslint:disable-next-line: no-console
    console.log(" ciProvider:- " + ciProvider + "\n", "customUrl:- " + customUrl + "\n", "vcsProvider:- " + vcsProvider + "\n", "reportDirectory:- " + reportDir + "\n", "videoDirectory:- " + videoDir + "\n", "screenshotDirectory:- " + screenshotDir + "\n");
}
slacker.slackRunner({
    ciProvider: ciProvider,
    vcsRoot: vcsProvider,
    reportDir: reportDir,
    videoDir: videoDir,
    screenshotDir: screenshotDir,
    customUrl: customUrl,
    onlyFailed: onlyFailed,
});
