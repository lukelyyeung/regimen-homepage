const photoLabelMapping = {
  photo01: '選用藥材',
  photo02: '成品中藥梘',
  photo03: '宣傳海報',
  photo04: '製作過程： 攪勻原材料',
  photo05: '製作過程： 倒模及冷卻',
  photo06: '團隊合照',
};

export default function getImageLabelByFileName(filename) {
  // @Todo temp solution for image tags, moving to CMS in the future
  return photoLabelMapping[filename] || '';
}
