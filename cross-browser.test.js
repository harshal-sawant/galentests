var operatingSystems = {
  windows: {
    osName: "Windows"
  }
};

var browsers = {
  chrome: {
    browserName: "chrome"
  },
	ie: {
    browserName: "ie"
  }
};

forAll(operatingSystems, function () {
  forAll(browsers, function () {
    test("Test on ", function (os, browser) {
			var driver = createDriver("http://galenframework.com","320x480", browser.browserName);
			checkLayout(driver, "test.gspec", ["all"]);
			driver.quit();
    });
  }); 
});

/*----------------------------------------------------------------------*/

/*
test("Home page test on mobile device", function () {
  var driver = createGridDriver("http://localhost:4444/wd/hub", {
    browser: "chrome",
    browserVersion: "",
    platform: "WINDOWS",
    size: "1024x768"
  });
	driver.get("http://galenframework.com");
	checkLayout(driver, "test.gspec", ["all"]);
	driver.quit();
});*/
/*----------------------------------------------------------------------*/

/*
var browsers = {
  ie: {
    browserName: "firefox"
  }
};

forAll(browsers, function () {
	test("Test on ", function (browser) {

		var driver = createGridDriver("http://localhost:4444/wd/hub", {
			browser: browser.browserName,
			browserVersion: "",
			platform: "WINDOWS",
			size: "1024x768"
		});
		driver.get("http://galenframework.com");
		checkLayout(driver, "test.gspec", ["all"]);
		driver.quit();
	});
}); */