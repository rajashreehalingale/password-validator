function validatePassword(strPassword) {
  let uFlag = false
  let lFlag = false
  let nFlag = false
  let sFlag = false
  let specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '~']

  if ((strPassword.length >= 8)) {
    for (let i = 0; i < strPassword.length; i++) {
      if ((!uFlag) && (strPassword[i] >= 'A') && (strPassword[i] <= 'Z')) {
        uFlag = true
      }
      if ((!lFlag) && (strPassword[i] >= 'a') && (strPassword[i] <= 'z')) {
        lFlag = true
      }
      if ((!nFlag) && (!isNaN(strPassword[i]))) {
        nFlag = true
      }
      if (isNaN(strPassword[i]) && (!sFlag) && (specialArr.indexOf(strPassword[i]) >= 0)) {
        sFlag = true
      }
    }
  }
  if (sFlag && lFlag && nFlag && uFlag) {
    return true
  }

  return false
}

module.exports = validatePassword
