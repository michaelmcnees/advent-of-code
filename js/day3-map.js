const map = ['...#..............#.#....#..#..',
'...#..#..#..............#..#...',
'....#.#.......#............#...',
'..##.....##.........#........##',
'...#...........#...##.#...#.##.',
'..#.#...#....#.....#........#..',
'....##.###.....#..#.......#....',
'.#..##...#.....#......#..#.....',
'............##.#...#.#.....#.#.',
'..........#....#....#.#...#...#',
'..##....#.#.#......#.........#.',
'#.#.........#..............##..',
'....##.##......................',
'....##..#...........#..........',
'..#..#.#........##....#......#.',
'..............#..#....#.....#..',
'.............#...#.....#...#...',
'.#...........#..........#...#..',
'.#......#.......#......#.......',
'#..#.............#..#....##.###',
'........#.#...........##.#...#.',
'......#..#.....##......#.......',
'.....#.....#....#..............',
'#...##.#......#......#...#.....',
'...........................#...',
'...#....................#.....#',
'..#.....#...#.....##.....#.....',
'....................#......#..#',
'.......#.....##......##....#...',
'#........##...#.....##..#...#..',
'........#..#.#......#..###..#.#',
'##.....#.............#.#....#..',
'..#.................#....######',
'.#.#..#.....#.#..........#.#...',
'.........#....#...#............',
'........#..#.....#.............',
'............#.#.............##.',
'...#....#..#......#............',
'.##....#.....#...#.#...........',
'..#..............#...........##',
'.....#.#.##...#................',
'..........#..#.#..........##..#',
'..#....#...#...#.....######....',
'....#.#..#........#....#.###...',
'.......................#.......',
'..#.....#.##................#..',
'.....#......#..#.....#........#',
'.#...###.......#.#.........#..#',
'............#..................',
'..#.........##.........##......',
'#...........#.#.......###.#....',
'.#...#.....#.........###.....#.',
'.#............#........#..#....',
'...##.#......##................',
'........#...#...#...#..........',
'.......#.##......##.#..........',
'....##.......#..#....#....#....',
'......#.........###........#...',
'#....#....####....##......#....',
'......................#....#.#.',
'...#.#.#....#.#...#...#......#.',
'......#.....##.#...........###.',
'#........#.........##......#.#.',
'....##.....#.....#..#..........',
'......#...#...#.........#...##.',
'..#........#..................#',
'.........#..##.#..#..#...#.#..#',
'.....#.....#...#.....###.....##',
'.............#....#...#........',
'..........#.#.#...#..#...#....#',
'#...............##.......#.....',
'#...#.............#..#...#....#',
'..#...#...##...##...#..#.......',
'..#..#........#.#...........#..',
'.....#.....#..................#',
'....#....##....###..###...##...',
'..#......###.........##....#.##',
'.......#.##...#.......#..#.....',
'...#.#.#.#.....##..#..#........',
'................##....#.#......',
'..#...#...#...#.....##.#...#..#',
'..#..#.....#..##....#....#.....',
'.###...#......#........#.....##',
'##......#..#........#..........',
'....#...#..#....##..#......####',
'.#.....##....#..........#......',
'.#...#....#.........#...#....#.',
'.....#..#.#..#......#..##....#.',
'...#.##...#...#........#......#',
'.#..#...#.#..#.........#...#...',
'#....#......##.....#.......#...',
'..##............##..#.#.#...#..',
'##.......#.......##............',
'#......#.##........#...#...#...',
'.#.#.......##.........#..#.#...',
'.............##.#........#.....',
'.#..#...###...#..#.............',
'.....#...#..#....#.......#.....',
'#.#.........#.#.#...#...#.#....',
'.....#.......#.##.##...#....#..',
'.#.##..#.....#...#.#.#.#.#..#..',
'..........#...................#',
'.....#.#.#...##.........#..#..#',
'.#..#....##......#...#.........',
'.##......#......#...#........#.',
'.....##.#......#............#.#',
'.#.....##..#...........##......',
'.....#......#.......##....#....',
'..#..##..........#.#..........#',
'#.#.......##..#..##.#....#.....',
'.......#..#.#.......##......#.#',
'....#...##...#..............#..',
'.....#.........#......#...##...',
'#.........#........##..#.....#.',
'.#.#..#.....##.......#......#..',
'........#..#....#.....###..#...',
'#.#..#.#..........#............',
'..#......##..#....#.........#..',
'#..............................',
'.......#............#..#..#.#..',
'.#.....#.#....#..#.##.#........',
'.......#.###.#........##.#..#..',
'..............#....#.....##.#..',
'#..............#....#.###......',
'.#..#..#...###............#...#',
'.#.##...#....#..#...#...#......',
'......##..#..#......#..#....#..',
'.........#.......##............',
'...........##...#..#....####...',
'.#..................#..........',
'#...#..#..................#....',
'..............#.....##.....#...',
'..#.#..#...##..#.....#.....#..#',
'....#....#.#.........#.....#...',
'.#.......#...#....#...#.#..#..#',
'#.........##.....##.......#...#',
'#..#............#....#........#',
'..........##...#......#....#...',
'.......#..##...............#...',
'#............#.#.#.....#.......',
'.#........##...#...............',
'..##....#.....#..#.##.#......#.',
'.#...#.............#...#.....#.',
'...##....#.......#......#.#..#.',
'#......................#..#.##.',
'...#..........#..#.........#...',
'..#......#.......#.#....#......',
'....#............#...#......#..',
'.....#..#..##...#...#.........#',
'.....#......#....#....#........',
'.............#..#..........#...',
'....#..............#.....#.#...',
'....#.................#.#...#.#',
'.........#.#...........###.#.##',
'#...........#..##.#....#.##.#..',
'#.#.....#......................',
'##.#.........#....##.#.#..#.#..',
'#..........#.#.#.#.#..#..##..#.',
'..#...#..###.........#......#..',
'.....#......#..#.#............#',
'...........#...#.#.#.###....#..',
'#....#..#.......##.#.......##..',
'..............#.....##.#.......',
'.#.....#.#..#.........#.#.#..#.',
'..#..#..#..#................#..',
'...........#..#.#...#.........#',
'.#..#..#...#........#...#.#..#.',
'...#.#..#......#..#............',
'........#......##.....#....#...',
'#...#......##.#.#..............',
'.#........................#....',
'#.#.....#.##.....#..#.#........',
'#..........##.#.......#....#..#',
'#...#..#..#.....#....#....#....',
'#...........#..#.#....##.##....',
'##......#..#........#.......##.',
'#........#..#...#..........#...',
'...#...#......##....#.#........',
'...##..#..#.##....#...#........',
'#.#..#....#...#........#.......',
'..........#.......#..........#.',
'......##...#....###...#....#...',
'........#..#.....#......#......',
'....#.........##...#..##......#',
'....#...........#.#..#.#.#.#..#',
'..#......#..#......#........#.#',
'#..#....#.....#.............#..',
'............................#..',
'#...#.#.....#...#....#....#....',
'........#...#...#...#...#......',
'.###........#....#.##.....##.#.',
'.........#.....#..........#....',
'.#.........#....##.#.....#.....',
'#..#....................##.#...',
'..##.#.............#....#.#....',
'..#.#........#............##.#.',
'#........#...##.....#...#.....#',
'.........#.#..........#....#..#',
'...###.#..#.#......#.#.....#...',
'......#.....#..#...#........#..',
'.......#...#.....#....#....#..#',
'.#.#........#......##.......#..',
'#.................###..........',
'#........#.#..#....#..#........',
'..##....#.#...##...#...##....#.',
'...#.#......##...#.....#..#....',
'#..#........#...###....#.......',
'##.#....#..#.#..........#......',
'....#...###...#.....#........#.',
'..#.#........#....##.#.........',
'......##.##.................##.',
'.#....##...#.#..#.#............',
'.#...###........#......#.......',
'##..#.#......#..#..#...#.......',
'.......##..#....#........#....#',
'......#..........#.............',
'....##..##..#......#.#.........',
'.....#....................##...',
'...###.....#.....#...#.#.##.#..',
'....#.#..#.......#..#......##..',
'.......#.#..#.##.#...#......#..',
'...#.#....#.#...#..##...#...#..',
'#.##...#....#..#.............#.',
'...#...#...#.......#..........#',
'.#..#.............#..##.#......',
'....#.......#..............#.#.',
'..................#..#.....##.#',
'.#...#..#......#..........#...#',
'..#.#.....#..#....#....#####.#.',
'.......###.......#....#....#...',
'......#.#........#...#.........',
'......#..#.#.#....#.#.#....##..',
'.#...#.#...##.#......#.........',
'#....#..##....#.#.......#....#.',
'..##.#.....#.....#.........#...',
'......#......#....#....#.....#.',
'...##.....#....#......#......#.',
'......#......##............#.#.',
'.##.#.......#....#...#....#....',
'....#..#..#...##.......#..#....',
'....#....#...#.#........#..#...',
'....#.....#..........#..#......',
'....#....#...#.....#..##.....#.',
'##...#..##......#....##..#..#..',
'.....##.##..............##.....',
'#.#....#.##..#....#...##.......',
'..#.....##.....#.....######...#',
'...#.....#.#.#......#......##.#',
'...........##.............#....',
'...##......#..#......#...#.....',
'....#.##......#..#....#.#..#...',
'.#..#....#...#..#.....##.......',
'.....#..#.................#..#.',
'................#..#...#......#',
'...##....#.....#..#....##......',
'....##...............##...#....',
'......#..........#..##.........',
'.......###.......#.........#..#',
'......................#....#.#.',
'#.#.....#...##............#....',
'........#......##......#.....#.',
'...#....#....#.#..##.#..#.#.#..',
'..#.#....#.##...#..#.....#.#...',
'............#....#..#.......#..',
'#...#...#.#......#...##.....#.#',
'......#....#....#.......#......',
'....#.......#..........#....#..',
'........#####........#....#....',
'......#....##..............#.#.',
'....#....#.......#.......#.....',
'.##.#....##....#...............',
'#.....##........#..#.#...#.#...',
'...#......##....#..............',
'.#.....#.....#.......##....##..',
'#....#..........#.#..#.........',
'......##..........##.......#...',
'.##......##.....#.#....#......#',
'....#......................#...',
'.#...........###........#...#..',
'#.#..#..#..#...##.#....#.#..#..',
'...##...........#.#..........#.',
'......#.#..#....#....#.........',
'....#....#.#......#.........##.',
'.#..#...#...##....#...#......#.',
'#.#......#...#.#.#...........#.',
'##.....#..........##....##..##.',
'...#.#.....#..##........#......',
'..#........##........#..#......',
'.......#...............##..#...',
'.......#.#....#..###...........',
'.............#........#...#....',
'#.................#......#..#..',
'...#....#..#..............#...#',
'.............#....##....#..##..',
'#........#..........##...##...#',
'............#....#.....#.#....#',
'.....#..............##..#...#..',
'..#....#......###....#.#...##..',
'....##......#.....#....#.......',
'.....#...............#.....#...',
'.#.....#.....#..............#..',
'#................#..#..........',
'.##....#....#.....#............',
'#.####...#..#..#....#..........',
'..##........##.....##......#..#',
'......#.....#...##.........##..',
'....##..#.....#.#.........#...#',
'.....##..#....#....#.#...#..#..',
'...#............#...........#..',
'.......#.#..#.#.#..#........#.#',
'....#.#........#.#.#..#...#...#',
'..#....#....#..#......#........',
'.#...........................#.',
'.#..#....####........##......#.',
'.#.....#..#.#.................#',
'.#..#...........#...#....#...#.',
'......##..#........#..#....#...',
'..#.............#....#........#',
'#.#..........#.##.......#.#..#.',
'..#....#...#...............#...',
'..............#..........#..#..',
'..#.....#.#.....#...#...#..#...',
'.........#...###.#...#........#']