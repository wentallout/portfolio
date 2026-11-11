import { afterEach, describe, expect, it, vi } from 'vitest';
import { getKhoaAge, getUserLocalTime, getVietnamTime } from './time.js';

describe('getKhoaAge', () => {
	afterEach(() => {
		vi.useRealTimers();
	});

	it('derives the age from the current year', () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2026-06-01T00:00:00Z'));

		expect(getKhoaAge()).toBe(2026 - 1999);
	});

	it('increases with the calendar year', () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2030-01-02T00:00:00Z'));

		expect(getKhoaAge()).toBe(31);
	});

	it('returns a positive integer', () => {
		expect(Number.isInteger(getKhoaAge())).toBe(true);
		expect(getKhoaAge()).toBeGreaterThan(0);
	});
});

describe('local time helpers', () => {
	it('returns a non-empty string for the user timezone', () => {
		expect(typeof getUserLocalTime()).toBe('string');
		expect(getUserLocalTime().length).toBeGreaterThan(0);
	});

	it('returns a non-empty string for Vietnam time', () => {
		expect(typeof getVietnamTime()).toBe('string');
		expect(getVietnamTime().length).toBeGreaterThan(0);
	});

	it('shifts Vietnam time seven hours ahead of UTC', () => {
		vi.useFakeTimers();
		vi.setSystemTime(new Date('2026-01-01T00:00:00Z'));

		const expected = new Date(Date.now()).toLocaleString(undefined, { timeZone: 'Asia/Ho_Chi_Minh' });
		expect(getVietnamTime()).toBe(expected);

		vi.useRealTimers();
	});
});
