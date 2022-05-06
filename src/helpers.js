module.exports = {
    run(handlebars) {
        handlebars.registerHelper('eq', function(a, b) {
            return (a === b);
        });
        handlebars.registerHelper('gt', function(a, b) {
        return (a > b);
        });
        handlebars.registerHelper('gte', function(a, b) {
        return (a >= b);
        });
        handlebars.registerHelper('lt', function(a, b) {
        return (a < b);
        });
        handlebars.registerHelper('lte', function(a, b) {
        return (a <= b);
        });
        handlebars.registerHelper('ne', function(a, b) {
        return (a !== b);
        });
    }
}