const trees = `
...#...###......##.#..#.....##.
..#.#.#....#.##.#......#.#....#
......#.....#......#....#...##.
...#.....##.#..#........##.....
...##...##...#...#....###....#.
...##...##.......#....#...#.#..
..............##..#..#........#
#.#....#.........#...##.#.#.#.#
.#..##......#.#......#...#....#
#....#..#.#.....#..#...#...#...
#.#.#.....##.....#.........#...
......###..#....#..#..#.#....#.
##.####...#.............#.##..#
....#....#..#......#.......#...
...#.......#.#..#.........##.#.
......#.#.....###.###..###..#..
##..##.......#.#.....#..#....#.
..##.#..#....#.............##.#
....#.#.#..#..#........##....#.
.....####..#..#.###..#....##..#
#.#.......#...##.##.##..#....#.
.#..#..##...####.#......#..#...
#...##.......#...####......##..
...#.####....#.#...###.#.#...#.
....#...........#.##.##.#......
.....##...#.######.#..#....#..#
.#....#...##....#..######....#.
...#.....#...#####.##...#..#.#.
.....#...##........##.##.##.###
#.#..#....##....#......#....#.#
......##...#.........#....#.#..
###..#..##......##.#####.###.##
#.....#..##.##....#...........#
##..#.#..##..#.#.....#......#..
.#.##.#..#.#....##..#..#....#..
.#......##..##.#...#..#.......#
#....##.##..###..###......##.#.
....###..##.......#.###.#....#.
..##........#........##.....#..
.#..#.....#...####.##...##.....
....#.#.#.....#.##..##.....#..#
..............#.....#...#.....#
.#.....#......###...........#.#
.....#.#......#.##..#..........
.#......###............#.#.##..
.#.#....##.#..###.....#.##..#.#
.......#.#.#..#..#..#...##..#.#
.#.###...##.#.#.####.#.#...#...
...#.#....#......##.##.#.......
#...#.....##....#........##....
.....###...#.##.#......##.#..#.
..#...##.##.###..#..#......####
.#.##.#..#.##..##..........##..
..#.#.#..#.#.....#...###.....#.
..#..#.#....#.##.............##
.......#..###..#.#...#.....##.#
####.#.#......#..#.##.........#
..........#.....#..##......###.
..#..............#...#..##.....
......#.#.#..#.##.....####..##.
.##.#..#.#....#.......#..#.....
..#..#..#.##.#....###.#.#.#.#.#
.....#....#......###..#........
#.#.#..#...###.....#......#.##.
...#.#....#.#......#........#..
..#...###.#...#..#....##...#..#
.###.##..#..#...###.#..#.####..
#....#..##..##..#......#...##..
#.#..#...#..#...###..#.#.##....
##....#....##.####...#.#.###...
##.#...#.......#.##.##....#...#
..#.#..........#..#.#.#....#..#
..#........#...#....#....#....#
..#..#....#.......#........#...
......#....#....##.#....#.#.##.
.##...###.##.##....##.#...###..
.....##..#.#.....###..#.....###
....##.#.##...##..##........#..
#...#..##.#.#....#......#...#..
.###.##.#........#.####....#...
#.##.....#..#...#..##.##..#.#..
.....#.#..#....#..#...##.##.#..
.#......#####...##...#.#.###.#.
#......##....#.....#......##.#.
#.#.##.###.#......#####..#.....
........###.#...#..#.#........#
....#....###..#.##.#...#....#..
..........#..#.#....#...#.#...#
#.##......###.#.#.#....####...#
...#.#....#........##.#.....##.
.....##..#.#.#..###...##...#...
#...#...#....#....##........#..
.....#.........##.#......#..#..
#.....##..#.###.....#....##.##.
...#..#..#.#........##...##.#.#
..#..##.###.....#.#.....###.##.
..###.........#...##.....###...
...###...##.#...##....##.......
.#.#..#...###..#.#....#....#...
##..#.......#....#.#...#..#..#.
..#......#....####..##..#.###.#
..#.......##........#.#.#..#...
.#.......#.##.#.##.#.......#..#
###...#...#...#...#..#...#...##
..#..........#..###........##..
.##..#....##......##........#.#
......#.##......#......##...#.#
.#.#....#.#.#........#......#..
.#.#..#....####..##...##....#..
.#...##..#..#..#####....##.#...
.##.#.#...#...#.#...#.##.#...#.
###.#...##..#.###.#.....#.##.#.
#.....#.###.#.#...#..#....#.#..
..##..#....#......#.........###
.#...#...##......#...#.####....
..#.##...##..............#.#..#
..#......#..##...........#..#.#
..#####...#..#.......##...###..
..##..#....#.#...###.#...#.....
..#....#..#.#.......#..#.#.#...
.##..#.#.....##....#.......#...
...#.#..###...##....#....##..#.
.....##..#...##.####....##...#.
.......#.........#...#.##..####
........###..#..#.##.###..#....
.#.#..#.##.##.........#...#....
.###......#.....#....##....####
.##..##...........#.....#.....#
#.#.#.#.#.#.##..#.#.#..#.##....
.##.##...##..#....##..###..####
#..##.#......#...###.........#.
#..#...#..##..#..##.....##...#.
#...##..#...##.#.###.#...#.....
.###.....#.......#...#.##.###.#
..........#.#......#...###...##
..##....#.#..#....#.###...#..##
#.#..#....##.##..##.........##.
#.....#.##.###.#..#....##...#..
...#........##...#..###..######
#..#.#.#.#...#....#....###.#..#
...##.##.##.....##..#........#.
..#.#....#..#.......#...##.##.#
###.##.......##..#.####...#.#..
....#.#.....##.....#.#.##...#..
.#..##..#.....#.#..#...#..#..#.
.###....##...#......#.....#....
##.##.###......#...#...###.#...
#...#.##...#.#....##.....####..
#.#.#.#...###...##.............
..#....#.....##.#...#......#...
....#...#......#...#..#...#.#..
.###..#.....#..#...#....#...#..
..#...#.#..###.......#..#.#...#
#...###.##.....#....#..#.#..##.
...#.##.#.##......#.#.#.##.....
........####...##...##..#....#.
.#.#....#....#.#...##.###...##.
#.#...###.#.#.#....#....#.#....
.####.#..#.#....#..#.#..#..#...
#####...#...#...#....#.#.#..##.
..###.##.###...#..........#.##.
##.....#...#....###..###.#.#.#.
#..##.#..#..#..#...#.#...###..#
##....#.#...##......#.#...#...#
.##..........#.#....#...#.##..#
....#....####.#.####......#.###
..##.#.....####.#.####.......#.
#.##.##.#.....#.##......##...#.
......###..#.....#.....##......
..#..#....#.#...#.....#......##
##..#..#..###.#.#..#..##.....#.
#....#.#.....#####...#.#.......
.....#..#....#.#.#..#...#...#..
............#.##......##.##.#.#
....#...#.#........###....#....
..#..#...###.#....##..#..###.##
#.##....#...#.....##..#.##.#...
...##..###...#.#.....##.#......
.#..#.##.#####..#.......#..###.
...#.##...###.....####.#.#.....
.#......##.#.#.#.#.##.#.....#..
..#.##.#..##.......#.#.....##..
..................#....#...#...
.##.#..#.#.#..#.......#.#..##.#
....#........#......#..####..#.
#...#...##..##.#..#.......##...
#..#..#..#..#........####..#.#.
..#.#......#..#.##.##.#.#...#.#
...#..#......#.#.###.#.##..##..
..#...##.....#..#...##..#.#....
#.........#....#..#....##.##..#
..#..#.#....#..#...#.##.....#..
...#..#...#.#.....#..##..#.#...
....#........#.#....##..##..#..
#.....#.#..#.......#.##.....#..
.#.###.###...##...##..###...#..
.##.##.......#.#......#.....#.#
...#....##....#..#..........#.#
..#.##.........#.#.....#.....#.
...#.##..##.......##..##...#...
#.##......##.##..#.....##...##.
#.#.#..##...#.#............#.#.
....#.....#......##...#.#.....#
...#.#......#.#...###.......#..
......##..###....#.#...#.#####.
..#..#.#.#...##.#...###..##..#.
##.##.#.#.##.#..#....#...#...#.
#..#....######.##.#...#...#.#..
.#..#.##....#..#.#.......#....#
....#....#......##....##.#.#...
.###......#..#..#.......####..#
.#.#.....#..###...........##...
.##..##.##.....####..#..#..##..
..#..##.#......#...###.##..#.#.
....##..#.....###..#.##....##.#
#..#......#....#.........#.....
.#...#.....#.#..#..##....#.....
.##..#...#..##.#..#...........#
..#..##........##.......#..#...
#.....#....#....#.#.#...##.#...
...#...#.#.#..#.##.#.#...#.....
..#..#.#....#....###....#.#.#..
...###..#...#..#....#.....#....
...#...#.#..#.....#...###......
##......#..........#.#.#..#.#.#
....#.....#.....#..#..#.#.#.#..
...####...#.##...#.#..#....#.#.
#.##........##.............#.##
#.#.#.#.#.....................#
.#.###....#..##.##.##....#.....
#.#...#.####.###...#..#..#.#...
.##...#..###.......##..#.#.....
#.#.#.#...#...#.##.....#.......
.##.#.#.#......####..#.#.......
###..........#......#...##...#.
.........##...#.##...#.#.......
...#.#.....#...#..#...#..##..#.
.#..###...#.#.........###....#.
##..#...#........#.........##..
.....#...#.#...#.#.#...........
..#....##...#.#..#..#.##....##.
.##....#.#.....##.#..#..#...##.
..##......#.#...#.#.......##.#.
##...#..#...##.#........#.##...
#......#.##..#.#..#.###.......#
#.#...#.....#.#......#.#.#.....
#.....#..#.......#....##.#.#..#
###.#....#..##.#.##....#....#..
#.##.##....#.#..#.#...#....#...
####...#####...#.....#....##.#.
....#.#...#.#.##.#.#.##.#.#.###
#.....##.#.....#.#......#.#..#.
.#....##.#..#........#...##.#..
......#...#....##....##....##..
..###.....#....##.#...#..#.....
#....##...##.##..##.#...#...#..
#..#...#...#.#....##..#.#....#.
......................#.....#..
.#..#...#.........#....##...###
.##.#.#...##...#...#...#..#....
.#.###....#.#............##..#.
###..##.#.#.#.#....##...#......
.##................####...##.##
.#.#.........##....#.#.##.##.#.
....#...#...#...##...#.##.#..#.
.#.#........#..##.....#..#....#
##.#..#.#....#.....#...#...#...
.#...##....#.....##....#..#.#.#
####.....#..#....#......###.##.
##..##.#....###.....#...#......
.##.#...#.....#.#..#.#..#.#...#
.....#.#..#..#..###.#...###.#..
.#.#.##.#..#.#..#...#..#.......
..#.....#....#.##.##.##.......#
.#..##....###...#..............
#....#...#.#.......#....##.#...
....#.#..##.#....#..#.#....#.#.
#.........##...#.#.............
#.#.......##.....#...##..##.#.#
.......#....#..##...#..#######.
.#.#...##........#..#.....#.#..
.#.......#..#......#.##.##...##
.........#............#....#..#
.#......#...##...##...#....###.
.........#...#.#.###.......#...
###.#..#.#.#.#......##...#.#...
.#.........##.#....###....#.#..
#.#....#..#.##.#..#....##...#..
###.#...#..#..##........#.###..
.....#....#..#........#..#.##.#
..#.....##......#....#..#.#.#..
.#.........#.....#.....#.......
......#....#.###..#.#....#....#
..#.#..#.#.###.........#..#..#.
..#..#.#.#.........#....##.#.#.
#.......#........##...##....#..
##..#..#...###...#..##..#..#.#.
##..#..#....#.#..##..#..#.#..#.
..##.....##.#..#.#........###..
..#.#..#..##........#...#....##
.##..#....##..#..#..#..#.#....#
#....#.....##........#.....#.##
......#....#.#..#......#.##....
.......#..#..#......##.........
......#...#..##.....#......#..#
#..#..#....##....#........##..#
##....#...#.#.....#####........
...#.#..#.#.##.#.##..##...#....
..#..#..#..#..#....#..#..##...#
.#.....#....##.##....##.....#..
#...#.....#.....#.#...#.#....#.
.###...#..##....#..#...#.###...
....#..##..#.......#.##.##..###
#.......##.....#.......#.#...##
#.....#.#.#....#.#......#.#.#..
..##.....#..###......##........
.....#...#..##....#......#.....
#..#..#....#.#...#..###.......#
.....#.....#....#..#...#.#..##.
#####........#...#..#..##..#.#.
.#..#...#.##....#.#..#......###
#.###.#..#.....##..##....#...#.
.#...#.#####....##..........##.
`;

const movements = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
];

function numberOfTrees([right, down]: [number, number]): number {
  let treesEncountered = 0;
  let intoLine = 0;

  const lines = trees
    .trim()
    .split("\n")
    .map((str) => str.repeat(100));

  for (let i = 0; i < lines.length; i += down) {
    const line = lines[i].trim().split("");
    const max = intoLine + right;
    for (let j = intoLine; j < max; j++) {
      if (line[j] === "#" && intoLine === j) {
        treesEncountered += 1;
      }
    }
    intoLine = max;
  }
  return treesEncountered;
}

const total = movements
  .map(numberOfTrees)
  .reduce((acc, value) => acc * value, 1);

console.log(total);
