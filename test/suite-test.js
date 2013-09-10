require.config({
    baseUrl: '../src',
    paths: {
        jquery: '../lib/jquery/jquery',
        bootstrap: '../lib/bootstrap/bootstrap',
        dieselui: '../src',
        qunit: '../lib/qunit/qunit/qunit'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        }
    }
});

require([
        '../test/dieselui-test',
        '../test/checkbox-test',
        '../test/combobox-test',
        '../test/datagrid-test',
        '../test/pillbox-test',
        '../test/radio-test',
        '../test/search-test',
        '../test/select-test',
        '../test/spinner-test',
        '../test/tree-test',
        '../test/wizard-test'],
    function (dieselTest,
            checkboxTest) {
        dieselTest.run();
        checkboxTest.run();
        QUnit.load();
        QUnit.start();
    });
