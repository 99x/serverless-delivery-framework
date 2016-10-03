var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3';
});

app.controller('Ctrl', function($scope, $filter, $http) {

  $http.get('https://ezh9ingj6l.execute-api.us-east-1.amazonaws.com/dev/users/getUsers')
            .then(function(response) {
                $scope.users = response.data.data.Items;

            });



    console.log($scope.users);


    $scope.statuses = [{
        value: 'v1',
        text: 'v1'
    }, {
        value: 'v2',
        text: 'v2'
    }];

    $scope.groups = [];
    $scope.loadGroups = function() {
        return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
            $scope.groups = data;
        });
    };

    $scope.showGroup = function(user) {
        if (user.group && $scope.groups.length) {
            var selected = $filter('filter')($scope.groups, {
                id: user.group
            });
            return selected.length ? selected[0].text : 'Not set';
        } else {
            return user.groupName || 'Not set';
        }
    };

    $scope.showStatus = function(user) {
        var selected = [];
        if (user.status) {
            selected = $filter('filter')($scope.statuses, {
                value: user.status
            });
        }
        return selected.length ? selected[0].text : 'Not set';
    };

    $scope.checkName = function(data, id) {
        if (id === 2 && data !== 'awesome') {
            return "Username 2 should be `awesome`";
        }
    };

    $scope.saveUser = function(data, id) {
        //$scope.user not updated yet
        console.log(JSON.stringify(data));
        $http.post('https://ezh9ingj6l.execute-api.us-east-1.amazonaws.com/dev/createUser', data).then(function(response) {
              $scope.users = response.data.data.Items;

          });

    };

    // remove user
    $scope.removeUser = function(index) {
        $scope.users.splice(index, 1);
    };

    // add user
    $scope.addUser = function() {
        $scope.inserted = {
            id: $scope.users.length + 1,
            name: '',
            status: null,
            group: null
        };
        $scope.users.push($scope.inserted);
    };
});

// --------------- mock $http requests ----------------------
app.run(function($http) {
  /*
    $httpBackend.whenGET('/groups').respond([{
        id: 1,
        text: 'user'
    }, {
        id: 2,
        text: 'customer'
    }, {
        id: 3,
        text: 'vip'
    }, {
        id: 4,
        text: 'admin'
    }]);




    $httpBackend.whenPOST(/\/saveUser/).respond(function(method, url, data) {
        data = angular.fromJson(data);
        return [200, {
            status: 'ok'
        }];
    });

    */
});
