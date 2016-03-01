angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AccordionDemoCtrl', function($scope) {
  $scope.x = 0;
  $scope.oneAtATime = false;
  $scope.yesOpen = false;
  $scope.isOpen = false;

  $scope.goBack = function() {
    $scope.currentComment = $scope.comment[$scope.x + 1].value;
    $scope.x += 1;
  };
  $scope.goForward = function() {
    $scope.currentComment = $scope.comment[$scope.x - 1].value;
    $scope.x -= 1;
  };
  $scope.goBackRisk = function() {
    $scope.currentRisk = $scope.dataEntry[$scope.x + 1].entry;
    $scope.x += 1;
  };
  $scope.goForwardRisk = function() {
    $scope.currentRisk = $scope.dataEntry[$scope.x - 1].entry;
    $scope.x -= 1;
  };
  $scope.goBackProvider = function() {
    $scope.currentProvider = $scope.healthEntry[$scope.x + 1].entry;
    $scope.x += 1;
  };
  $scope.goForwardProvider = function() {
    $scope.currentProvider = $scope.healthEntry[$scope.x - 1].entry;
    $scope.x -= 1;
  };
  $scope.goBackSafety = function() {
    $scope.currentSafety = $scope.safetyEntry[$scope.x + 1].entry;
    $scope.x += 1;
  };
  $scope.goForwardSafety = function() {
    $scope.currentSafety = $scope.safetyEntry[$scope.x - 1].entry;
    $scope.x -= 1;
  };


  $scope.comment = [{
    value: "Individual arrested for disorderly contact and public intoxication.  Sister caring for individual and bringing him to appointments.",
    date: "10-01-2015"
  }, {
    value: "This is the second comment",
    date: "10-01-2015"
  }, {
    value: "This is the third comment",
    date: "10-01-2015"
  }, {
    value: "This is the 4 comment",
    date: "10-01-2015"
  }, {
    value: "This is the 5 comment",
    date: "10-01-2015"
  }];
  $scope.dataEntry = [{
    entry: "High Risk Flag set to \"Yes\" on 12/15/2015",
    date: "01-01-2016"
  }, {
    entry: "High Risk Flag set to \"No\" on 12/15/2013",
    date: "12-01-2015"
  }, {
    entry: "High Risk Flag set to \"Yes\" on 12/15/2010",
    date: "11-01-2015"
  }];

  $scope.sorData = [{
    entry: "High Risk Flag: No",
    date: "1st Identified as High Risk: 03-02-2001",
    newdate: "Last Updated: 02-03-2004"
  }];
  $scope.healthEntry = [{
    entry: "John Winters is primary MH provider",
    date: "01-01-2016"
  }, {
    entry: "Robin Williams is primary MH provider",
    date: "12-01-2014"
  }, {
    entry: "Robert Hope is primary MH provider",
    date: "11-01-2013"
  }];

  $scope.providerData = [{
    entry: "Jonathan Winters, MD",
    newentry: "Robin Williams, MD",
     thirdentry: "Robert Hope, MD"
  }];

  $scope.safetyEntry = [{
    entry: "Safety Plan established on 12/29/2015",
    date: "01-01-2016"
  }, {
    entry: "Safety Plan established on 12/29/2013",
    date: "12-01-2015"
  }, {
    entry: "Safety Plan established on 12/29/2012",
    date: "11-01-2015"
  }];

  $scope.planData = [{
    entry: "Safety Plan: No",
    date: "Date Completed: N/A",
  }];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  $scope.myNewData = '';

  $scope.overwrite = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.myData = ' ';
  };

  $scope.addHRData = function() {
    if ($scope.hrData) {
      $scope.dataEntry.unshift({
        entry: $scope.hrData,
        date: "01-08-2016"
      })
      $scope.hrData = '';
    }
    if ($scope.mhData) {
      $scope.healthEntry.unshift({
        entry: $scope.mhData,
        date: "01-08-2016"
      })
      $scope.mhData = '';
    }
    if ($scope.spData) {
      $scope.safetyEntry.unshift({
        entry: $scope.spData,
        date: "01-08-2016"
      })
      $scope.spData = '';
    }
    if ($scope.currentComment != $scope.comment[$scope.x].value) {
      $scope.comment.unshift({
        value: $scope.currentComment,
        date: "01-08-2016"
      })
      $scope.currentComment = $scope.comment[0].value;
    }
    if ($scope.currentRisk != $scope.dataEntry[$scope.x].entry) {
      $scope.dataEntry.unshift({
        entry: $scope.currentRisk,
        date: "01-08-2016"
      })
      $scope.currentRisk = $scope.dataEntry[$scope.x].entry;
    }
    if ($scope.currentProvider != $scope.healthEntry[$scope.x].entry) {
      $scope.healthEntry.unshift({
        entry: $scope.currentProvider,
        date: "01-08-2016"
      })
      $scope.currentProvider = $scope.healthEntry[$scope.x].entry;
    }
    if ($scope.currentSafety != $scope.safetyEntry[$scope.x].entry) {
      $scope.safetyEntry.unshift({
        entry: $scope.currentSafety,
        date: "01-08-2016"
      })
      $scope.currentSafety = $scope.safetyEntry[$scope.x].entry;
    }
  }

  $scope.currentComment = $scope.comment[$scope.x].value;
  $scope.currentRisk = $scope.dataEntry[$scope.x].entry;
  $scope.currentProvider = $scope.healthEntry[$scope.x].entry;
  $scope.currentSafety = $scope.safetyEntry[$scope.x].entry;





});