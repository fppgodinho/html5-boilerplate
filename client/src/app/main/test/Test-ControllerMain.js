describe('ControllerMain', function () {

    describe('create()', function () {
        var main    = new ControllerMain({foo: "bar"});

        it('should return "bar" when getFoo is invoked', function () {
            main.getFoo().should.equal("bar");
        });
    });
});