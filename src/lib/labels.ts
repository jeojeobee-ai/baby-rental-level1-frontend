import type { Category, Condition, ItemStatus, Method, Result } from './types';

export const CATEGORY_LABELS: Record<Category, string> = {
  MOBILITY: '이동',
  SLEEP: '수면',
  FEEDING: '수유·위생',
  PLAY: '놀이·발달',
};

// 용품 상태: 용품 자체의 물리적 상태
export const CONDITION_LABELS: Record<Condition, string> = {
  GOOD: '좋음',
  FAIR: '사용감 있음',
  NEEDS_REPAIR: '수리 필요',
};

export const METHOD_LABELS: Record<Method, string> = {
  STEAM: '스팀',
  UV: '자외선',
  WASH: '세제 세척',
};

// 소독 결과: 소독 작업 한 번의 결과
export const RESULT_LABELS: Record<Result, string> = {
  PASS: '소독 완료',
  FAIL: '소독 미완료',
};

// 지금 상태: 지금 내보내도 되는지
export const STATUS_LABELS: Record<ItemStatus, string> = {
  AVAILABLE: '대여 가능',
  RENTED: '대여 중',
  AWAITING_SANITIZATION: '소독 대기',
  NEEDS_RESANITIZATION: '재소독 필요',
  NEEDS_REPAIR: '수리 필요',
};

export function ageRange(min: number, max: number) {
  return `${min}~${max}개월`;
}

// 브라우저 기준 오늘 날짜 (YYYY-MM-DD)
export function today() {
  return new Date().toLocaleDateString('en-CA');
}
