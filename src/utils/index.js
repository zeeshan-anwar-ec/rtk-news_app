// Current day
const todayDate = new Date();
const year = todayDate.getFullYear();
const month = String(todayDate.getMonth() + 1).padStart(2, "0");
const day = String(todayDate.getDate()).padStart(2, "0");
export const todayCurrentDate = `${year}-${month}-${day}`;

// weak Ago
const weekAgo = new Date(todayDate);
weekAgo.setDate(weekAgo.getDate() - 7);
const oldYear = weekAgo.getFullYear();
const oldMonth = String(weekAgo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
const oldDay = String(weekAgo.getDate()).padStart(2, "0");
export const weekAgoDate = `${oldYear}-${oldMonth}-${oldDay}`;

// month ago date
const monthAgo = new Date(todayDate);
monthAgo.setMonth(monthAgo.getMonth() - 1);
const formateMonthAgo = String(monthAgo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
export const monthAgoDate = `${year}-${formateMonthAgo}-${day}`;

// year ago
const yearAgo = new Date(todayDate);
yearAgo.setMonth(yearAgo.getMonth() - 12);
const yearMonthsAgo = String(monthAgo.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
export const yearMonthsAgoDate = `${year}-${yearMonthsAgo}-${day}`;


export const validImage = async (url) => {
    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "Your User Agent Here" },
      });
      
      return response.status === 200;
    } catch (error) {
      return false;
    }
  };
  
