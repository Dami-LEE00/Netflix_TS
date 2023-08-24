// 언제 어디서든 가져다 사용하고자 하는 컬러테마 값을 셋팅
// theme => 스타일 컴포넌트 => 전역 컴포넌트 모두 사용할 수 있도록 '테마프로바이더' 
// 라는 컴포넌트의 props: 기본타입 any

import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  red: '#e51013',
  black: {
    veryDark: '#141414',
    darker: '#181818',
    lighter: '#2f2f2f',
  },
  white: {
    lighter: '#fff',
    darker: '#e5e5e5',
  }
}