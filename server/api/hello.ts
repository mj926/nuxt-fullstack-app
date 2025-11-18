import { defineEventHandler } from 'h3'; // h3 유틸리티 함수를 명시적으로 가져옵니다.

// 이 함수가 API 요청을 처리하는 서버리스 함수 역할을 합니다.
export default defineEventHandler((event) => {
  // 1. 요청이 들어왔을 때 로그를 먼저 출력합니다.
  // URL 정보 없이 단순한 텍스트로 변경하여 오류 가능성을 줄입니다.
  console.info(`[SERVER LOG] API /api/hello 호출 성공! - ${new Date().toLocaleTimeString()}`);
  
  // 2. 응답 데이터를 반환합니다.
  return {
    message: 'Hello from Nuxt Integrated Backend!',
  }
})