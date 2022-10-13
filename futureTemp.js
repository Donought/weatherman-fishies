function futureTemp() {
  function cLine(d) {
    stroke(0);
    line(x + 20, y + d, x + w - 20, y + d);
  }
  function cText(txt, o, d, s) {
    textSize(s);
    noStroke();
    fill(0);
    text(txt, x + o, y + d);
  }
  x = 450;
  y = 200;

  w = 800;
  h = 650;

  stroke(0);
  noFill();
  rect(x, y, w, h);

  cText("Fremtidige temperaturer", 20, 40, 30);

  cLine(60);
}
