export const mousePoint = Array.from({ length: 8 }).map(() => {
  return { moveX: 0, moveY: 0 };
});

export const Points = (
  centerX: number,
  centerY: number,
  width: number,
  height: number,
  peelOffSize: number
) => {
  const PointArray = [
    {
      x: centerX + mousePoint[0].moveX,
      y: centerY + mousePoint[0].moveY,
    },
    {
      x: centerX + width - peelOffSize + mousePoint[1].moveX,
      y: centerY + mousePoint[1].moveY,
    },
    {
      x: centerX + width - peelOffSize * 0.9 + mousePoint[2].moveX,
      y: centerY + peelOffSize * 0.4 + mousePoint[2].moveY,
    },
    {
      x: centerX + width - peelOffSize + mousePoint[3].moveX + 10,
      y: centerY + peelOffSize + mousePoint[3].moveY - 5,
    },
    {
      x: centerX + width - peelOffSize + 70 + mousePoint[4].moveX,
      y: centerY + peelOffSize * 0.7 + mousePoint[4].moveY,
    },
    {
      x: centerX + width + mousePoint[5].moveX,
      y: centerY + peelOffSize + mousePoint[5].moveY,
    },
    {
      x: centerX + width + mousePoint[6].moveX,
      y: centerY + height + mousePoint[6].moveY,
    },
    {
      x: centerX + mousePoint[7].moveX,
      y: centerY + height + mousePoint[7].moveY,
    },
  ];

  return PointArray;
};
