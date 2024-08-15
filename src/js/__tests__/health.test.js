import { healthColor } from '../unit';

const dataList = [
    [{ name: "Варвар", health: 4 }, "critical"],
    [{ name: "Маг", health: 99 }, "healthy"],
    [{ name: "Лучник", health: 51 }, "healthy"],
    [{ name: "Мечник", health: 50 }, "wounded"],
    [{ name: "Некромант", health: 15 }, "wounded"],
    [{ name: "Танк", health: 12 }, "critical"],
  ];

  test.each(dataList)('testing unit name %s with health %i', (objUnit, expected) => {
    const result = healthColor(objUnit);
    expect(result).toEqual(expected);
  });
  