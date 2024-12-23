// Date utility functions
export const getCurrentMonth = () => {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const formatMonthYear = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  });
};

export const isCurrentMonth = (dateString) => {
  const date = new Date(dateString);
  const currentDate = new Date();
  return date.getMonth() === currentDate.getMonth() && 
         date.getFullYear() === currentDate.getFullYear();
};