export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);
  const minutes = Math.floor(time / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${minutes % 3600}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
