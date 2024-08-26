// 策略组
let strategies = {
  isNoEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value && value.length < length) {
      return errorMsg;
    }
  },
  maxLength: function (value, length, errorMsg) {
    if (value && value.length > length) {
      return errorMsg;
    }
  },

  // 数字字母下划线
  isPassword: function (value, errorMsg) {
    if (!/(^\w+$)/.test(value)) {
      return errorMsg;
    }
  },

  isMobile: function (value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg;
    }
  },
  isNumber: function (value, errorMsg) {
    if (!/^\d*$/.test(value)) {
      return errorMsg;
    }
  },
  // 字母汉字数字（不包括任何符号）
  isChinese: function (value, errorMsg) {
    if (!/^[\u4E00-\u9FA5\uf900-\ufa2d0-9a-zA-Z]+$/.test(value)) {
      return errorMsg;
    }
  },
  // 姓名
  isName: function (value, errorMsg) {
    if (!/^([\u4E00-\u9FA5\uf900-\ufa2d0-9a-zA-Z]·?)*[\u4E00-\u9FA5\uf900-\ufa2d0-9a-zA-Z]$/.test(value)) {
      return errorMsg;
    }
  },
  // 网址链接，必须携带协议头，支持http、https、ipv4、ipv6
  isUrl: function (value, errorMsg) {
    if (value === '') return;
    if (!/^((https?:\/\/)|(www\.))((([0-9]{1,3}\.){3}[0-9]{1,3})|localhost|(([a-zA-Z0-9\\-]+\.)+[a-zA-Z0-9]+)|(\[[0-9a-fA-F:]+\]))/.test(value)) {
      return errorMsg;
    }
  },
  // 身份证校验
  isIDCard: function (value, errorMsg) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
      return errorMsg;
    }
  },
  isEmail: function (value, errorMsg) {
    if (!/^[A-Za-z0-9]+([-._][A-Za-z0-9]+)*@[A-Za-z0-9]+(-[A-Za-z0-9]+)*(\.[A-Za-z]{2,6}|[A-Za-z]{2,4}\.[A-Za-z]{2,3})$/.test(value)) {
      return errorMsg;
    }
  },
};

// 执行器
class Validator {
  constructor(name) {
    this.caches = [];
  }
  // 添加策略的原型方法
  add(value, rules) {
    rules.map(rule => {
      // 处理策略标识 支持minLength：5写法
      let strategyArr = rule.strategy.split(/:|：/); // 策略中携带判断值
      // 1.获取策略标识
      let strategy = strategyArr.shift(); // 头弹法
      // 2.压入校验的值
      strategyArr.unshift(value); // 头插入校验值
      // 3.压入错误提示
      strategyArr.push(rule.errMsg);

      this.caches.push(() => {
        // return strategies[strategy] = (...strategyArr)
        return strategies[strategy].apply(this, strategyArr);
      });
    });
  }
  // 校验开始校验的方法
  start() {
    for (let validatorFun of this.caches) {
      let errText = validatorFun();
      if (errText) {
        return errText;
      }
    }
  }
}

function checkParamsByRules(arr) {
  for (let item of arr) {
    let v = new Validator();
    v.add(item.value, item.rules);
    let errText = v.start(); // 返回最新
    if (errText) {
      return errText;
    }
  }
}

/**
 * 辅助el-form校验方法
 * @param {Array} stratArr 校验规则数组 ['isNoEmpty::必填项']
 * @returns
 */
function getElementFormValidator(stratArr) {
  let rules = stratArr.map(item => {
    let temp = item.split('::');
    return {
      strategy: temp[0],
      errMsg: temp[1],
    };
  });
  return function (formR, formItemV, callback) {
    let errText = checkParamsByRules([
      {
        rules: rules,
        value: formItemV,
      },
    ]);
    // 存在错误
    if (errText) {
      callback(new Error(errText));
    } else {
      callback();
    }
  };
}

export { Validator, checkParamsByRules, getElementFormValidator };
