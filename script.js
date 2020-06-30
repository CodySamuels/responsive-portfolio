function manipulateSidebar(screenSize) {
    if (screenSize.matches) {
        // SMOL
      $("#sidebarDiv").removeClass();
      $("#sidebarDiv").addClass("col-sm d-flex flex-row justify-content-around")
    } else {
        // BIG
        $("#sidebarDiv").removeClass();
        $("#sidebarDiv").addClass("col-sm-1 pt-5 d-flex flex-column align-items-end")
    }
  }
  
  var screenSize = window.matchMedia("(max-width: 540px)")

  manipulateSidebar(screenSize)

  screenSize.addListener(manipulateSidebar)