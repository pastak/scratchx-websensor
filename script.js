(function(ext) {
    ext._shutdown = function(){};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    $(window).on('devicelight', function(event) {
      ext.getLightSensor = function(){
        return event.originalEvent.value;
      }
    })

    $(window).on('devicemotion', function(event){
      ext.getAcceleration = function(direction){
        if(!direction){
          return 0;
        }
        return event.originalEvent.accelerationIncludingGravity[direction]
      }
    })

    // blockが呼び出された時に呼ばれる関数を登録する。
    // 下にあるdescriptorでブロックと関数のひも付けを行っている。
    ext.getLightSensor = function() {};
    ext.getAcceleration = function() {};
    ext.getBatteryLevel = function() {
      var battery = navigator.battery;
      if(!battery){
        return 0;
      }else{
        return Math.round(battery.level * 100)
      }
    };

    // ブロックと関数のひも付け
    var descriptor = {
        blocks: [
            ['r', 'Light sensor', 'getLightSensor',null],
            ['r', 'Battery', 'getBatteryLevel',null],
            ['r', 'Acceleration %m.acceleration', 'getAcceleration', 'x'],
        ],
        menus: {
          acceleration: ['x', 'y', 'z']
        }
    };

    ScratchExtensions.register('WebAPI Sensors', descriptor, ext);
})({});
