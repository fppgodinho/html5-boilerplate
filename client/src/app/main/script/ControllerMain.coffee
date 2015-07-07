"use strict"
class window.ControllerMain
    constructor: (@data) ->
        console.log("Hellow world");
        @getFoo                     = -> return if @data then @data.foo else 'not bar!'