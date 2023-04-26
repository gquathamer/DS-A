function solution(n) {
 // take n - 1 interesting polygon
 // append 1 interesting polygon to its rim
 // area of a square is side x side
 // 2 - 1 (1) + 4 = 5
 // 3 - 1 (5) + 8 = 13
 // 4 - 1 (13) + 12 = 25
 // 5 - 1 (25) + 16 = 41
 // 6 - 1 (41) + 20 = 61
 // 7 - 1 (61) + 24 = 85
 let counter = 1;
 let area = 1;
 let edges = 4;
 while (counter < n) {
  area = area + edges;
  edges += 4;
  counter++;
 }
 return area;
}

solution(3);
