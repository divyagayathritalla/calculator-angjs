var a = angular.module("myApp", []);
a.service("calcService", function () {
  {
    this.add = function (a, b) { return a + b; }
    this.sub = function (a, b) { return a - b; }
    this.mul = function (a, b) { return a * b; }
    this.div = function (a, b) { return a / b; }
    this.mod = function (a, b) { return a % b; }
  }
});

a.controller("myCtrl", function ($scope, calcService) {
  $scope.preNum = null;
  $scope.displayNum = 0;
  $scope.currentValue = 0;
  $scope.nextNumber = true;
  $scope.pointerExists = 0;
  $scope.enterNum = function (n) {
    if ($scope.displayNum == 0) {
      $scope.displayNum = n;
    }
    else {
      $scope.displayNum += String(n);
    }
  };

  $scope.operator = function (op) {
    if ($scope.displayNum == 0) {
      window.alert("invalid");
    }
    else {
      $scope.preNum = $scope.displayNum;
      $scope.currentValue = $scope.displayNum;
      $scope.function = op;
      $scope.displayNum = 0;

    }
  }

  $scope.getResult = function () {
    if ($scope.displayNum == 0 || $scope.preNum === 0) {
      window.alert("invalid");
    }
    else {
      if ($scope.function == "%") {
        $scope.currentValue = calcService.mod(parseFloat($scope.currentValue), parseFloat($scope.displayNum));
        $scope.displayNum = $scope.currentValue;
        $scope.preNum = null;
      }
      if ($scope.function == "+") {
        $scope.currentValue = calcService.add(parseFloat($scope.currentValue), parseFloat($scope.displayNum));
        $scope.displayNum = $scope.currentValue;
        $scope.preNum = null;
      }
      if ($scope.function == "-") {
        $scope.currentValue = calcService.sub(parseFloat($scope.currentValue), parseFloat($scope.displayNum));
        $scope.displayNum = $scope.currentValue;
        $scope.preNum = null;
      }
      if ($scope.function == "x") {
        $scope.currentValue = calcService.mul(parseFloat($scope.currentValue), parseFloat($scope.displayNum));
        $scope.displayNum = $scope.currentValue;
        $scope.preNum = null;
      }
      if ($scope.function == "/") {
        $scope.currentValue = calcService.div(parseFloat($scope.currentValue), parseFloat($scope.displayNum));
        $scope.displayNum = $scope.currentValue;
        $scope.preNum = null;
      }

    }
  }

  $scope.allClear = function () {
    $scope.displayNum = 0;
    $scope.preNum = null;
    $scope.currentValue = null;
   
  }
  $scope.clearOne = function () {
    $scope.displayNum = $scope.displayNum.slice(0, -1);
    if ($scope.displayNum.length == 0) {
      $scope.displayNum = 0;
    }
  }

});

