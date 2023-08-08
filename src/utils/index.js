// Current day
const todayDate = new Date();
const year = todayDate.getFullYear();
const month = String(todayDate.getMonth() + 1).padStart(2, "0");
const day = String(todayDate.getDate()).padStart(2, "0");
export const todayCurrentDate = `${year}-${month}-${day}`;

// Two day before date
const twoDaysAgo = new Date(todayDate);
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
const oldYear = twoDaysAgo.getFullYear();
const oldMonth = String(twoDaysAgo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const oldDay = String(twoDaysAgo.getDate()).padStart(2, "0");
export const twoDaysAgoDate = `${oldYear}-${oldMonth}-${oldDay}`;


// six month before date
const monthAgo = new Date(todayDate);
monthAgo.setMonth(monthAgo.getMonth() - 6);
const sixMonthsAgo = String(monthAgo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
export const sixMonthsAgoDate = `${year}-${sixMonthsAgo}-${day}`;
