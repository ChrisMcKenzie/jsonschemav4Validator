"use strict";angular.module("jsonv",["ui.codemirror"]),angular.module("jsonv").controller("MainCtrl",["$scope",function(a){var b=jjv();a.success="No Errors Found...",a.editorOptions={lineWrapping:!0,lineNumbers:!0,mode:"json"},a.clear=function(){a.schema="",a.data=""};var c={x:50,y:100};a.data=angular.toJson(c,!0);var d={type:"object",properties:{x:{type:"number"},y:{type:"number"}},required:["x","y"]};a.schema=angular.toJson(d,!0),a.$watch("schema",function(c,d){c!==d&&""!==c&&(a.errors=b.validate(angular.fromJson(a.schema),angular.fromJson(a.data)),a.success=a.errors?!1:"No Errors Found...")}),a.$watch("data",function(c,d){c!==d&&""!==c&&(a.errors=b.validate(angular.fromJson(a.schema),angular.fromJson(a.data)),a.success=a.errors?!1:"No Errors Found...")})}]);