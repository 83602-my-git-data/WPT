   function Fetch(method, url) {
        var promise = new Promise((f1, f2) => {
          var helper = new XMLHttpRequest();
          helper.onreadystatechange = function () {
            if (helper.readyState == 4 && helper.status == 200) {
              var reply = JSON.parse(helper.responseText);
              f1(reply);
            }
          };
          helper.open(method, url);
          helper.send();
        });
        return promise;
      }
