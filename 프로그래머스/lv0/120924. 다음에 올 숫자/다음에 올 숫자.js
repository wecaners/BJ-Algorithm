function solution(common) {
  for (let i = 0; i <= common.length; i++) {
    if (common[i + 1] - common[i] === common[i + 2] - common[i + 1]) {
      const AP = common[i + 1] - common[i];
      return common[common.length - 1] + AP;
    } else if (common[i + 1] / common[i] === common[i + 2] / common[i + 1]) {
      const GR = common[i + 1] / common[i];
      return common[common.length - 1] * GR;
    }
  }
}