import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test('footer copy true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
});
  
test('footer copy false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
});

test('getFullYear', () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
});

test('getLatestNotification', () => {
    expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});